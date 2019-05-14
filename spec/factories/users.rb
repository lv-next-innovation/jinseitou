FactoryBot.define do 
  factory :user do 
      name { "Kota" }
      sequence(:email) { |n| "kota#{n}@example.com" }
      password { "password" }
  end 
end 
