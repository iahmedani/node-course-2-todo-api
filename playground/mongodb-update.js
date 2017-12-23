const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').findOneAndUpdate({text:'Lunch'},{$set:{
  //   completed:true
  // }},{
  //   returnOriginal:false
  // }).then((res)=> {
  //   console.log(res);
    
  // })

  db.collection('Users').findOneAndUpdate({name:'Kamran Ahmedani'}, {
    $set: {
      name:'Imran Ahmedani'
    },
    $inc: {
      age: 4
    }
  },{returnOriginal:false}).then((res)=>{
    console.log(res);
    
  });
  //db.close();
});