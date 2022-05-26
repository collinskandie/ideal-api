// import express
const express = require('express')

const cors = require('cors');
// const Connection = require('mysql2/typings/mysql/lib/Connection');

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

app.post('/addnew', (req, res) => {
  console.log(req.body)
})

app.get('/delete', (req, res) => {
  res.send("You can delete")
})

app.listen(4000, () =>{
  console.log("runing on port 4000")
})