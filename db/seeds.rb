# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"


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

amante_coffee = Business.create(
    name: "Amante Coffee", 
    description: "Amante is a Boulder based coffee company that is committed to bringing a wonderful piece of the “Old World” to the front range of Colorado. Amante's beans are custom-roasted in Bra, Italy by the Ghigo family in a classic Northern Italian tradition. The recipes used by their roaster have been in his family for over half a century.",
    hours: { 
        sun: '1:00pm - 11:00pm',
        mon: '3:00pm - 11:00pm',
        tue: '3:00pm - 11:00pm',
        wed: '3:00pm - 11:00pm',
        thr: '3:00pm - 11:00pm',
        fri: '3:00pm - 11:00pm',
        sat: '1:00pm - 11:00pm'
    },
    latitude: 40.01686,
    longitude: -105.28175,
    address: "1023 Walnut St. Boulder, CO 80302",
    phone: "3035469999",
    business_type: "cafe"
)

the_attic = Business.create(
    name: "The Attic Bar & Bistro", 
    description: "The Attic Bar and Bistro has been establishing itself as one of the premier authentic neighborhood watering holes in beautiful Boulder, CO. The Attic is a favorite of service industry employees, locals and tourists alike.

    In addition to their fantastic drink specials (we are the self proclaimed “Home of the Fat Albert”), our made-from-scratch food will transform any first-time customer into a regular instantaneously. So come early or come late, as their full menu of “gourmet pub fare” is available until 11pm nightly.",
    hours: { 
        sun: '1:00pm - 11:00pm',
        mon: '3:00pm - 11:00pm',
        tue: '3:00pm - 11:00pm',
        wed: '3:00pm - 11:00pm',
        thr: '3:00pm - 11:00pm',
        fri: '3:00pm - 11:00pm',
        sat: '1:00pm - 11:00pm'
    },
    latitude: 40.01655,
    longitude: -105.28241,
    address: "949 Walnut St. Boulder, CO 80302",
    phone: "3034151300",
    business_type: "Bistro"
)

laughing_goat = Business.create(
    name: "Laughing Goat Coffeehouse", 
    description: "The Laughing Goat is a warm, cheerful place, where we'll make you the best espresso you've ever had. Featuring the award-winning coffees of the Kaladi Brothers Coffee from Denver. Unique, artistic decor marrying old world coffeehouse feel with contemporary design providing a warm, elegant, inviting atmosphere. Weekly poetry readings, monthly art shows, and weekend music.",
    hours: { 
        sun: '7:00am - 8:00pm',
        mon: '6:30am - 8:00pm',
        tue: '6:30am - 8:00pm',
        wed: '6:30am - 8:00pm',
        thr: '6:30am - 8:00pm',
        fri: '6:30am - 8:00pm',
        sat: '7:00am - 8:00pm'
    },
    latitude: 40.01950,
    longitude: -105.27310,
    address: "1709 Pearl St. Boulder, CO 80302",
    phone: "none",
    business_type: "cafe"
)

dragonfly_noodle = Business.create(
    name: "Dragonfly Noodle", 
    description: "Dragonfly Noodle focuses on creating dishes that are deeply rooted in their Pacific Rim origins with modern and creative twists. Sister restaurant to the legendary Zoe MaMa.",
    hours: { 
        sun: '11:30am - 9:00pm',
        mon: '11:30am - 9:00pm',
        tue: '11:30am - 9:00pm',
        wed: '11:30am - 9:00pm',
        thr: '11:30am - 9:30pm',
        fri: '11:30am - 9:30pm',
        sat: '11:30am - 9:00pm'
    },
    latitude: 40.01774,
    longitude: -105.28241,
    address: "2014 10th St. Boulder, CO 80302",
    phone: "7205801100",
    business_type: "pacific rim"
)

gelato_boy = Business.create(
    name: "Gelato Boy", 
    description: "That's really it. There are no secrets. We make our gelato from scratch and we use the best ingredients – organic and in-season whenever possible – to make sure that our gelato is the best it can possibly be. Gelato will never taste better than when it has just been spun so we make it fresh every day. Can an excellent gelato change your life? We'd like to think so. It will at least change your day.",
    hours: { 
        sun: '11:00am - 10:00pm',
        mon: '11:00am - 10:00pm',
        tue: '11:00am - 10:00pm',
        wed: '11:00am - 10:00pm',
        thr: '11:00am - 10:00pm',
        fri: '11:00am - 11:00pm',
        sat: '11:00am - 11:00pm'
    },
    latitude: 40.01879,
    longitude: -105.27648,
    address: "1433 Pearl St. Boulder, CO 80302",
    phone: "7202694117",
    business_type: "ice cream"
)

sundown_saloon = Business.create(
    name: "Sundown Saloon", 
    description: "For over 30 years Boulder's premier dive bar. PBR, Whiskey, Craft Beer, Pool, Darts, Shuffleboard, Foosball, interesting people, and our interesting smell.",
    hours: { 
        sun: '3:00pm - 2:00am',
        mon: '3:00pm - 2:00am',
        tue: '3:00pm - 2:00am',
        wed: '3:00pm - 2:00am',
        thr: '3:00pm - 2:00am',
        fri: '3:00pm - 2:00am',
        sat: '3:00pm - 2:00am'
    },
    latitude: 40.01739,
    longitude: -105.28008,
    address: "1136 Pearl St. Boulder, CO 80302",
    phone: "3034494987",
    business_type: "bar"
)

piece_love_chocolate = Business.create(
    name: "Piece, Love & Chocolate", 
    description: "Piece, Love & Chocolate’s mission is to enchant and entertain you, our cherished guests, by creating and sourcing world-class chocolate products that enable you to explore and enjoy chocolate. By providing professional knowledge, excellent service, and an eclectic array of exceptional-quality chocolate gifts and novelties — which will be as much of a joy to give as they are to receive — our company will be your most informative source on chocolate and cocoa-related products.

    We are located at the West End of historical downtown Boulder, Colorado’s most famous thoroughfare, 805 Pearl Street, one block west of 9th Street. Pause for a moment when you pass through our door and take in the sights, sounds and smells of our sumptuous chocolate boutique. Come celebrate and share with us our adoration of chocolate with cocoa products from bean to bar to love itself!",
    hours: { 
        sun: '9:00am - 9:00pm',
        mon: '9:00am - 6:00pm',
        tue: '9:00am - 6:00pm',
        wed: '9:00am - 9:00pm',
        thr: '9:00am - 9:00pm',
        fri: '9:00am - 9:00pm',
        sat: '9:00am - 9:00pm'
    },
    latitude: 40.01712,
    longitude: -105.28481,
    address: "805 Pearl St. Boulder, CO 80302",
    phone: "3034994804",
    business_type: "sweets"
)

mtn_sun_pub = Business.create(
    name: "Mountain Sun Pub & Brewery", 
    description: "At Mountain Sun our mission is to offer five-star service, fresh, high quality pub fare and finely crafted brews for affordable prices in an environment that’s comfortable like your living room. There will never be televisions at our pubs because we want our guests to meet and discuss the world in which we live or simply to play Scrabble. ",
    hours: { 
        sun: '11:00am - 10:00pm',
        mon: '12:00pm - 10:00pm',
        tue: '12:00pm - 10:00pm',
        wed: '12:00pm - 10:00pm',
        thr: '12:00pm - 10:00pm',
        fri: '11:00am - 10:00pm',
        sat: '11:00am - 10:00pm'
    },
    latitude: 40.01901,
    longitude: -105.27521,
    address: "1535 Walnut St. Boulder, CO 80302",
    phone: "3035460886",
    business_type: "brewery"
)

lolitas = Business.create(
    name: "Lolita's Market & Deli", 
    description: "Located in one of Boulder's most historic buildings, Lolita’s is downtown’s only full-service Market & Deli. This Pearl Street gem offers a large selection of everyday necessities and groceries as well as enough drinks and snacks to power your front range adventures. Open 6 am - 1 am daily.",
    hours: { 
        sun: '6:00am - 1:00am',
        mon: '6:00am - 1:00am',
        tue: '6:00am - 1:00am',
        wed: '6:00am - 1:00am',
        thr: '6:00am - 1:00am',
        fri: '6:00am - 1:00am',
        sat: '6:00am - 1:00am'
    },
    latitude: 40.01665,
    longitude: -105.28492,
    address: "800 Pearl St. Boulder, CO 80302",
    phone: "3034438329",
    business_type: "deli"
)

the_kitchen = Business.create(
    name: "The Kitchen", 
    description: "Founded in 2004 by Hugo Matheson & Kimbal Musk, The Kitchen Restaurant Group is based in Boulder, Colorado. Their food is bold & dramatic, punctuated with surprising details. Their drinks are delicious first, but never lacking in style. Their space is an enveloping escape from the everyday.

    Head Upstairs to their cocktail lounge to enjoy the same imaginative array of globally-inspired shared plates and killer drinks in a stylish, casual space.",
    hours: { 
        sun: '10:00am - 10:00pm',
        mon: '11:00am - 10:00pm',
        tue: '11:00am - 10:00pm',
        wed: '11:00am - 10:00pm',
        thr: '11:00am - 10:00pm',
        fri: '11:00am - 11:00pm',
        sat: '10:00am - 11:00pm'
    },
    latitude: 40.01781,
    longitude: -105.28176,
    address: "1039 Pearl St. Boulder, CO 80302",
    phone: "3035445973",
    business_type: "bistro"
)

puts "Attaching business images"

amante_coffee.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/amante-coffee.webp"), filename: "amante-coffee.webp")
the_attic.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/the-attic.webp"), filename: "the-attic.webp")
laughing_goat.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/laughing-goat.webp"), filename: "laughing-goat.webp")
dragonfly_noodle.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/dragonfly-noodle.webp"), filename: "dragonfly-noodle.webp")
gelato_boy.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/gelato-boy.webp"), filename: "gelato-boy.webp")
sundown_saloon.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/sundown-salon.webp"), filename: "sundown-salon.webp")
piece_love_chocolate.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/piece-love-chocolate.webp"), filename: "piece-love-chocolate.webp")
mtn_sun_pub.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/mtn-sun-pub.webp"), filename: "mtn-sun-pub.webp")
lolitas.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/lolitas.webp"), filename: "lolitas.webp")
the_kitchen.photo.attach(io: URI.open("https://hangry-seeds.s3.us-west-1.amazonaws.com/the-kitchen.webp"), filename: "the-kitchen.webp")

puts "Seeding complete"