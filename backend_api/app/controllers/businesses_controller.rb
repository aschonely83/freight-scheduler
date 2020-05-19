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
    business = Business.create(business_params)
    if business.save
    render json: BusinessSerializer.new(business).serialized_json
    end
  end

  #def destroy
  #  business = Business.find(params[:id])
  #  if business.destroy
  #    render json: {message: "Business Deleted"}
  #  end
  #end

  private

  def business_params
    params.require(:business).permit(:name, :pallets, :scheduled_day, :confirmation_number)
  end

end     