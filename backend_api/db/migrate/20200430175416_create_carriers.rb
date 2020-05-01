class CreateCarriers < ActiveRecord::Migration[6.0]
  def change
    create_table :carriers do |t|
      t.string :name
      t.string :email
      t.string :confirmation_number
      t.integer :business_id

      t.timestamps
    end
  end
end
