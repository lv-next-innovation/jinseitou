# frozen_string_literal: true

FactoryBot.define do
  factory :blog do
    sequence(:content) { |n| "content#{n}" }
    sequence(:user_id) { 1 }
  end
end
