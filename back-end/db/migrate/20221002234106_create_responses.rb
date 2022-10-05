class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.integer :category
      t.string :name
      t.references :question, null: false, foreign_key: true
      t.timestamps
    end
  end
end
