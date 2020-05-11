class CarrierSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :confirmation_number, :business_id, :business
  belongs_to :business
end
