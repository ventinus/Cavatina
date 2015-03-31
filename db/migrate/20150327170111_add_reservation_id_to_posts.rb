class AddReservationIdToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :reservation_id, :integer
  end
end
