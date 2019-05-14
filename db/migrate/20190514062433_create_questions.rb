# 遺書に対して質問を行うマイグレーションクラス
class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :user_id,              null: false, default: 0
      t.string :text,                 null: false, default: ""
    end

  end
end
