/*
$expr allow the use of aggregation expressions within the query language

{$expr: { <expression> }}

$expr allows us to use variables and conditional statements

*/

// q.1 Find all documents where the trip started and ended at the same station:

/*
   db.trips.find({ "$expr": { "$eq": [ "$end station id", "$start station id"] }
              }).count()
*/

// q.2 Find all documents where the trip lasted longer than 1200 seconds, and started and ended at the same station:

/*
   db.trips.find({ "$expr": { "$and": [ { "$gt": [ "$tripduration", 1200 ]},
                         { "$eq": [ "$end station id", "$start station id" ]}
                       ]}}).count()
*/

// q.3 Which of the following statements will find all the companies that have more employees than the year in which they were founded?

/*
  db.companies.find(
    { "$expr": { "$lt": [ "$founded_year", "$number_of_employees" ] } }
  ).count()

  or 

  db.companies.find(
    { "$expr": { "$gt": [ "$number_of_employees", "$founded_year" ]} }
  ).count()
*/

// q.4  How many companies in the sample_training.companies collection have the same permalink as their twitter_username?

/*
db.companies.find({"$expr": { "$eq": ["$permalink", "$twitter_username"] }}).count()
*/

