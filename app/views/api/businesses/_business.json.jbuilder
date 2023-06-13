json.extract! business,
    :id, 
    :name, 
    :description,
    :hours,
    :latitude,
    :longitude,
    :address,
    :business_type
json.photo_url url_for(business.photo)