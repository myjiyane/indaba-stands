/* Compile model from schema
The first argument is the singular name of the COLLECTION that will be CREATED for your model 
and the second argument is the SCHEMA you want to use in creating the model.

The model represents a collection of documents in the database that you can search
*/

var mongoose = require('mongoose');

var companySchema = mongoose.Schema({
  _id: String,                                      
  compName: String,
  regNo: String,
  contactPerson: String,
  contact_tel_num: String,
  contact_tel_cell: String,
  contact_email_addr: String,
  address: {
    addr_line1: String,
    addr_line2: String,
    addr_line3: String,
    addr_line4: String,
    postalCd: Number,
    addrType: String
  }}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, capped: { size: 1500000, max: 1000, autoIndexId: true }});

var companies = mongoose.model('companies', companySchema);
module.exports = companies;