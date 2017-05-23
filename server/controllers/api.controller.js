var path = require('path');
var express = require('express');
var router = express.Router();
var apiService = require('../services/api.services');

var entities = require('../../model/entities');
var users = require('../../model/users');
var companies = require('../../model/companies');
var industries = require('../../model/industries');
var categories = require('../../model/categories');
var stalls = require('../../model/stalls');
var bookings = require('../../model/bookingDets');

// routes
router.get('/industries', getAllIndustries);

module.exports = router;
 
function getAllIndustries(req, res) {
    apiService.getAllIndustries()
        .then(function (industries) {
            res.json(industries);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
};