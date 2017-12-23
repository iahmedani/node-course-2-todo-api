const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert Todo');
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
    
  // });
  // db.collection('Users').insertOne({
  //   name:'Imran Ahmedani',
  //   age:32,
  //   location: 'Islamabad'
  // },(err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert Todo');
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
    
  // });
  db.collection('Users').insertOne({
    name:'Kamran Ahmedani',
    age:28,
    location: 'Badin'
  },(err, result) => {
    if(err){
      return console.log('Unable to inser user');
    }
    console.log(result.ops)
  })
  db.close();
});