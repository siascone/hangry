class Business < ApplicationRecord

    validates :name, 
        :description, 
        :hours, 
        :latitude, 
        :longitude, 
        :address, 
        presence: true

    

end
