/* Compile model from schema
The first argument is the singular name of the COLLECTION that will be CREATED for your model 
and the second argument is the SCHEMA you want to use in creating the model.

The model represents a collection of documents in the database that you can search
*/

var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
  _id: String,                                      
  user: {
    title: String,  
    firstName: String,
    surname: String,
    username: String,
    password: String,
    usernameAlias: String
  },
  userAddr: {
    addr_line1: String,
    addr_line2: String,
    addr_line3: String,
    addr_line4: String,
    postalCd: Number,
    addrType: String,
    province: String  
  },
  company:{
    compName: String,
    regNo: String
   },
  work_no: String,
  cellNo: String,
  emailAddr: String,    
  prefCorr: String,
  stallDetails: {
    stallName: String,
    categoryName: String,
    industryName: String,
    Venue: String,
    dimensions: String,
    fullDescr: String,
    availStatus: String,
    effFrom: Date,
    effTo: Date
  },
  bookingDetails: {
    payExtRef: String,  
    stallVenue: String,
    paymentStatus: String,
    clientName: String,
    TC_Accepted: String
  }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, capped: { size: 1500000, max: 1000, autoIndexId: true }});

var bookings = mongoose.model('bookings', bookingSchema);
module.exports = bookings;