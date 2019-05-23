# frozen_string_literal: true

module Api
  module V1
    class InfluencersController < ApplicationController
      protect_from_forgery

      def index
        influencers = Influencer.all
        render json: { status: 'SUCCESS', message: 'loaded influencers', data: influencers }
      end

      def show
        influencer = Influencer.find(params[:id])
        render json: { status: 'SUCCESS', message: 'loaded influencers', data: influencer }
      end

      def create
        influencer = Influencer.create(influencer_params)
        render json: { status: 'SUCCESS', data: influencer }
      end

      private

      def influencer_params
        params.require(:influencers).permit(:name, :ito_id)
      end
    end
  end
end
