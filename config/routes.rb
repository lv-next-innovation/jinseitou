# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  namespace 'api' do
    namespace 'v1' do
      resources :events
      get '/question/detail', to: 'questions#show'
      get '/itos', to: 'itos#index'
      get '/itos/:id', to: 'itos#show'
      post '/itos', to: 'itos#create'
      get '/influencers', to: 'influencers#index'
      get '/influencers/:id', to: 'influencers#show'
      post '/influencers', to: 'influencers#create'
    end
  end
end
