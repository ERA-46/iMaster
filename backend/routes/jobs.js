const express = require('express');
const router = express.Router();
const {
    createJob,
    getAllJobs,
    deleteJob,
    updateJob
} = require('../controllers/jobController');


//Get all jobs
router.get('/', getAllJobs);

//Post new job
router.post('/', createJob);

//Update existing job
router.patch('/:id', updateJob);

//Delete job
router.delete('/:id', deleteJob);

module.exports = router;
 