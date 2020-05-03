class BusinessSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :pallets, :scheduled_day, :confirmation_number
  has_many :carriers, dependent: :destroy

end
