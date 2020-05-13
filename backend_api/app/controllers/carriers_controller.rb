class CarriersController < ApplicationController
  def index
    carriers = Carrier.all
    render json: CarrierSerializer.new(carriers)
  end

  def show
    carrier = Carrier.find_by(id: params[:id])
    render json: CarrierSerializer.new(carrier)
  end
  
  def create
    carrier = Carrier.new(carrier_params)
    if carrier.save
      render json: CarrierSerializer.new(carrier)
    end        
  end

  private

  def carrier_params
    params.require(:carrier).permit(:name, :email, :confirmation_number, :business_id)
  end

end
