# frozen_string_literal: true

module Api
	module V1
		class UsersController < ApplicationController

			def show
				user = User.find(params[:id])
				render json: { status: 'SUCCESS', user: user }
			end

		end
	end
end
