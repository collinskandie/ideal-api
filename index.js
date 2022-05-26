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
  // let querys =
  //   "INSERT INTO `users`(`name`, `email`, `user_id`, `password`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]')";
  const ADD_QUERY =
    "INSERT INTO `users`(`name`, `email`, `user_id`, `password`) VALUES (" + `'${req.body.userdata.name}',` + `'${req.body.userdata.email}',` +`'${req.body.userdata.id}',`+`'${req.body.userdata.password}'` + ")"; 

  conn.query(ADD_QUERY, (err) => { 
    console.log(err);
  });
}) 

app.get('/delete', (req, res) => {
  res.send("You can delete")
})

app.listen(4000, () =>{
  console.log("runing on port 4000")
})