Rails.application.routes.draw do

  scope '/v1' do
    # questions
    resources :questions, only: :index  
  end
end
