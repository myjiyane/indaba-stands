/* Compile model from schema
The first argument is the singular name of the COLLECTION that will be CREATED for your model 
and the second argument is the SCHEMA you want to use in creating the model.

The model represents a collection of documents in the database that you can search
*/

var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  _id: String,                                      
  catName: String,
  totalAds: Number,
  industries: [
    {
      indName: String,
      totalAds: Number
    }
  ]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, capped: { size: 1500000, max: 50, autoIndexId: true }});

var categories = mongoose.model('categories', categorySchema);
module.exports = categories;