class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.integer :section
      t.integer :subsection
      t.boolean :is_income
      t.integer :amount
      t.date    :date
      t.text    :detail

      t.timestamps
    end
  end
end
