# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

10.times do
  Business.create(
    name: Faker::Name.name,
    pallets: Faker::Number.number(digits: 2),
    scheduled_day: Faker::Date.forward(days: 3),
    confirmation_number: Faker::Number.number(digits: 6)
  )
end