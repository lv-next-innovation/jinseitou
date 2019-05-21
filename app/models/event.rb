# frozen_string_literal: true

class Event < ApplicationRecord
  validates :message, presence: true
  validates :user_id, presence: true
end
