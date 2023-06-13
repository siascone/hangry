class Business < ApplicationRecord

    validates :name, 
        :description, 
        :hours, 
        :latitude, 
        :longitude, 
        :address, 
        presence: true

    
    has_one_attached :photo
end
