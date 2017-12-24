const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5a3f44eb4c5200982b924f0511';
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// }).catch((e) => console.log(e));


// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
    
//   }
//   console.log('Todo by id',todo);
// });

var userID = '5a3f158455e8dc702324d0a511';

User.find({
  _id: userID
}).then((Users) => {
  console.log('from Find() ',Users);
});

User.findOne({_id:userID}).then((user) => {
  console.log('User from findOne():', user);
});

User.findById(userID).then((user)=> {
  return console.log('User form findByID', user);
}).catch((e) => {
  console.log('Invalid ID');
  
});