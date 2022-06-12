/*
Array Operators and Sub-Documents(dot-notation)

*/

/*
 // Example 

 db.trips.findOne({ "start station location.type": "Point" })

 db.companies.find({ "relationships.0.person.last_name": "Zuckerberg" },
                  { "name": 1 })

  db.companies.find({ "relationships.0.person.first_name": "Mark",
                    "relationships.0.title": { "$regex": "CEO" } },
                  { "name": 1 }).count()                

   db.companies.find({ "relationships.0.person.first_name": "Mark",
                    "relationships.0.title": {"$regex": "CEO" } },
                  { "name": 1 })

   db.companies.find({ "relationships":
                      { "$elemMatch": { "is_past": true,
                                        "person.first_name": "Mark" } } },
                  { "name": 1 })    
        
   db.companies.find({ "relationships":
                      { "$elemMatch": { "is_past": true,
                                        "person.first_name": "Mark" } } },
                  { "name": 1 }).count()               
*/

/*  Q.1
How many trips in the sample_training.trips collection started at stations that are to the west of the -74 longitude coordinate?

Longitude decreases in value as you move west.

Note: We always list the longitude first and then latitude in the coordinate pairs; i.e.

<field_name>: [ <longitude>, <latitude> ]
*/

/*
  db.trips.find({"start station location.coordinate.0":{$lt:-74}}).count()
*/

// Q.2 How many inspections from the sample_training.inspections collection were conducted in the city of NEW YORK?

/*
db.inspections.find({"address.city":"NEW YORK"}).count()
*/

// Q.3 Which of the following queries will return the names and addresses of all listings from the sample_airbnb.listingsAndReviews collection where the first amenity in the list is "Internet"?

/*
db.listingsAndReviews.find({ "amenities.0": "Internet" },
                           { "name": 1, "address": 1 })
*/

