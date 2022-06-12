
/*
operator	meaning

$and	All documents matching A and B
$or	All documents matching A or B
$nor	Returns all documents with filtered query criteria
$not	Returns all documents that do not match the query

*/

// db.collection_name.find({ "$or": [ { "$or" :[ {  },{ }] }]})

// q.1 How many businesses in the sample_training.inspections dataset have the inspection result "Out of Business" and belong to the "Home Improvement Contractor - 100" sector?

/*  ans 
  query: db.inspections.find({$and:[{"result":"Out of Business"},{"sector":"Home Improvement Contractor - 100"}]}).count()
*/

/*  q.2
Which is the most succinct query to return all documents from the sample_training.inspections collection where
 the inspection date is either "Feb 20 2015", or "Feb 21 2015" and
  the company is not part of the "Cigarette Retail Dealer - 127" sector?
 */

  /*  ans 
  query:db.inspections.find(
                         {"$or":[{"Feb 20 2015"},
                                {"Feb 21 2015"}],
                        "sector":{$ne:"Cigarette Retail Dealer - 127"}})

  */

  /* q.3
  How many companies in the sample_training.companies dataset were

either founded in 2004

[and] either have the social category_code [or] web category_code,
[or] were founded in the month of October

[and] also either have the social category_code [or] web category_code?

*/ 

/*  ans 
  query:db.companies.find({$and:[{$or:[{"founded_year":2004},{"founded_month": 10}]}, {$or:{"category_code": "social"},{"category_code": "web"}}]}).count()

  */

  