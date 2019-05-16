require 'rails_helper'

RSpec.describe Blog, type: :model do
  context 'ユーザーIDとブログ本文があれば作成できる' do
    let(:blog) { build :blog }

    example '永続化できる' do
      is_asserted_by { blog.valid? }
    end
  end

  context 'ユーザーIDがないと作成できない' do
    let(:blog) { build :blog, user_id: nil }

    example '永続化できない' do
      is_asserted_by { !blog.valid? }
    end
  end

  context 'ブログ本文がないと作成できない' do
    let(:blog) { build :blog, content: '' }

    example '永続化できない' do
      is_asserted_by { !blog.valid? }
    end
  end
end
