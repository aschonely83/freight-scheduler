Rails.application.routes.draw do
  resources :businesses, except: [:new] do 
    resources :carriers, only: [:show, :create] 
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
