// import express
const express = require('express')
const conn = require("./db");
const cors = require('cors');

// import bodyparser

const bodyparser = require('body-parser')

// create Connection app 
const app = express();

app.use(cors())
app.use(bodyparser.json())
// create new routes
app.get('/task', (req, res) =>{
  res.send("Hello World")
})



app.post('/addtask', (req, res) => {
  console.log(req.body)
  const ADD_QUERY =
    "INSERT INTO `users`(`name`, `email`, `user_id`, `password`) VALUES (" + `'${req.body.userdata.name}',` + `'${req.body.userdata.email}',` +`'${req.body.userdata.id}',`+`'${req.body.userdata.password}'` + ")"; 

  conn.query(ADD_QUERY, (err) => { 
    console.log(err);
  });
}) 
 
app.get('/users', (req, res) => {
  const myQuery = "SELECT * FROM `users`";
  conn.query(myQuery, (err, response) => {
    // console.log(err);
    res.send(response)
  });
})

app.get('/email', (req, res) =>{
  const myQuery = "SELECT email FROM `users`";
  conn.query(myQuery, (err, response) => {
    // console.log(err);
    res.send(response);
  });
})

app.listen(4000, () =>{
  console.log("runing on port 4000")
})