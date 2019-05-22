# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  namespace 'api' do
    namespace 'v1' do
      resources :events
      get '/question/detail', to: 'questions#show'
      get '/itos', to: 'itos#index'
      post '/itos', to: 'itos#create'
    end
  end
end
