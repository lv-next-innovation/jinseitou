class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false, default: ''
      t.datetime :event_date, null: false, default: -> { "NOW()" }
      t.integer :user_id
      t.timestamps
    end
  end
end
