class CarriersController < ApplicationController
  def index
    carriers = Carrier.all
    options = {
      exclude: [:created_at, :updated_at]
    }
    render json: CarrierSerializer.new(carriers, options)
  end

    def create
      
    end
end
