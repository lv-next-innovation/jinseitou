# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Event, type: :model do
  context 'ユーザーIDとブログ本文があれば作成できる' do
    let(:event) { build :event }

    example '永続化できる' do
      is_asserted_by { event.valid? }
    end
  end

  context 'ユーザーIDがないと作成できない' do
    let(:event) { build :event, user_id: nil }

    example '永続化できない' do
      is_asserted_by { !event.valid? }
    end
  end

  context 'ブログ本文がないと作成できない' do
    let(:event) { build :event, content: '' }

    example '永続化できない' do
      is_asserted_by { !event.valid? }
    end
  end

  context 'ブログ本文がないと作成できない' do
    let(:event) { build :event, content: '' }

    example '永続化できない' do
      is_asserted_by { !event.valid? }
    end
  end
end
