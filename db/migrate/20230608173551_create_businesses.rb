class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.json :hours, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :address, null: false
      t.string :business_type, null: false
      t.timestamps
    end

    add_index :businesses, :name
    add_index :businesses, :business_type 
  end
end
