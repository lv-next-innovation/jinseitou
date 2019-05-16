# frozen_string_literal: true

module Api
	module V1
		class UsersController < ApplicationController

			protect_from_forgery

			def show
				user = User.find(params[:id])
				render json: { status: 'SUCCESS', user: user }
			end

			def destroy
        user = User.find(params[:id])
        user.destroy
        render json: { status: 'SUCCESS' }
      end

		end
	end
end
