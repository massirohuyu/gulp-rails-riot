class CreateSubsections < ActiveRecord::Migration
  def change
    create_table :subsections do |t|
      t.string :title
      t.integer :parent

      t.timestamps
    end
  end
end
