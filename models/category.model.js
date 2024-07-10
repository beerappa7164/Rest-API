const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.objectId;

const categorySchema = new Schema({
    _id:{type: objectId, auto: true},
    name: {type: String, required: true}
},{
    versionKey: false
})



//Defining the schema for category model and categories is the collection name
const category = mongoose.model('categories',categorySchema)
module.exports = category;