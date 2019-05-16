# frozen_string_literal: true

class Blog < ApplicationRecord
  validates :message, presence: true
  validates :user_id, presence: true
end
