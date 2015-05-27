class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :title
      t.boolean :is_income
      t.text :children
      t.text :image

      t.timestamps
    end
  end
end
