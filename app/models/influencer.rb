# frozen_string_literal: true

class Influencer < ApplicationRecord
  validates :name, presence: true
  validates :ito_id, presence: true
end