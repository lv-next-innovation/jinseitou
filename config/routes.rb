# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  namespace 'api' do
    namespace 'v1' do
      resources :blogs
      resources :users
    end
  end

end
