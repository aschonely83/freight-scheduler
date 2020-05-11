class BusinessesController < ApplicationController
  
  #GET /businesses
  def index
    businesses = Business.all
    options = {
      include: [:carriers],
      exclude: [:created_at, :updated_at]
    }
    render json: BusinessSerializer.new(businesses, options)
  end
    
  def show
    business = Business.find(params[:id])
    render json: BusinessSerializer.new(business) 
  end
  
   #create /businesses
  def create
    business = Business.create(name: params[:name], pallets: params[:pallets], scheduled_day: params[:scheduled_day], 
    confirmation_number: params[:confirmation_number])
    render json: BusinessSerializer.new(businesses)
  end 
end     