require 'rails_helper'

RSpec.describe User, type: :model do

    context "ユーザーが登録する時" do
        example "名前とメールアドレスとパスワードがあれば登録できる" do 
            is_asserted_by { !build(:user) }
        end 
    
        example "名前がなければ登録できない" do 
            is_asserted_by { !build(:user, name: '') }
        end 
    
        example "メールアドレスがなければ登録できない" do 
            is_asserted_by { !build(:user, email: '') }
        end 
    
        example "メールアドレスが重複していたら登録できない" do 
            user1 = FactoryBot.create(:user,name: "taro", email: "taro@example.com")
            is_asserted_by { !build(:user, name: 'ziro', email: user1.email) }
        end 
    
        example "パスワードがなければ登録できない" do 
            is_asserted_by { !build(:user, password: '') }
        end 
    
        example "パスワードが暗号化されているか" do 
            user = FactoryBot.create(:user)
            expect(user.password_digest).to_not eq "password"
        end 
    
        example "password_confirmationとpasswordが異なる場合保存できない" do 
            is_asserted_by { !build(:user, password: "password", password_confirmation: "password") }
        end 
    end
end