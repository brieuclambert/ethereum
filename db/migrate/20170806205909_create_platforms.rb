class CreatePlatforms < ActiveRecord::Migration[5.1]
  def change
    create_table :platforms do |t|
      t.string :name
      t.string :url
      t.text :description
      t.integer :note
      t.boolean :card
      t.boolean :transfer
      t.boolean :crypto
      t.boolean :paypal
      t.string :language

      t.timestamps
    end
  end
end
