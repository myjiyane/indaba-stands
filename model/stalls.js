/* Compile model from schema
The first argument is the singular name of the COLLECTION that will be CREATED for your model 
and the second argument is the SCHEMA you want to use in creating the model.

The model represents a collection of documents in the database that you can search
*/

var mongoose = require('mongoose');

var stallSchema = mongoose.Schema({ 
  _id: String,
  indId: String,
  stallName: String,
  cat_id: String,
  venue: String,
  googleAddr: String,
  availStatus: String,
  shortDescr: Number,
  dateFrom: Date,
  dateTo: Date,
  urlLink: String,
  hotNess: String,
  stallSpecs: {
    rentalPrice: String,
    fullDescr: String,
    size: String
  },
  photoLinks: [
    {
      link: String,
       meta: {
              dateCreated: Date,
              size: String, 
              mimeType: String
              }    
    }
  ]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, capped: { size: 7500000, max: 1000, autoIndexId: true }});

var stalls = mongoose.model('stalls', stallSchema);
module.exports = stalls;