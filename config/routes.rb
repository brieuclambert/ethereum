Rails.application.routes.draw do
  resources :platforms, only: [:index, :new, :create, :update, :edit, :show]
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
