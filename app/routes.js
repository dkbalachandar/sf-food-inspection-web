// app/routes.js

var foodInspection = require('./models/foodInspection');

// expose the routes to our app with module.exports
module.exports = function (app) {

    // get all inspections and data
    app.get('/api/inspections', function (req, res) {

        foodInspection.find({}, function (err, data) {
            if (err) res.send(err)
            res.json(data);
        });
    });

    app.get('/api/inspections/name/:businessname', function (req, res) {

        foodInspection.find({business_name: req.params.businessname}, function (err, data) {
            if (err) res.send(err)
            res.json(data);
        });
    });

    app.get('/api/inspections/id/:businessId', function (req, res) {

        foodInspection.find({business_id: req.params.businessId}, function (err, data) {
            if (err) res.send(err)
            res.json(data);
        });
    });

    app.get('/api/inspections/category/:category', function (req, res) {

        foodInspection.find({risk_category: req.params.category}, function (err, data) {
            if (err) res.send(err)
            res.json(data);
        });
    });

    app.get('/api/inspections/businesses', function (req, res) {

        foodInspection.find().distinct('business_name', function (err, data) {
            if (err) res.send(err)
            res.json(data);
        });
    });

    app.get('/api/inspections/businesses/:category', function (req, res) {
        var category = ""
        if ("HIGH" == req.params.category) {
            category = 'High Risk'
        } else if ("MOD" == req.params.category) {
            category = 'Moderate Risk'
        } else if ("LOW" == req.params.category) {
            category = 'Low Risk'
        }
        foodInspection.find({risk_category: category}).distinct('business_name', function (err, data) {
            if (err) res.send(err)

            res.json(data);
        });
    });

};