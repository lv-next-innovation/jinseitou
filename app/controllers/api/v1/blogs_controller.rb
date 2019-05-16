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
          render json: { status: 'FAILED', message: 'could not create message', data: blog.erros }
        end
      end

      private

      def blog_params
        params.permit(:message)
      end
    end
  end
end
