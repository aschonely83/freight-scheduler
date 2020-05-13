class BusinessesController < ApplicationController
  
  #GET /businesses
  def index
    businesses = Business.all
    render json: BusinessSerializer.new(businesses)
  end
    
  def show
    business = Business.find_by(id: params[:id])
    render json: BusinessSerializer.new(business)
  end
  
   #create /businesses
  def create
    business = Business.create(name: params[:name], pallets: params[:pallets], scheduled_day: params[:scheduled_day], 
    confirmation_number: params[:confirmation_number])
    render json: business, status: 200
  end 
end     