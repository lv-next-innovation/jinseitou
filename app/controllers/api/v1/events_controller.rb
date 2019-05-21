# frozen_string_literal: true

module Api
  module V1
    class EventsController < ApplicationController

      protect_from_forgery

      def index
        events = Event.all
        render json: { status: 'SUCCESS', message: 'loaded events', data: events }
      end

      def show
        event = Event.find(params[:id])
        render json: { status: 'SUCCESS', message: 'loaded single event', data: event}
      end

      def create
        event = Event.new(event_params)

        if event.save
          render json: { status: 'SUCCESS', message: 'message created', data: event }
        else
          render json: { status: 'FAILED', message: 'could not create message', data: event.errors }
        end
      end

      def destroy
        event = Event.find(params[:id])
        event.destroy
        render json: { status: 'SUCCESS', message: 'message has been deleted successfully' }
      end

      def update
        event = Event.find(params[:id])
        event.update( message: params[:message] )
        render json: { status: 'SUCCESS', message: 'message has been created successfully', data: event }
      end

      private

      def event_params
        params.permit(:message, :user_id)
      end
    end
  end
end
