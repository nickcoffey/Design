const express = require('express');
const router = express.Router();
const job = require('../models/job');
const config = require('../config/database');
const passport = require('passport');

// Get all jobs
router.get('/all', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    job.getAllJobs((jobs) => {
        if(!jobs){
            return err;
        } else{
            return response.json({jobs: jobs});
        }
    });
});

// Get current jobs
router.get('/all/current', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    job.getCurrentJobs((jobs) => {
        if(!jobs){
            return err;
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
            return err;
        } else{
            return response.json(job);
        }
    });
});

// Create job
router.post('/new', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let newJob = {
        bidID: request.body.bidID,
        createdDate: request.body.createdDate
    };

    job.createJob(newJob, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Job created'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Create job material
router.post('/new/job-material', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let newJobMaterial = {
        materialID: request.body.materialID,
        quantity: request.body.quantity,
        perUnitCost: request.body.perUnitCost
    };
    
    job.createJobMaterial(newJobMaterial, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Job material created'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

module.exports = router;