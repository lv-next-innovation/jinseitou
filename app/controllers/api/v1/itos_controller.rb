# frozen_string_literal: true

module Api
  module V1
    class ItosController < ApplicationController
      protect_from_forgery

      def index
        itos = Ito.all
        render json: { status: 'SUCCESS', message: 'loaded Itos', data: itos }
      end

      def create
        ito = Ito.create(ito_params)

        render json: { status: 'SUCCESS', itos: ito }
      end

      private

      def ito_params
        params.permit(:target, :thread)
      end
    end
  end
end
