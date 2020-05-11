class BusinessSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :pallets, :scheduled_day, :confirmation_number, :carriers
  has_many :carriers

end
