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
        influencer = Influencer.new(influencer_params)

        if ito.save && influencer.save
          render json: { status: 'SUCCESS', data: [ito, influencer] }
        else
          render json: { status: 'FAILED', message: 'could not create message', data: [event.errors, influencer.errors] }
        end
      end

      private

      def ito_params
        params.require(:itos).permit(:story, :event_id)
      end

      def influencer_params
        params.require(:itos).permit(:name, :ito_id)
      end
    end
  end
end
