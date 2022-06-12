/*
 Array Operations

$push-
Convert field to array field
Adding elements to an array

$size- 
Returns all documents whose specified array field is exactly the given length

$all -

Returns all documents that contain at least these specified elements in the specified collection
*/

// q.1  Find all documents that contain exactly 20 amenities, including all amenities listed in the query array:

/*

db.listingsAndReviews.find({ "amenities": {
                                  "$size": 20, // Document with 20 elements
                                  "$all": [ "Internet", "Wifi",  "Kitchen",
                                           "Heating", "Family/kid friendly",
                                           "Washer", "Dryer", "Essentials",
                                           "Shampoo", "Hangers",
                                           "Hair dryer", "Iron",
                                           "Laptop friendly workspace" ]
                                         }
                            })

*/

// q.2  What is the name of the listing in the sample_airbnb.listingsAndReviews dataset that accommodates more than 6 people and has exactly 50 reviews?

/*

db.listingsAndReviews.find({ "reviews": { "$size":50 },"accommodates":{"$gt":6 }})
*/

// Q.3 Using the sample_airbnb.listingsAndReviews collection find out how many documents have the "property_type" "House", and include "Changing table" as one of the "amenities"?

/*

db.listingsAndReviews.find({"property_type":"House","amenities":{"$all":["Changing table"]}})
*/

// Q.4  Which of the following queries will return all listings that have "Free parking on premises", "Air conditioning", and "Wifi" as part of their amenities, and have at least 2 bedrooms in the sample_airbnb.listingsAndReviews collection?

/*
db.listingsAndReviews.find({"$all":["Air conditioning","Free parking on premises","Wifi"]},"bedrooms":{"&lte":2}})
*/

//  Array Projection

// Q.6 Find all documents with exactly 20 amenities which include all the amenities listed in the query array, and display their price and address:

  /*
  db.listingsAndReviews.find({ "amenities":
        { "$size": 20, "$all": [ "Internet", "Wifi",  "Kitchen", "Heating",
                                 "Family/kid friendly", "Washer", "Dryer",
                                 "Essentials", "Shampoo", "Hangers",
                                 "Hair dryer", "Iron",
                                 "Laptop friendly workspace" ] } },
                            {"price": 1, "address": 1})

  */

// Q.7  Find all documents that have Wifi as one of the amenities only include price and address in the resulting

/*
db.listingsAndReviews.find({ "amenities": "Wifi" },
                           { "price": 1, "address": 1, "_id": 0 })
*/

// Q.8 Find all documents that have Wifi as one of the amenities only include price and address in the resulting cursor, also exclude ``"maximum_nights"``. 

/*
db.listingsAndReviews.find({ "amenities": "Wifi" },
                           { "price": 1, "address": 1,
                             "_id": 0, "maximum_nights":0 })
*/

// element Match

/*
$elemMatch

Function: $elemMatch can be used to accurately find when there is too much data in embedded /
 containing array documents, so as to avoid inaccurate data. 
 This operator qualifies a set of conditions to match a single document in the array
*/

// Q.1  find all files where students in class 431 get more than 85 points in any type of homework: scores is an array

/*
  db.grades.find({"class_id":431},{"scores":{"$elemMatch":{"score":{"$gt":85}}}})
*/

// Q.2 Find all documents where the student had an extra credit score:

/*
  db.grades.find({"scores":{"$elemMatch":{"type":"credit score:"}}})
*/

// Q.3 How many companies in the sample_training.companies collection have offices in the city of Seattle?

/*
db.companies.find({"offices": { "$elemMatch" : { "city": "Seattle" }}}).count()
*/

// Q.4 Which of the following queries will return only the names of companies from the sample_training.companies collection that had exactly 8 funding rounds?

/*
db.companies.find({ "funding_rounds": { "$size": 8 } },
                  { "name": 1, "_id": 0 })
*/



