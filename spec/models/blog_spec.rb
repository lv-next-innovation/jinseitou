require 'rails_helper'

RSpec.describe Blog, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
  context 'ブログを作成する時' do
    example 'ユーザーIDと本文があれば作成できる' do
      is_asserted_by { !build(:blog) }
    end

    example '名前がなければ登録できない' do
      is_asserted_by { !build(:user, name: '') }
    end
  end
end
