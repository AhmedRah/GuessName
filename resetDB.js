// this file is for testing outside the app , 
// yet still conencted to our database

const fs = require('fs');

const mongoose = require('mongoose') ;
var ObjectId = require('mongodb').ObjectID;
const Person = require('./models/Person');


const InitiateMongoServer = require("./controller/bd");
// Initiate Mongo Server
InitiateMongoServer();

// resetting DB
Person.deleteMany({}).then( p => console.log(p)).catch(e => {
      console.log(e)
    })
// Repopulating DB
let data = fs.readFileSync('names.txt').toString()
var people = data.split("\n")
for (const x of people) {
  let name = x.split(" ");
  const fn = name[0];
  const ln = name[1];
  
  const person = new Person({  
    firstName: fn,  
    lastName: ln
  })
  person.save().then( p => console.log(p)).catch(e => {
    console.log(e)
  })
 
}



// console.log(people);


