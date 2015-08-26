# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

### section
sections = Section.create([
  { title: "incomeSect1",  is_income: false },
  { title: "expenseSect1", is_income: true },
])

### subsection
subsections = Subsection.create([
  { title: "incomeSect1Sub1",  section: sections[0].id },
  { title: "incomeSect1Sub2",  section: sections[0].id },
  { title: "expenseSect1Sub1", section: sections[1].id },
  { title: "expenseSect1Sub2", section: sections[1].id }
])

sections[0].update( subsections: [ subsections[0].id, subsections[1].id ].to_s )
sections[1].update( subsections: [ subsections[2].id, subsections[3].id ].to_s )

### record
Record.create([
  {
    section: sections[0].id,
    subsection: subsections[0].id,
    is_income: sections[0].is_income,
    amount: 300,
    date: 20150527,
    detail: 'test1'
  },
  {
    section: sections[0].id,
    subsection: subsections[1].id,
    is_income: sections[0].is_income,
    amount: 3000,
    date: 20150527,
    detail: 'test2'
  },
  {
    section: sections[1].id,
    subsection: subsections[2].id,
    is_income: sections[1].is_income,
    amount: 30,
    date: 20150528,
    detail: 'test3'
  },
  {
    section: sections[1].id,
    subsection: subsections[3].id,
    is_income: sections[1].is_income,
    amount: 3,
    date: 20150529,
    detail: 'test4'
  },
])

### user
User.create([
  {
    name: 'test_user1'
  },
  {
    name: 'test_user2'
  }
])