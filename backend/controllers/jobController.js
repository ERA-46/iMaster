const Job = require('../models/jobs');
const mongoose = require('mongoose');

//get all items
const getAllJobs = async(req, res) => {
    const jobs = await Job.find({}).sort({createdAt: -1});
    res.status(200).json({jobs});
};

const createJob = async(req, res) => {
    const {title, description, received_date, due_date, customer_name, customer_contact, status} = req.body;

    try{
        const job = new Job({
            title,
            description,
            received_date,
            due_date,
            customer_name,
            customer_contact,
            status
        });
        await job.save();
        res.status(201).json({mssg: 'Job added successfully', job: job});
    }catch(err){
        res.status(500).json({mssg: 'Error creating job', error: err.message});
    }
};

const deleteJob = async(req, res) => {
    try{
        const {id} = req.params;
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg: 'Invalid Mongo id'});
        }

        const job = await Job.findByIdAndDelete({_id: id});
        
        if(!job){
            return res.status(404).json({mssg: 'Job not found'});
        }
        
        res.json({mssg: 'Job deleted successfully', job});
    }catch(err){
        res.status(500).json({mssg: 'Error deleting job', error: err.message});
    }
};

const updateJob = async(req, res) => {
    const {id} =  req.params;
    const {title, description, received_date, due_date, customer_name, customer_contact, status} = req.body;

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({mssg: 'Invalid Mongo id'});
        }

        const job =  await Job.findById(id);
        
        if(!job){
            return res.status(404).json({mssg: 'Job not found'});
        }

        job.title = title || job.title;
        job.description = description || job.description;
        job.received_date = received_date || job.received_date;
        job.due_date = due_date || job.due_date;
        job.customer_name = customer_name || job.customer_name;
        job.customer_contact = customer_contact || job.customer_contact;
        job.status = status || job.status;

        await job.save();
        res.json({mssg: 'Job updated successfully', job: job});
        
    }catch(err){
        res.status(500).json({mssg: 'Error updating job', error: err.message});
    }
};

module.exports = {
    getAllJobs,
    createJob,
    deleteJob,
    updateJob
};