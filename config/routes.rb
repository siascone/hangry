Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get 'api/test', to: 'application#test'

  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]
      resources :businesses, only: [:index, :show]
      resource :session, only: [:create, :show, :destroy]
  end

  get '*path', to: 'static_pages#frontend_index'

end
