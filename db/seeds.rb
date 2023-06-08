# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ActiveRecord::Base.transaction do 

    User.destroy_all
    Business.destroy_all

    ActiveRecord::Base.connection.reset_pk_sequence!('users')
    ActiveRecord::Base.connection.reset_pk_sequence!('businesses')

    puts "Creating users..."

    mike = User.create!(username: 'madz', email: 'mike@hangry.io', password: 'password')
    paulo = User.create!(username: 'papi', email: 'paulo@hangry.io', password: 'password')
    chris = User.create!(username: 'kriz', email: 'chris@hangry.io', password: 'password')
    abbey = User.create!(username: 'abz', email: 'abby@hangry.io', password: 'password')
    darren = User.create!(username: 'darude', email: 'darren@hangry.io', password: 'password')
    diego = User.create!(username: 'didi', email: 'diego@hangry.io', password: 'password')
    taylor = User.create!(username: 'taytay', email: 'taylor@hangry.io', password: 'password')
    disnee = User.create!(username: "diz", email: 'disnee@hangry.io', password: 'password')
    demo = User.create(username: "Demo-lition", email: 'john.spartain@sapd.io', password: 'threeseashells')

    puts "Creating businesses..."

    20.times do 
        name = Faker::Restaurant.name
        description = Faker::Restaurant.description
        hours = { 
            Sun: '7:00am - 9:00pm',
            Mon: '7:00am - 9:00pm',
            Tue: '7:00am - 9:00pm',
            Wed: '7:00am - 9:00pm',
            Thr: '7:00am - 9:00pm',
            Fri: '7:00am - 9:00pm',
            Sat: '7:00am - 9:00pm'
        }
        latitude = Faker::Address.latitude.to_i
        longitude = Faker::Address.longitude.to_i
        address = Faker::Address.full_address
        business_type = Faker::Restaurant.type
        
        Business.create(
            name: name, 
            description: description,
            hours: hours,
            latitude: latitude,
            longitude: longitude,
            address: address,
            business_type: business_type
        )
    end

    puts "Seeding complete"
end 