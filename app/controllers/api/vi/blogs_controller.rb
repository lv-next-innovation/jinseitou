module Api
    module V1
      class BlogsController < ApplicationController
        def index
          posts = Blog.order(created_at: :desc)
          render json: { status: 'SUCCESS', message: 'loaded blogs', data: blogs }
        end
    end
  end