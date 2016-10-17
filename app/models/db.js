var mongoose = require('mongoose');

//Define the schema, This is required for mapping the mongo db data to a corresponding model object
var allCollectionSchema = new mongoose.Schema({ business_id: 'Number',
    business_name : 'String',
    violation_description : 'String',
    risk_category : 'String'}
);

var filterCollectionSchema = new mongoose.Schema({
        business_name : 'String',
        risk_category : 'String',
        count: 'Number'}
);

//Model name, schema and then the collection name
module.exports = {
    AllFoodInspection:mongoose.model("AllFoodInspection", allCollectionSchema, 'allFoodInspection'),
    FilterFoodInspection:mongoose.model('FilterFoodInspection',filterCollectionSchema, 'filterFoodInspection')
}