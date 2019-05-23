class CreateItos < ActiveRecord::Migration[5.2]
    def change
      create_table :itos do |t|
        t.string :story, null: false, default: ''
        t.bigint :event_id, null: false
        t.timestamps
      end
    end
  end
  