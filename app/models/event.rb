# frozen_string_literal: true

class Event < ApplicationRecord
  validates :title, presence: true
  validates :date, presence: true
  validates :user_id, presence: true
end