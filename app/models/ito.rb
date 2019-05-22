# frozen_string_literal: true

class Ito < ApplicationRecord
    validates :target, presence: true
    validates :thread, presence: true
end
