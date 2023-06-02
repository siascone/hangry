# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ActiveRecord::Base.transaction do 

    User.destroy_all

    ActiveRecord::Base.connection.reset_pk_sequence!('users')

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
end 