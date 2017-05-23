
var Q = require('q');

var entities = require('../../model/entities');
var users = require('../../model/users');
var companies = require('../../model/companies');
var industries = require('../../model/industries');
var categories = require('../../model/categories');
var stalls = require('../../model/stalls');
var bookings = require('../../model/bookingDets');
 
var service = {};
 
service.getAllIndustries = getAllIndustries;

module.exports = service;
 
/*GET All industries */
function getAllIndustries() {
    var deferred = Q.defer();
 
    industries.find({cat_id: /tradeExp/}, function (err, industries) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (industries) {

            deferred.resolve(industries);
        } else {
            // user not found
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}

