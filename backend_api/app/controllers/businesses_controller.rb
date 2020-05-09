class BusinessesController < ApplicationController
  
  #GET /businesses
    def index
      render :json => Business.all, :include => :carriers    
  end
  
  # DELETE /businesses/1
  def destroy
    Business.find(params[:id]).destroy
    redirect_to '/businesses'
  end
  
end

