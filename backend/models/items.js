const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: String,
    quantity: String,
    image: {
        type: String,
        required: true
    }

}, {timestamps: true});

module.exports = mongoose.model('Item', itemSchema);