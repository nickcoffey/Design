const express = require('express');
const router = express.Router();
const job = require('../models/job');
const config = require('../config/database');
const passport = require('passport');

// Get all jobs
router.get('/all', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    job.getAllJobs((jobs) => {
        const inProgressJobs = [];
        const completedJobs = [];

        if(!jobs){
            return err;
        } else{
            jobs.forEach(job => {
                if(job.jobStatus == "IN-PROGRESS"){
                    inProgressJobs.push(job);
                } else if(job.jobStatus == "COMPLETED"){
                    completedJobs.push(job);
                }
            });
            return response.json({
                inProgressJobs: inProgressJobs,
                completedJobs: completedJobs
            });
        }
    });
});

// Get current jobs
router.get('/all/current', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    job.getCurrentJobs((jobs) => {
        if(!jobs){
            return err;
        } else{
            console.log(jobs);
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

// Get job materials by id
router.get('/:id/job-materials', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;
    job.getJobMaterialsById(id, (jobMaterials) => {
        if(!jobMaterials){
            return err;
        } else{
            return response.json(jobMaterials);
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
router.post('/:id/new/job-material', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;
    let newJobMaterial = {
        materialID: request.body.materialID,
        quantity: request.body.quantity,
        perUnitCost: request.body.perUnitCost
    };
    
    job.createJobMaterial(id, newJobMaterial, (message) => {
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

// Delete job material
router.post('/delete/job-material', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let jobMaterial = {
        materialID: request.body.materialID,
        jobID: request.body.jobID
    };

    job.deleteJobMaterial(jobMaterial, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Job material deleted'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update job
router.post('/update', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let updatedJob = {
        jobID: request.body.jobID,
        jobLabor: request.body.jobLabor,
        jobRevenue: request.body.jobRevenue,
        jobStatus: request.body.jobStatus,
        createdDate: request.body.createdDate,
        endDate: request.body.endDate
    }

    if(updatedJob.jobLabor == null || updatedJob.jobLabor == undefined || updatedJob.jobLabor == ""){
        delete updatedJob.jobLabor;
    }
    if(updatedJob.jobRevenue == null || updatedJob.jobRevenue == undefined || updatedJob.jobRevenue == ""){
        delete updatedJob.jobRevenue;
    }
    if(updatedJob.jobStatus == null || updatedJob.jobStatus == undefined || updatedJob.jobStatus == ""){
        delete updatedJob.jobStatus;
    }
    if(updatedJob.createdDate == null || updatedJob.createdDate == undefined || updatedJob.createdDate == ""){
        delete updatedJob.createdDate;
    }
    if(updatedJob.endDate == null || updatedJob.endDate == undefined || updatedJob.endDate == ""){
        delete updatedJob.endDate;
    }

    job.updateJob(updatedJob, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Job updated'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update job status
router.post('/update-status', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let updatedJob = {
        jobID: request.body.jobID,
        jobStatus: request.body.jobStatus
    };

    job.updateJobStatus(updatedJob, (message) => {
        if(message.message.includes("Rows matched: 1  Changed: 1  Warnings: 0")){
            response.json({
                success: true,
                msg: 'Job status updated'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete job
router.post('/delete/:id', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;

    job.deleteJob(id, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Job Deleted'
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