// app/routes.js

var db = require('./models/db');

var categories = ["High Risk", "Moderate Risk", "Low Risk"];

var i = 0;

// expose the routes to our app with module.exports
module.exports = function (app) {

    var HashMap = require('hashmap');

    var categoryCountStats = [];

    db.AllFoodInspection.find({risk_category: 'High Risk'}).distinct('business_name', function (err, data) {
        var stats = {};
        stats['category'] = 'High Risk';
        stats['count'] = data.length;
        categoryCountStats.push(stats);
    });

    db.AllFoodInspection.find({risk_category: 'Moderate Risk'}).distinct('business_name', function (err, data) {
        var stats = {};
        stats['category'] = 'Moderate Risk';
        stats['count'] = data.length;
        categoryCountStats.push(stats);
    });

    db.AllFoodInspection.find({risk_category: 'Low Risk'}).distinct('business_name', function (err, data) {
        var stats = {};
        stats['category'] = 'Low Risk';
        stats['count'] = data.length;
        categoryCountStats.push(stats);
    });

    // get all inspections and data
    app.get('/api/inspections', function (req, res) {

        db.AllFoodInspection.find({}, function (err, data) {
            if (err) res.send(err);
            res.json(data);
        });
    });

    app.get('/api/inspections/name/:businessname', function (req, res) {

        db.AllFoodInspection.find({business_name: req.params.businessname}, function (err, data) {
            if (err) res.send(err);
            res.json(data);
        });
    });

    app.get('/api/inspections/id/:businessId', function (req, res) {

        db.AllFoodInspection.find({business_id: req.params.businessId}, function (err, data) {
            if (err) res.send(err);
            else res.json(data);
        });
    });

    app.get('/api/inspections/category/:category', function (req, res) {

        db.AllFoodInspection.find({risk_category: req.params.category}, function (err, data) {
            if (err) res.send(err);
            else res.json(data);
        });
    });

    app.get('/api/inspections/businesses', function (req, res) {

        db.AllFoodInspection.find().distinct('business_name', function (err, data) {
            if (err) res.send(err);
            else res.json(data);
        });
    });

    app.get('/api/inspections/groupBy/category', function (req, res) {

        db.FilterFoodInspection.find({}, function (err, data) {
            if (err) res.send(err);
            else res.json(data);
        });
    });

    app.get('/api/inspections/categoryCount', function (req, res) {
        res.json(categoryCountStats);
    });

    app.get('/api/inspections/businesses/:category', function (req, res) {
        var category = "";
        if ("HIGH" == req.params.category) {
            category = 'High Risk';
        } else if ("MOD" == req.params.category) {
            category = 'Moderate Risk';
        } else if ("LOW" == req.params.category) {
            category = 'Low Risk';
        }
        db.AllFoodInspection.find({risk_category: category}).distinct('business_name', function (err, data) {
            if (err) res.send(err);
            else res.json(data);
        });
    });

};