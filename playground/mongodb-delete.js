const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  
  //delete many
  // db.collection('Todos').deleteMany({text:'Lunch'}).then((result) => {
  //   console.log(result);
  // });
  // delete one
  // db.collection('Todos').deleteOne({text:'Lunch'}).then((result)=> {
  //   console.log(result);
    
  // })

  //findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=> {
  //   console.log(result);
    
  // })

  // db.collection('Users').deleteMany({name:'Imran Ahmedani'}).then((res) => {
  //   console.log(res);    
  // });
  db.collection('Users').findOneAndDelete({_id:ObjectID("5a3d44297051842b4882b51b")}).then((res) => {
    console.log(res);
    
  })
  //db.close();
});