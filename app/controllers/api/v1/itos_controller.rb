# frozen_string_literal: true

module Api
  module V1
    class ItosController < ApplicationController
      protect_from_forgery

      def index
        itos = Ito.all
        render json: { status: 'SUCCESS', message: 'loaded Itos', data: itos }
      end

      def show
        ito = Ito.find(params[:id])
        render json: { status: 'SUCCESS', message: 'loaded Itos', data: ito }
      end

      def create
        ito = Ito.new(ito_params)

        if ito.save
          render json: { status: 'SUCCESS', data: ito }
        else
          render json: { status: 'FAILED', message: 'could not create message', data: event.errors }
        end
      end

      private

      def ito_params
        params.require(:itos).permit(:story, :event_id)
      end
    end
  end
end
