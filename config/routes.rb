Rails.application.routes.draw do
  root 'application#index'

  devise_for :users

  get 'api/scores/', to: "score#all"
  post 'api/scores/create', to: "score#create"

  get 'api/users/', to: "user#all"
  get 'api/users/current', to: "user#current"
  get 'api/users/search', to: "user#search"

  get '*path', to: 'application#index'
end
