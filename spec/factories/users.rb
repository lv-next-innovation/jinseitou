# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    sequence(:email)    { |n| "test#{n}@test.com" }
    sequence(:password) { |n| n.to_s * 8 }
    sequence(:name)     { |n| "Kota#{n}" }
  end
end
