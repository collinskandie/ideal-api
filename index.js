// import express
const express = require('express')

// import  cors
const cors = require('cors');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
 
// create Connection app 
const app = express();


// create new routes
app.get('/task', (req, res) =>{
  res.send("Hello World")
})

app.get('/addnew', (req, res) => {
  res.send("You can add")
})

app.get('/delete', (req, res) => {
  res.send("You can delete")
})

app.listen(4000, () =>{
  console.log("runing on port 4000")
})