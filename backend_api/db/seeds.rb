# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.create(
  name: "Azalee Keebler",
  pallets: 10,
  scheduled_day: "2020-05-07",
  confirmation_number: 1
)

Business.create(
  name: "Glenda Hopkins",
  pallets: 11,
  scheduled_day: "2020-05-07",
  confirmation_number: 2
)

Business.create(
  name: "Anabelle Friskers",
  pallets: 12,
  scheduled_day: "2020-05-07",
  confirmation_number: 3
)

Business.create(
  name: "Heidi Baggabon",
  pallets: 13,
  scheduled_day: "2020-05-08",
  confirmation_number: 4
)

Business.create(
  name: "Sandra Dee",
  pallets: 14,
  scheduled_day: "2020-05-08",
  confirmation_number: 5
)
Carrier.create(
 name:"Elliott Daniel",
 email: "brandee@hermankoepp.biz",
 confirmation_number: 10 ,
 business_id: 1
)
Carrier.create(
 name:"John Franks",
 email: "johnf@hermankoepp.biz",
 confirmation_number: 11 ,
 business_id: 2
)
Carrier.create(
 name:"Brendan Kelly",
 email: "bk@hermankoepp.biz",
 confirmation_number: 12 ,
 business_id: 3
)
Carrier.create(
 name:"Mike Black",
 email: "mikeb@hermankoepp.biz",
 confirmation_number: 13 ,
 business_id: 4
)
Carrier.create(
 name:"Fred Marks",
 email: "fmarks@hermankoepp.biz",
 confirmation_number: 14 ,
 business_id: 5
)



 