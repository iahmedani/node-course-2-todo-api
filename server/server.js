// includes config file to auto-set enviroment accordingly
require('./config/config');
// external dependencies
const _ = require('lodash');
const express = require('express');
const {ObjectID} = require('mongodb');
const bodyParser = require('body-parser');
//internal modules
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {mongoose} = require('./db/mongoose');

// port
var port = process.env.PORT;
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
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }

    res.status(200).send({todo});
  }).catch((e) => {
     return res.status(400).send();
  });

});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text','completed']);
  
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt= null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

//App startup
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
//Exporting app
module.exports = {app};