/*
  insert in mongodb 

  1. insert()
  2. insertOne()
  3. insertMany()
*/  

//({"userId":1, "name":"saurabh","age":26,"city":"delhi"},{"userId":2, "name":"rahul","age":25,"city":"patna"},{"userId":3, "name":"mudit","age":24,"city":"kanpur"},{"userId":4, "name":"vikash","age":28,"city":"ramchi"},{"userId":5, "name":"chitranjan","age":2,"city":"delhi"})

/*
  Reading  data in mongodb 

  1. find()      here user only array 
  2. findOne()  here use only object 
*/  

db.getCollection('student').find({userId:1}) 
db.getCollection('student').findOne({userId:1})
db.getCollection('student').find({city:"ranchi"})

// sorting in mongodb

db.getCollection('student').find({}).sort({_id:-1}) // letest doc get

// limit in mongodb 

db.getCollection('student').find({}).limit(2)

// skip in mongodb 
db.getCollection('student').find({}).skip(1)

db.getCollection('student').find({city:"delhi"}).skip(1).limit(2)

// projection in mongodb 
db.getCollection('student').find({},{name:1, city:1})

db.getCollection('student').find({},{name:1, city:1,_id:0})

/*
     removing document in mongodb 
     1.remove() 
     2. deleteOne() 
     3. deleteMany()
*/

db.getCollection('student').remove({city:"kanpur"})

db.getCollection('student').deleteOne({city:"kanpur"})


/*
     update document in mongodb 
     1.update
     2. updateOne() 
     3. updateMany()
*/
db.getCollection('student').update({userId:1},{$set:{age:22}})
db.getCollection('student').update({userId:1},{$set:{age:22,name:"saurabhkr"}}) // if you want to update one or more
