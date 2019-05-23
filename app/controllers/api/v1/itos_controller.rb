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
        render json: { status: 'SUCCESS', data: ito }
      end

      private

      def ito_params
        params.require(:itos).permit(:story, :event_id)
      end
    end
  end
end
