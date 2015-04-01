Rails.application.routes.draw do
  resources :rooms

  devise_for :users
  resources :reservations

  resources :posts

  root to: 'welcome#index'
  get '/about_us', to: 'welcome#about'
  get '/contact', to: 'welcome#contact'
  get '/privacy_policy', to: 'welcome#privacy_policy'
  get '/terms_and_conditions', to: 'welcome#terms_and_conditions'
  
end
