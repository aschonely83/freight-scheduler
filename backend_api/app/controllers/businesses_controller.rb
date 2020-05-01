class BusinessesController < ApplicationController
  #GET /businesses
    def index
    businesses = Business.all 
    render json: businesses, except: [:created_at, :updated_at]    
  end
  
  # GET /businesses/1
  def show
    business = Business.find_by_id(params[:id])
    render json: business, except: [:created_at, :updated_at]    
  end
end
