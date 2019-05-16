# frozen_string_literal: true

module Api
    module V1
      class AnswersController < ApplicationController

        protect_from_forgery

        def create
          answer = Answer.create(answer_params)
          
          render json: { status: 'SUCCESS', answer: answer }
        end

        private

        def answer_params
            params.require(:answer).permit(:content, :question)
        end
      end
    end
  end
  