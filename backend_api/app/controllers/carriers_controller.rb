class CarriersController < ApplicationController
    def index
      carriers = Carrier.all 
      render json: CarrierSerializer.new(carriers)    
    end

    def create
      carrier = Carrier.new(carrier_params)
      if carrier.save
        render json: carrier, status: :accepted
      else 
        render json: {errors: carrier.errors.full_messages}, status: :unprocessible_entity   
      end   
    end

    private
    def carrier_params
        params.require(:carrier).permit(:name, :email, :confirmation_number, :business_id)
    end
end
