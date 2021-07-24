const express = require('express');
const mongoose = require('mongoose') ;
const path = require('path');
const fetchUrl = require('fetch').fetchUrl;

const InitiateMongoServer = require("./controller/bd");

// Initiate Mongo Server
InitiateMongoServer();
// Initiate Express
const app = express();

// DB Model
const Person = require('./models/Person');

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
  res.render('home', {name : 'Home'})
})

app.get('/randomName', async (req, res) => {
  let randName =  await Person.random();
  genderUrl = `https://gender-api.com/get?name=`+randName+`&country=FR&key=qmTPsnFf59zgglYwqagU6py7LGGyK3kBETNg`

  fetchUrl(genderUrl, function(err, meta, body) {
    const genderApi = JSON.parse(body).gender 
    console.log(genderApi)
    if (genderApi == 'unknown') {
      res.send({name: randName, gender: "male"})
    } else {
      res.send({name: randName, gender: genderApi})
    }
  })
})

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port: 3000, YAYYY !');
  }
})