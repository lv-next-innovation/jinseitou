class CreateInfluencers < ActiveRecord::Migration[5.2]
  def change
    create_table :influencers do |t|
      t.string :name, null: false, default: ''
      t.integer :ito_id, null: false
      t.timestamps
    end
  end
end
