# frozen_string_literal: true

module Api
  module V1
    class QuestionsController < ApplicationController
      def show
        yml = YAML.load_file("config/question.yml")
        
        render json: { status: 'SUCCESS', question: yml.sample }
      end
    end
  end
end
