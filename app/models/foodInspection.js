var mongoose = require('mongoose');

//Define the schema, This is required for mapping the mongo db data to a corresponding model object
var schema = new mongoose.Schema({ business_id: 'Number',
    business_name : 'String',
    violation_description : 'String',
    risk_category : 'String'}
);
//Model name, schema and then the collection name
module.exports = mongoose.model('foodInspection',schema, 'foodinspection');