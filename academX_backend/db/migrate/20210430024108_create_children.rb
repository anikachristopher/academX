class CreateChildren < ActiveRecord::Migration[6.1]
  def change
    create_table :children do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :grade

      t.timestamps
    end
  end
end
