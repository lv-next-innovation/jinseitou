# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'バリデーション' do

    context 'emailが空' do
      let(:user) { build :user, email: '' }

      example '永続化できない' do
        is_asserted_by { !user.email.nil? }
        is_asserted_by { !user.valid? }
      end
    end

    context '名前とメールアドレスとパスワードがあれば登録できる' do
      let(:user) { build :user }

      example '永続化できる' do
        is_asserted_by { user.valid? }
      end
    end

    context '名前がなければ登録できない' do
      let(:user) { build :user, name: '' }
      example '永続化できない' do
        is_asserted_by { !user.valid? }
      end
    end

    context 'メールアドレスがなければ登録できない' do
      let(:user) { build :user, email: '' }
      example '永続化できない' do
        is_asserted_by { !user.valid? }
      end
    end

    context 'メールアドレスが重複していたら登録できない' do
      let!(:user) { create :user, email: 'Kota@kota-inc.com' }
      let(:duplicate_user) { build :user, email: 'Kota@kota-inc.com' }

      example '永続化できない' do
        is_asserted_by { !duplicate_user.valid? }
      end
    end

    context 'パスワードがなければ登録できない' do
      let(:user) { build :user, password: '' }

      example '永続化できない' do
        is_asserted_by { !user.valid? }
      end
    end
  end
end
