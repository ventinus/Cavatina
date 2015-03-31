Rails.application.routes.draw do
  resources :rooms

  devise_for :users
  resources :reservations

  resources :posts

  root to: 'welcome#index'

end
