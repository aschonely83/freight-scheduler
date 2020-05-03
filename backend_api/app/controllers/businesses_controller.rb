class BusinessesController < ApplicationController
  
  #GET /businesses
    def index
    businesses = Business.all 
    render json: BusinessSerializer.new(businesses)    
  end
  
  # GET /businesses/1
  def show
    business = Business.find_by(id: params[:id])
    options = {
      include: [:carriers]
    }
    render json: BusinessSerializer.new(business, options)    
  end

  # POST /businesses
  def create
    business = Business.new(business_params)
    if business.save
    render  json: business, status: accepted
    else
      render json: {errors: business.errors.full_messages}, status: :unprocessable_entity
    end    
  end

  # PATCH/PUT /businesses/1 
  def updated
    if business.update(business_params)
      render json: business
    else
      render json: business.error, status: :unprocessable_entity      
    end
  end
  
  # DELETE /businesses/1
  def destroy
    business.destroy
  end
  
  private
  def set_business
    business = Business.find(params[:id])
  end

  def business_params
    params.require(:business).permit(:name, :pallets, :scheduled_day, :confirmation_number)
  end
end

