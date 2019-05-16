# frozen_string_literal: true

module Api
  module V1
    class BlogsController < ApplicationController

      protect_from_forgery

      def index
        blogs = Blog.all
        render json: { status: 'SUCCESS', message: 'loaded blogs', data: blogs }
      end

      def show
        blog = Blog.find(params[:id])
        render json: { status: 'SUCCESS', message: 'loaded single blog', data: blog}
      end

      def create
        blog = Blog.new(blog_params)

        if blog.save
          render json: { status: 'SUCCESS', message: 'message created', data: blog }
        else
          render json: { status: 'FAILED', message: 'could not create message', data: blog.errors }
        end
      end

      def destroy
        blog = Blog.find(params[:id])
        blog.destroy
        render json: { status: 'SUCCESS', message: 'message has been deleted successfully' }
      end

      def update
        blog = Blog.find(params[:id])
        blog.update( message: params[:message] )
        render json: { status: 'SUCCESS', message: 'message has been created successfully', data: blog }
      end

      private

      def blog_params
        params.permit(:message, :user_id)
      end
    end
  end
end
