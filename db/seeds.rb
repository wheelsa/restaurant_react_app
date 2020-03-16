# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


breakfast = Menu.create(name: 'Breakfast')
Item.create(name: 'eggs',
  price: "$2.00",
  description: 'Yummy eggs served scrambled',
  menu_id: 0
  )
breakfast.items.create(name: 'bacon',
price: "$2.90",
description: 'Lots o bacon sizzled hot',)
breakfast.items.create(name: 'pancakes',
price: "$3.75",
description: 'Fluffy pancakes from heaven')

lunch = Menu.create(name: 'Lunch')
lunch.items.create(name: 'BLT',
   price: "$5.00",
   description: 'Bacon Lettuce Tomato (can add Avacado')
lunch.items.create(name: 'fries',
   price: "$2.00",
   description: 'Stiff but not too crispy',)
lunch.items.create(name: 'Soup de Jour',
    price: "$3.00",
    description: 'Potatoe soup with crackers',)


Menu.create(name: 'Dinner')


puts "seeded"