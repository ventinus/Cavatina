class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new]
  before_action :ensure_current_user_creator!, only: [:edit, :update, :destroy]

  # GET /reservations
  # GET /reservations.json
  def index
    @reservations = Reservation.roots
    @reservation = Reservation.new
    respond_to do |format|
      format.html { render :index }
      format.json do 
        if params[:room_id]
          @reservations = @reservations.select{ |reserve| reserve.room_id == params[:room_id].to_i }
        end
      end
    end
  end

  # GET /reservations/1
  # GET /reservations/1.json
  def show
  end

  # GET /reservations/new
  def new
    @reservation = Reservation.new
    @reservation.parent_id = params[:parent_id]
  end

  # GET /reservations/1/edit
  def edit
  end

  # POST /reservations
  # POST /reservations.json
  def create
    @reservation = Reservation.new(reservation_params)
    start_time = reservation_params["time_in(4i)"] + ":" + reservation_params["time_in(5i)"]
    end_time = reservation_params["time_out(4i)"] + ":" + reservation_params["time_out(5i)"]
    @reservation.time_in = start_time
    @reservation.time_out = end_time
    @reservation.user_id = current_user.id
    respond_to do |format|
      if @reservation.save
        format.html { redirect_to @reservation, notice: 'Reservation was successfully created.' }
        format.json { render :show, status: :created, location: @reservation }
      else
        format.html { render :new }
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reservations/1
  # PATCH/PUT /reservations/1.json
  def update
    respond_to do |format|
      if @reservation.update(reservation_params)
        format.html { redirect_to @reservation, notice: 'Reservation was successfully updated.' }
        format.json { render :show, status: :ok, location: @reservation }
      else
        format.html { render :edit }
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reservations/1
  # DELETE /reservations/1.json
  def destroy
    @reservation.destroy
    respond_to do |format|
      format.html { redirect_to reservations_url, notice: 'Reservation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reservation_params
      params.require(:reservation).permit(:parent_id, :title, :description, :room_id, :type_of_reservation, :date, :time_in, :time_out, :open_to_public)
    end

    def ensure_current_user_creator!
      unless current_user.id == @reservation.user_id
        sign_out current_user
        redirect_to root_path
      return false
    end
  end
end

