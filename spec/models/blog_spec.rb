require 'rails_helper'

RSpec.describe Blog, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
  context 'ブログを作成する時' do
    example 'ユーザーIDとブログ本文があれば作成できる' do
      is_asserted_by { !build(:blog) }
    end

    example 'ユーザーIDがないと作成できない' do
      is_asserted_by { !build(:blog, user_id: '') }
    end

    example 'ブログ本文がないと作成できない' do
      is_asserted_by { !build(:blog, content: '') }
    end
  end
end
