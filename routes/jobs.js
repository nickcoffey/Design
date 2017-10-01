const express = require('express');
const router = express.Router();
const job = require('../models/job');
const config = require('../config/database');
const passport = require('passport');

// Get all jobs
router.get('/all', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    job.getAllJobs((jobs) => {
        if(!jobs){
            throw err;
        } else{
            return response.json({jobs: jobs});
        }
    });
});

// Get current jobs
router.get('/all/current', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    job.getCurrentJobs((jobs) => {
        if(!jobs){
            throw err;
        } else{
            return response.json({jobs: jobs});
        }
    });
});

// Get job by id
router.get('/:id', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;
    job.getJobById(id, (job) => {
        if(!job){
            throw err;
        } else{
            return response.json(job);
        }
    });
});

module.exports = router;