class CreateItos < ActiveRecord::Migration[5.2]
    def change
      create_table :itos do |t|
        t.string :target, null: false, default: ''
        t.string :thread, null: false, default: ''
        t.integer :event_id, null: false
        t.timestamps
      end
    end
  end
  