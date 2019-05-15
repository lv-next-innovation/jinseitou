module Api
  module V1
    class BlogsController < ApplicationController

      def index
        blogs = Blog.all
        render json: { status: 'SUCCESS', message: 'loaded blogs', data: blogs }
      end

      def show
        blog = Blog.find(params[:id])
        render json: { status: 'SUCCESS', message: 'loaded single blog', data: blog}
      end


    end
  end
end