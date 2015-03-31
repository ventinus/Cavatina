class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :parent_id
      t.string :title, null: false
      t.text :description, null: false
      t.string :type_of_reservation, null: false
      t.string :date, null: false
      t.string :time_in, null: false
      t.string :time_out, null: false
      t.boolean :open_to_public, null: false

      t.references :room, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :reservations, :rooms
    add_foreign_key :reservations, :users
  end
end
