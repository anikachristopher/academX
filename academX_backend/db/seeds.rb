# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Child.create([{first_name: "Malik", last_name: "Morris", age: "9", grade: "4"}])

Schedule.create([
    {weekday: "Monday", date: "4/26/2021", subject: "Math", content: "Completed chapter 1 of Go Math", child_id: 1}
])
