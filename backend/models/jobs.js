const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    received_date: String,
    due_date: String,
    customer_name: String,
    customer_contact: String,
    status: {
        type: String,
        default: 'Pending'
    }

}, {timestamps: true});

module.exports = mongoose.model('Job', jobSchema);