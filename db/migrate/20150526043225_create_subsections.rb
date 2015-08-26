class CreateSubsections < ActiveRecord::Migration
  def change
    create_table :subsections do |t|
      t.string :title
      t.integer :section

      t.timestamps
    end
  end
end
