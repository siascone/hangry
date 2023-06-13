@businesses.each do |business|
    json.set! business.id do 
        json.partial! 'business', business: business
        # json.photo_url url_for(business.photo)
    end
end