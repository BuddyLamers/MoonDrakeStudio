MoonDrakeStudio::Application.routes.draw do
  root :to => "index#index"
  namespace :api, :defaults => { :format => :json } do
    resources :pictures
  end
end
