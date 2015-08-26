class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :title
      t.boolean :is_income
      t.text :subsections
      t.text :image

      t.timestamps
    end
  end
end
