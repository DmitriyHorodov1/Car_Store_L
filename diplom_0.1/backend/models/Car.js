const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let carSchema = new Schema({
  BrandName: {
    type: String
  },
  ModelName: {
    type: String
  },
  type_car: {
    type: String
  }
}, {
    collection: 'Carlist'
  })
  
module.exports = mongoose.model('Car', carSchema)