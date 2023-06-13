class UpdateBusinesses < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :phone, :string, null: false
  end
end
