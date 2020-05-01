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

  # POST /businesses
  def create
    business = Business.create(name: params[:name], pallets: params[:pallets], scheduled_day: params[:scheduled_day], confirmation_number: params[:confirmation_number])
    render  json: business, except: [:created_at, :updated_at]  
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
  
  #private
  #def business_params
   # params.require(:business).permit( :name, :pallets, :scheduled_day, :confirmation_number)
  #end
end
