module Api
    module V1
      class UsersController < ApplicationController
        def index
          users = User.order(created_at: :desc)
          render json: { status: 'SUCCESS', message: 'yahhooo', data: users }
      end
    end
  end
end