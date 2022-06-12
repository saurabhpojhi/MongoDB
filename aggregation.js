// Aggregation in MongoDB

/*
  Aggregation pipeline:-- In MongoDB, the aggregation pipeline consists of stages and each stage transforms the document.

  Stages: Each stage starts from stage operators which are:

$match: It is used for filtering the documents can reduce the amount of documents that are given as input to the next stage.
$project: It is used to select some specific fields from a collection.
$group: It is used to group documents based on some value.
$sort: It is used to sort the document that is rearranging them
$skip: It is used to skip n number of documents and passes the remaining documents
$limit: It is used to pass first n number of documents thus limiting them.
$unwind: It is used to unwind documents that are using arrays i.e. it deconstructs an array field in the documents to return documents for each element.
$out: It is used to write resulting documents to a new collection


Accumulators: These are basically used in the group stage

sum: It sums numeric values for the documents in each group
count: It counts total numbers of documents
avg: It calculates the average of all given values from all documents
min: It gets the minimum value from all the documents
max: It gets the maximum value from all the documents
first: It gets the first document from the grouping
last: It gets the last document from the grouping
*/

// Q.1 Displaying the total number of students in one section only 

/*
db.students.aggregate([{$match:{sec:"B"}},{$count:"Total student in sec:B"}])
*/

// Q.2 Displaying the total number of students in both the sections and maximum age from both section

/*
db.students.aggregate([{$group: {_id:"$sec", total_st: {$sum:1}, max_age:{$max:"$age"} } }])
*/

// Q.3 Displaying details of students whose age is greater than 30 using match stage

/*
db.students.aggregate([{$match:{age:{$gt:30}}}])
*/


// Q.4 calculates the total pizza order value and average order quantity between two dates
/*
db.orders.aggregate( [

   // Stage 1: Filter pizza order documents by date range
   {
      $match:
      {
         "date": { $gte: new ISODate( "2020-01-30" ), $lt: new ISODate( "2022-01-30" ) }
      }
   },

   // Stage 2: Group remaining documents by date and calculate results
   {
      $group:
      {
         _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
         totalOrderValue: { $sum: { $multiply: [ "$price", "$quantity" ] } },
         averageOrderQuantity: { $avg: "$quantity" }
      }
   },

   // Stage 3: Sort documents by totalOrderValue in descending order
   {
      $sort: { totalOrderValue: -1 }
   }

 ] )

*/

// Q.5 Find all documents that have Wifi as one of the amenities. Only include price and address in the resulting cursor.

/*
 db.listingsAndReviews.find({ "amenities": "Wifi" },
                           { "price": 1, "address": 1, "_id": 0 })
*/

// Q.6 Using the aggregation framework find all documents that have Wifi as one of the amenities``*. Only include* ``price and address in the resulting cursor.

/*
db.listingsAndReviews.aggregate([
                                  { "$match": { "amenities": "Wifi" } },
                                  { "$project": { "price": 1,
                                                  "address": 1,
                                                  "_id": 0 }}])
*/

// Q.7 Find one document in the collection and only include the address field in the resulting cursor.

/*
db.listingsAndReviews.findOne({ },{ "address": 1, "_id": 0 })
*/

// Q.8 Project only the address field value for each document, then group all documents into one document per address.country value.

/*
db.listingsAndReviews.aggregate([ { "$project": { "address": 1, "_id": 0 }},
                                  { "$group": { "_id": "$address.country" }}])
*/

// Q.9 Project only the address field value for each document, then group all documents into one document per address.country value, and count one for each document in each group.

/*
db.listingsAndReviews.aggregate([
                                  { "$project": { "address": 1, "_id": 0 }},
                                  { "$group": { "_id": "$address.country",
                                                "count": { "$sum": 1 } } }
                                ])
*/

 // Sort and Limit
/*
  example:  

  db.zips.find().sort({ "pop": 1 }).limit(1)

db.zips.find({ "pop": 0 }).count()

db.zips.find().sort({ "pop": -1 }).limit(1)

db.zips.find().sort({ "pop": -1 }).limit(10)

db.zips.find().sort({ "pop": 1, "city": -1 })
*/

// Q. 9 Which of the following commands will return the name and founding year for the 5 oldest companies in the sample_training.companies collection?

/*
  db.companies.find({ "founded_year": { "$ne": null }},
                  { "name": 1, "founded_year": 1 }
                 ).limit(5).sort({ "founded_year": 1 })

                 or
   db.companies.find({ "founded_year": { "$ne": null }},
                  { "name": 1, "founded_year": 1 }
                 ).sort({ "founded_year": 1 }).limit(5)              
*/

// Q.10 In what year was the youngest bike rider from the sample_training.trips collection born?

/*
db.trips.find({"birth year": {"$ne":""}}, {"birth year": 1}).sort({"birth year": 1}).limit(1)  // 1999
*/

// Indexs 

/*
// Single field index is ok
db.trips.find({ "birth year": 1989 })

// need compound index
db.trips.find({ "start station id": 476 }).sort( { "birth year": 1 } )

// Single field index. 
db.trips.createIndex({ "birth year": 1 })

// not perfect for
db.trips.find({ "start station id": 476 }).sort( { "birth year": 1 } )
// then we create a compound index
db.trips.createIndex({ "start station id": 1, "birth year": 1 })

*/

// Upsert - Update or inser?

/*
db.collection.updateOne({<query to locate>}, {<update>})

db.collection.updateOne({<query>}, {<update>}, {"upsert": true})

by default upsert is false. if upsert is true:

is there a match?(yes), update the matched document
is there a match?(no), insert a new document

*/

/* example 
db.iot.updateOne({ "sensor": r.sensor, "date": r.date,
                   "valcount": { "$lt": 48 } },
                         { "$push": { "readings": { "v": r.value, "t": r.time } },
                        "$inc": { "valcount": 1, "total": r.value } },
                 { "upsert": true })
*/


