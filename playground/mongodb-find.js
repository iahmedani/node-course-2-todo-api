const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').find({
  //   _id: new ObjectID('5a3d41d96905e80bac235aba')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=> {
  //   console.log('unable to fetch todos', err);
    
  // })
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  // }, (err)=> {
  //   console.log('unable to fetch todos', err);
    
  // })
  db.collection('Users').find({name: 'Imran Ahmedani'}).toArray().then((docs)=>{
    console.log(`Here are users:\n ${JSON.stringify(docs, undefined,2)}`);
  }, (err)=> {
    console.log('unable to fetch todos', err);
    
  })

  //db.close();
});