const express = require('express');
const router = express.Router();
const job = require('../models/job');
const config = require('../config/database');
const passport = require('passport');
const fs = require('fs');

// Get all jobs
router.get('/all', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    job.getAllJobs((jobs) => {
        const inProgressJobs = [];
        const completedJobs = [];

        if (!jobs) {
            return err;
        } else {
            jobs.forEach(job => {
                if (job.jobStatus == "IN-PROGRESS") {
                    inProgressJobs.push(job);
                } else if (job.jobStatus == "COMPLETED") {
                    completedJobs.push(job);
                }
            });
            return response.json({
                jobs: jobs,
                inProgressJobs: inProgressJobs,
                completedJobs: completedJobs
            });
        }
    });
});

// Get current jobs
router.get('/all/current', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    job.getCurrentJobs((jobs) => {
        if (!jobs) {
            return err;
        } else {
            return response.json({ jobs: jobs });
        }
    });
});

// Get job by id
router.get('/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    job.getJobById(id, (job) => {
        if (!job) {
            return err;
        } else {
            return response.json(job);
        }
    });
});

// Get job materials by id
router.get('/:id/job-materials', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    job.getJobMaterialsById(id, (jobMaterials) => {
        if (!jobMaterials) {
            return err;
        } else {
            return response.json(jobMaterials);
        }
    });
});

// Get job materials cost
router.get('/:id/job-materials/cost', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    job.getCurrentJobMaterialsCost(id, (cost) => {
        if (!cost) {
            return err;
        } else {
            return response.json(cost);
        }
    });
});

// Create job
router.post('/new', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newJob = {
        bidID: request.body.bidID
    };

    job.createJob(newJob, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job created'
            });
            makeDirectory(message.insertId);
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Create job material
router.post('/:id/new/job-material', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    // const id = request.params.id;
    let newJobMaterial = {
        jobID: request.params.id,
        materialID: request.body.materialID,
        materialName: request.body.materialName,
        linearFeet: request.body.linearFeet,
        pricePerLinearFoot: request.body.pricePerLinearFoot
    };

    job.createJobMaterial(newJobMaterial, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job material created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete job material
router.post('/delete/job-material', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let jobMaterial = {
        materialID: request.body.materialID,
        jobID: request.body.jobID
    };

    job.deleteJobMaterial(jobMaterial, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job material deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update job
router.post('/update', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedJob = {
        jobID: request.body.jobID,
        jobStatus: request.body.jobStatus,
        createdDate: request.body.createdDate,
        endDate: request.body.endDate
    }

    if (updatedJob.jobStatus == null || updatedJob.jobStatus == undefined || updatedJob.jobStatus == "") {
        delete updatedJob.jobStatus;
    }
    if (updatedJob.createdDate == null || updatedJob.createdDate == undefined || updatedJob.createdDate == "") {
        delete updatedJob.createdDate;
    }
    if (updatedJob.endDate == null || updatedJob.endDate == undefined || updatedJob.endDate == "") {
        delete updatedJob.endDate;
    }

    job.updateJob(updatedJob, (message) => {
        if (message.message.includes("Warnings: 0")) {
            response.json({
                success: true,
                msg: 'Job updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update job status
router.post('/update-status', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedJob = {
        jobID: request.body.jobID,
        jobStatus: request.body.jobStatus
    };

    job.updateJobStatus(updatedJob, (message) => {
        if (message.message.includes("Warnings: 0")) {
            response.json({
                success: true,
                msg: 'Job status updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete job
router.post('/delete/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;

    job.deleteJob(id, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job Deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete job file
router.post('/:id/files/delete', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const id = req.params.id;
    const file = `./uploads/files/jobs/${id}/${req.body.file}`;
    fs.unlink(file, (err) => {
        if (err) {
            res.json({
                success: false,
                msg: err
            });
        } else {
            res.json({
                success: true,
                msg: "File deleted"
            });
        }
    });
});

// Loop through job files
router.get('/:id/files', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const id = req.params.id;
    const filesArray = [];
    fs.readdir(`./uploads/files/jobs/${id}`, (err, files) => {
        files.forEach((file, index) => {
            filesArray.push(file);
        });
        res.json({ files: filesArray });
    });
});

/** API path that will upload the files */
router.post('/:id/upload', function (req, res, next) {
    const id = req.params.id;

    var multer = require('multer');
    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, `./uploads/files/jobs/${id}`);
        },
        filename: function (req, file, cb) {
            fs.stat(`./uploads/files/jobs/${id}/${file.originalname}`, (error, stat) => {
                if (error == null) {
                    //fileExists = true;
                    cb(null, `${file.originalname}(Copy)`);
                } else if (error.code == 'ENOENT') {
                    //fileExists = false;
                    cb(null, `${file.originalname}`);
                } else {
                    //error
                }
            });
        }
    });

    var upload = multer({ //multer settings
        storage: storage
    }).single('file');
    upload(req, res, function (err) {
        if (err) {
            res.json({ 
                success: false, 
                msg: err 
            });
        } else {
            res.json({ 
                success: true, 
                msg: "File uploaded" 
            });
        }
    });
});

// function wait(){
//     var date = new Date();
//     var date2 = null;
//     do {
//         date2 = new Date();
//     } while (date2 - date < 4000);
// }

function makeDirectory(id) {
    var mkdirp = require('mkdirp');
    mkdirp(`./uploads/files/jobs/${id}`, (err) => {
        console.log(err);
    });
    // wait(); // wait 2 seconds
}

module.exports = router;