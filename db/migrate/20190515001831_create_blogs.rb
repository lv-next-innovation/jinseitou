class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :content, null: false, default: ''
      t.integer :user_id
      t.datetime :published_at
      t.timestamps
    end
  end
end
