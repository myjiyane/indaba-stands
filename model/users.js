/* Compile model from schema
The first argument is the singular name of the COLLECTION that will be CREATED for your model 
and the second argument is the SCHEMA you want to use in creating the model.

The model represents a collection of documents in the database that you can search
*/

var mongoose = require('mongoose');

var usersSchema = mongoose.Schema([{
  _id: String,
  title: String,    
  firstName: String,
  surname: String,
  birth_date: Date,
  username: String,
  password: String,
  usernameAlias: String,
  compName: String,
  address: {
    addr_line1: String,
    addr_line2: String,
    addr_line3: String,
    addr_line4: String,
    postalCd: Number,
    addrType: String
  },
  work_no: String,
  cellNo: String,
  emailAddr: String,    
  prefCorr: String    
}], { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, capped: { size: 2000000, max: 500, autoIndexId: true }});

var users = mongoose.model('users', usersSchema);
module.exports = users;