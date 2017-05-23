var path = require('path');
var express = require('express');
var router = express.Router();

var entities = require('../../model/entities');
var users = require('../../model/users');
var companies = require('../../model/companies');
var industries = require('../../model/industries');
var categories = require('../../model/categories');
var stalls = require('../../model/stalls');
var bookings = require('../../model/bookingDets');
var mongoose = require('mongoose'); 

/*GET All industries */
router.get('/entities', function(req, res) {
   entities.find({}, function(err, entities) {
        if (err) {
            res.status(201).send(err);
        } else {
            res.json(entities);
        }
    });
});

/*GET All users */
router.get('/users', function(req, res) {
   users.find({}, function(err, users) {
        if (err) {
            res.status(201).send(err);
        } else {
            res.json(users);
        }
    });
});

/*GET All users */
router.get('/companies', function(req, res) {
   companies.find({}, function(err, companies) {
        if (err) {
            res.status(201).send(err);
        } else {
            res.json(companies);
        }
    });
});
/*GET All industries */
router.get('/industries', function(req, res) {
   industries.find({}, function(err, industries) {
        if (err) {
            res.status(201).send(err);
        } else {
            res.json(industries);
        }
    });
});

/*GET All categories */
router.get('/categories', function(req, res) {
   categories.find({}, function(err, categories) {
        if (err) {
            res.status(201).send(err);
        } else {
            res.json(categories);
        }
    });
});

/*GET All stalls */
router.get('/stalls', function(req, res) {
   stalls.find({}, function(err, stalls) {
        if (err) {
            res.status(201).send(err);
        } else {
            res.json(stalls);
        }
    });
});

/*GET All bookings */
router.get('/bookings', function(req, res) {
   bookings.find({}, function(err, bookings) {
        if (err) {
            res.status(201).send(err);
        } else {
            res.json(bookings);
        }
    });
});

module.exports = router;
