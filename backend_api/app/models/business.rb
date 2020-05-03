class Business < ApplicationRecord
    has_many :carriers, :dependent => :delete_all
end
