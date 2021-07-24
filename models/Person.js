const mongoose = require('mongoose');
const {Schema} = mongoose;
var ObjectId = require('mongodb').ObjectID;

const personSchema = new Schema({
  firstName:{ type: String },
  lastName: { type: String }
});

personSchema.statics.random = async function() {
  const count = await this.count();
  const rand = Math.floor(Math.random() * count);
  const randomDoc = await this.findOne().skip(rand);
  return randomDoc.firstName;
};

const Person = mongoose.model('Person', personSchema);
module.exports = Person;