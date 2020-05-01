class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.string :name
      t.integer :pallets
      t.string :scheduled_day
      t.integer :confirmation_number
      
      t.timestamps
    end
  end
end
