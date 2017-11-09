const express = require('express');
const router = express.Router();
const job = require('../models/job');
const config = require('../config/database');
const passport = require('passport');
const fs = require('fs');

/********************************************************* Job *************************************************************************/

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

/********************************************************* Job Materials *************************************************************************/

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

/********************************************************* Change Order *************************************************************************/

// Create change order
router.post('/:id/new/change-order', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    // const id = request.params.id;
    let newChangeOrder = {
        jobID: request.params.id,
        changeAmount: request.body.changeAmount
    };

    job.createChangeOrder(newChangeOrder, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Change order created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete change order
router.post('/delete/change-order/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let changeID = request.params.id;

    job.deleteChangeOrder(changeID, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Change order deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Get change orders by id
router.get('/:id/change-orders', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    job.getChangeOrdersById(id, (changeOrders) => {
        if (!changeOrders) {
            return err;
        } else {
            return response.json(changeOrders);
        }
    });
});

/********************************************************* Job Revenue *************************************************************************/

// Create job revenue
router.post('/:id/new/job-revenue', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newJobRevenue = {
        jobID: request.params.id,
        revenueAmount: request.body.revenueAmount
    };

    job.createJobRevenue(newJobRevenue, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job revenue created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete job revenue
router.post('/delete/job-revenue/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let revenueID = request.params.id;

    job.deleteJobRevenue(revenueID, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job revenue deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Get job revenues by id
router.get('/:id/job-revenues', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    job.getJobRevenuesById(id, (jobRevenues) => {
        if (!jobRevenues) {
            return err;
        } else {
            return response.json(jobRevenues);
        }
    });
});

/********************************************************* Job Labor *************************************************************************/

// Create job labor
router.post('/:id/new/job-labor', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newJobLabor = {
        jobID: request.params.id,
        laborHours: request.body.laborHours,
        laborPrice: request.body.laborPrice
    };

    job.createJobLabor(newJobLabor, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job labor created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete job labor
router.post('/delete/job-labor/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let laborID = request.params.id;

    job.deleteJobLabor(laborID, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job labor deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Get job labors by id
router.get('/:id/job-labors', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    job.getJobLaborsById(id, (jobLabors) => {
        if (!jobLabors) {
            return err;
        } else {
            return response.json(jobLabors);
        }
    });
});

module.exports = router;