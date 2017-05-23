

/* Compile model from schema
The first argument is the singular name of the COLLECTION that will be CREATED for your model 
and the second argument is the SCHEM you want to use in creating the model.

The model represents a collection of documents in the database that you can search
*/

var mongoose = require('mongoose');

//Define a schema
var contactSchema = mongoose.Schema({
    name         : String
});

var contact = mongoose.model('contact', contactSchema);
module.exports = contact;