/*
operator	meaning
$gt	greater than
$lt	less than
$gte	Greater than or equal to
$lte	Less than or equal to
$eq	Matches a value equal to the specified value
$ne	Matches all values that are not equal to the specified value.
*/
// Syntax format: {"< field >": {"< operator >": < value >}}

  //  q.1 How many documents in the sample_training.zips collection have fewer than 1000 people listed in the pop field?

/*  ans:
    query :  db.zips.find({"pop": {$lt:1000}}).count()
*/

// q.2 What is the difference between the number of people born in 1998 and the number of people born after 1998 in the sample_training.trips collection?

/*  ans:
      query :  db.collection_name.find({"birth Year": {$gt:1998 ,$lt:1998}})
  */

      // q.3 Using the sample_training.routes collection find out which of the following statements will return all routes that have at least one stop in them?

/*  ans:
query :  db.routes.find({"stop":{$gt:0}})
*/

// q.4 Find all documents whose triptime is less than or equal to 30 seconds and whose type is not Subscriber:

/*  ans:
query :  db.trip.find({"triptime":{$lte:30},{type:{$ne:Subscriber}} })
*/

