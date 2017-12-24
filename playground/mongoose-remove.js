const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
  
// }, (e) => {
//  console.log(e);
 
// });

Todo.findOneAndRemove({_id: '5a3f8f7c4e1f51e167d3f726'}).then((todo)=> {
  console.log(todo);
});



Todo.findByIdAndRemove('5a3f8f524e1f51e167d3f711').then((todo) => {
  console.log(todo);
  
})