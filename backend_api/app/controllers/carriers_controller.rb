class CarriersController < ApplicationController
  
  def show
    carrier = Carrier.find_by(id: params[:id])
    render json: CarrierSerializer.new(carrier)
  end
  
  def create
    if params[:business_id]
      business = Business.find(params[:business_id])
      carrier = business.carriers.build(carrier_params)
      if carrier.save
        render json: CarrierSerializer.new(carrier)
      end        
    end
  end

  private

  def carrier_params
    params.permit(:name, :email, :confirmation_number, :business_id)
  end

end
