# frozen_string_literal: true

class Ito < ApplicationRecord
  validates :story, presence: true
  validates :event_id, presence: true

  belongs_to :event
  has_many :influencers
end
