// external dependencies
var express = require('express');
var {ObjectID} = require('mongodb');
var bodyParser = require('body-parser');
//internal modules
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {mongoose} = require('./db/mongoose');

// port
var port = process.env.PORT || 3000;
// App
var app = express();
// App Middleware body-parser
app.use(bodyParser.json());
//Post /todos
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc)
  }, (e) => {
    res.status(400).send(e);
  });
});
//Get /todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos)=> {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});
//Get Specific todos by ID
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // check wether ID is valid
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  //Request by ID
  Todo.findById(id).then((todo) => {
    
    //Check todo exists 
    if(!todo){
      return res.status(404).send();
    }
    
    //printing todo in body
    res.send({todo});
  })
  // Send status 404 in any error
  .catch((e )=> {
    res.status(404).send();
  });
});

//App startup
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
//Exporting app
module.exports = {app};