const mongoose = require('mongoose');
const category = require('./category.model');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.objectId;

const productSchema = new Schema({
    _id:{type: objectId, auto: true},
    name: {type: String, required: true},
    unitPrice:{type:Number, required:true},
    //taking the reference from category.model.js collection name
    categoryId: {type:objectId, ref:'categories'}
},{
    versionKey: false
})



//Defining the schema for category model
const product = mongoose.model('products', productSchema)
module.exports = product;