const express = require('express');
const router = express.Router();
const job = require('../models/job');
const config = require('../config/database');
const passport = require('passport');
var fs = require('fs');
var multer = require('multer');
var multerS3 = require('multer-s3');
var AWS = require('aws-sdk');
var mime = require('mime');

AWS.config.loadFromPath('./config/s3_config.json');
var s3 = new AWS.S3();

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

// Get current job costs
router.get('/all/current/costs', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    job.getCurrentJobCosts((jobs) => {
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
            // makeDirectory(message.insertId);
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
        endDate: request.body.endDate,
        jobNotes: request.body.jobNotes
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
    if (updatedJob.jobNotes == null || updatedJob.jobNotes == undefined || updatedJob.jobNotes == "") {
        delete updatedJob.jobNotes;
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
router.post('/:jobID/delete/job-material/:materialID', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let jobMaterial = {
        materialID: request.params.materialID,
        jobID: request.params.jobID
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
        pricePerUnit: request.body.pricePerUnit,
        linearFeetCoverage: request.body.linearFeetCoverage
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

// Update job material
router.post('/modify/job-material', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedJobMaterial = {
        jobID: request.body.jobID,
        materialID: request.body.materialID,
        linearFeet: request.body.linearFeet,
        pricePerUnit: request.body.pricePerUnit,
        linearFeetCoverage: request.body.linearFeetCoverage
    };
    if (updatedJobMaterial.linearFeet == null || updatedJobMaterial.linearFeet == undefined || updatedJobMaterial.linearFeet == "") {
        delete updatedJobMaterial.linearFeet;
    }
    if (updatedJobMaterial.pricePerUnit == null || updatedJobMaterial.pricePerUnit == undefined || updatedJobMaterial.pricePerUnit == "") {
        delete updatedJobMaterial.pricePerUnit;
    }
    if (updatedJobMaterial.linearFeetCoverage == null || updatedJobMaterial.linearFeetCoverage == undefined || updatedJobMaterial.linearFeetCoverage == "") {
        delete updatedJobMaterial.linearFeetCoverage;
    }

    job.updateJobMaterial(updatedJobMaterial, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Job material updated'
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
router.post('/new/change-order/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    // const id = request.params.id;
    let newChangeOrder = {
        jobID: request.params.id,
        changeAmount: request.body.changeAmount
    };

    if (newChangeOrder.changeAmount == null || newChangeOrder.changeAmount == undefined || newChangeOrder.changeAmount == "") {
        response.json({
            success: true,
            msg: 'Change order empty'
        });
    } else {
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
    }
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

// Update change order
router.post('/update/change-order', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedChangeOrder = {
        changeID: request.body.changeID,
        changeAmount: request.body.changeAmount
    };

    job.updateChangeOrder(updatedChangeOrder, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Change order updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

/********************************************************* Job Revenue *************************************************************************/

// Create job revenue
router.post('/create/job-revenue', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newJobRevenue = {
        jobID: request.body.jobID,
        revenueAmount: request.body.revenueAmount
    };

    if (newJobRevenue.revenueAmount == null || newJobRevenue.revenueAmount == undefined || newJobRevenue.revenueAmount == "") {
        response.json({
            success: true,
            msg: 'Job revenue empty'
        });
    } else {
        job.createJobRevenue(newJobRevenue, (message) => {
            if (message.warningCount == 0) {
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
    }
});

// Update job revenue
router.post('/change/job-revenue', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedJobRevenue = {
        revenueID: request.body.revenueID,
        revenueAmount: request.body.revenueAmount
    };

    if (updatedJobRevenue.revenueAmount == null || updatedJobRevenue.revenueAmount == undefined || updatedJobRevenue.revenueAmount == "") {
        response.json({
            success: true,
            msg: 'Job revenue empty'
        });
    } else {
        job.updateJobRevenue(updatedJobRevenue, (message) => {
            if (message.warningCount == 0) {
                response.json({
                    success: true,
                    msg: 'Job revenue updated'
                });
            } else {
                response.json({
                    success: false,
                    msg: message.message
                });
            }
        });
    }
});

// Delete job revenue
router.post('/remove/revenue/id/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
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
router.post('/:id/create/job-labor', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newJobLabor = {
        jobID: request.params.id,
        roleID: request.body.roleID,
        roleName: request.body.roleName,
        roleWage: request.body.roleWage,
        laborHours: request.body.laborHours
    };
    if (newJobLabor.laborHours == null || newJobLabor.laborHours == undefined || newJobLabor.laborHours == "") {
        delete newJobLabor.laborHours;
    }
    if (newJobLabor.roleWage == null || newJobLabor.roleWage == undefined || newJobLabor.roleWage == "") {
        delete newJobLabor.roleWage;
    }

    job.createJobLabor(newJobLabor, (message) => {
        if (message.warningCount == 0) {
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

// Update job labor
router.post('/update/job-labor', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedJobLabor = {
        laborID: request.body.laborID,
        roleWage: request.body.roleWage,
        laborHours: request.body.laborHours
    };
    if (updatedJobLabor.laborHours == null || updatedJobLabor.laborHours == undefined || updatedJobLabor.laborHours == "") {
        delete updatedJobLabor.laborHours;
    }
    if (updatedJobLabor.roleWage == null || updatedJobLabor.roleWage == undefined || updatedJobLabor.roleWage == "") {
        delete updatedJobLabor.roleWage;
    }
    console.log(updatedJobLabor);
    job.updateJobLabor(updatedJobLabor, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Job labor updated'
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

/********************************************************* Job Equipment *************************************************************************/

// Create job equipment
router.post('/new/job-equipment', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newJobEquipment = {
        equipmentID: request.body.equipmentID,
        equipmentName: request.body.equipmentName,
        intervals: request.body.intervals,
        pricePerDay: request.body.pricePerDay,
        DaysSelected: request.body.DaysSelected,
        pricePer1Week: request.body.pricePer1Week,
        WeekSelected1: request.body.WeekSelected1,
        pricePer2Week: request.body.pricePer2Week,
        WeekSelected2: request.body.WeekSelected2,
        pricePer3Week: request.body.pricePer3Week,
        WeekSelected3: request.body.WeekSelected3
    };
    console.log(newJobEquipment);

    job.createJobEquipment(newJobEquipment, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job equipment created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Create job equipment by ID
router.post('/:id/new/job-equipment', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newJobEquipment = {
        jobID: request.params.id,
        equipmentID: request.body.equipmentID,
        equipmentName: request.body.equipmentName,
        intervals: request.body.intervals,
        pricePerDay: request.body.pricePerDay,
        DaysSelected: request.body.DaysSelected,
        pricePer1Week: request.body.pricePer1Week,
        WeekSelected1: request.body.WeekSelected1,
        pricePer2Week: request.body.pricePer2Week,
        WeekSelected2: request.body.WeekSelected2,
        pricePer3Week: request.body.pricePer3Week,
        WeekSelected3: request.body.WeekSelected3
    };

    job.createJobEquipmentById(newJobEquipment, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job equipment created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete job equipment
router.post('/delete/job-equipment/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let jobEquipmentID = request.params.id;

    job.deleteJobEquipment(jobEquipmentID, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Job equipment deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Get job equipments by id
router.get('/:id/job-equipments', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    job.getJobEquipmentsById(id, (jobEquipments) => {
        if (!jobEquipments) {
            return err;
        } else {
            return response.json(jobEquipments);
        }
    });
});

// Update Job Equipment
router.post('/update/job-equipment', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedJobEquipment = {
        jobEquipmentID: request.body.jobEquipmentID,
        equipmentID: request.body.equipmentID,
        equipmentName: request.body.equipmentName,
        intervals: request.body.intervals,
        pricePerDay: request.body.pricePerDay,
        DaysSelected: request.body.DaysSelected,
        pricePer1Week: request.body.pricePer1Week,
        WeekSelected1: request.body.WeekSelected1,
        pricePer2Week: request.body.pricePer2Week,
        WeekSelected2: request.body.WeekSelected2,
        pricePer3Week: request.body.pricePer3Week,
        WeekSelected3: request.body.WeekSelected3
    };
    // console.log(updatedJobEquipment);
    // if (updatedJobEquipment.equipmentName == null || updatedJobEquipment.equipmentName == undefined || updatedJobEquipment.equipmentName == "") {
    //     delete updatedJobEquipment.equipmentName;
    // }
    // if (updatedJobEquipment.intervals == null || updatedJobEquipment.intervals == undefined || updatedJobEquipment.intervals == "") {
    //     delete updatedJobEquipment.intervals;
    // }
    // if (updatedJobEquipment.pricePerDay == null || updatedJobEquipment.pricePerDay == undefined || updatedJobEquipment.pricePerDay == "") {
    //     delete updatedJobEquipment.pricePerDay;
    // }
    // if (updatedJobEquipment.DaysSelected == null || updatedJobEquipment.DaysSelected == undefined || updatedJobEquipment.DaysSelected == "") {
    //     delete updatedJobEquipment.DaysSelected;
    // }
    // if (updatedJobEquipment.pricePer1Week == null || updatedJobEquipment.pricePer1Week == undefined || updatedJobEquipment.pricePer1Week == "") {
    //     delete updatedJobEquipment.pricePer1Week;
    // }
    // if (updatedJobEquipment.WeekSelected1 == null || updatedJobEquipment.WeekSelected1 == undefined || updatedJobEquipment.WeekSelected1 == "") {
    //     delete updatedJobEquipment.WeekSelected1;
    // }
    // if (updatedJobEquipment.pricePer2Week == null || updatedJobEquipment.pricePer2Week == undefined || updatedJobEquipment.pricePer2Week == "") {
    //     delete updatedJobEquipment.pricePer2Week;
    // }
    // if (updatedJobEquipment.WeekSelected2 == null || updatedJobEquipment.WeekSelected2 == undefined || updatedJobEquipment.WeekSelected2 == "") {
    //     delete updatedJobEquipment.WeekSelected2;
    // }
    // if (updatedJobEquipment.pricePer3Week == null || updatedJobEquipment.pricePer3Week == undefined || updatedJobEquipment.pricePer3Week == "") {
    //     delete updatedJobEquipment.pricePer3Week;
    // }
    // if (updatedJobEquipment.WeekSelected3 == null || updatedJobEquipment.WeekSelected3 == undefined || updatedJobEquipment.WeekSelected3 == "") {
    //     delete updatedJobEquipment.WeekSelected3;
    // }

    job.updateJobEquipment(updatedJobEquipment, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Job equipment updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

/********************************************************* Job Files *************************************************************************/

// Delete job file
router.post('/:id/files/delete', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const id = req.params.id;
    const file = `./uploads/files/${req.body.key}`;

    fs.unlink(file, (err) => {
        if (err) {
            res.json({
                success: false,
                msg: err
            });
        } else {
            job.deleteJobFile(id, (message) => {
                if (message.warningCount == 0) {
                    return res.send({
                        success: true,
                        msg: "File deleted"
                    });
                } else {
                    return res.send({
                        success: false,
                        msg: message.message
                    });
                }
            });
        }
    });
});

// // Delete job file
// router.post('/:id/files/delete', passport.authenticate('jwt', { session: false }), (req, res, next) => {
//     const id = req.params.id;
//     var params = { Bucket: "allied-waterproofing", Delete: { Objects: [{ Key: req.body.key }] } };
//     s3.deleteObjects(params, function (err, data) {
//         if (err) {
//             return res.send({
//                 success: false,
//                 msg: err
//             });
//         }
//         else {
//             job.deleteJobFile(id, (message) => {
//                 if (message.warningCount == 0) {
//                     return res.send({
//                         success: true,
//                         msg: "File deleted"
//                     });
//                 } else {
//                     return res.send({
//                         success: false,
//                         msg: message.message
//                     });
//                 }
//             });
//         }
//     });
// });

// Get file names
router.get('/:id/files', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const id = req.params.id;
    job.getJobFilesById(id, (fileNames) => {
        if (!fileNames) {
            return err;

        } else {
            return res.json(fileNames);
        }
    });
});

// // Upload file
// router.post('/:id/upload', function (req, res, next) {
//     const id = req.params.id;
//     var upload = multer({
//         storage: multerS3({
//             s3: s3,
//             bucket: 'allied-waterproofing',
//             metadata: function (req, file, cb) {
//                 cb(null, { fieldName: file.fieldname });
//             },
//             key: function (req, file, cb) {
//                 cb(null, `${file.originalname}`)
//             }
//         })
//     }).single('file');
//     upload(req, res, function (err) {
//         let newJobFile = {
//             jobID: req.params.id,
//             fileName: req.file.originalname
//         };
//         job.uploadJobFile(newJobFile, (message) => {
//             if (message.warningCount == 0) {
//                 if (err) {
//                     res.json({
//                         success: false,
//                         msg: err
//                     });
//                 } else {
//                     res.json({
//                         success: true,
//                         msg: "File uploaded"
//                     });
//                 }
//             } else {
//                 res.json({
//                     success: false,
//                     msg: message.message
//                 });
//             }
//         });
//     });
// });


// // Loop through job files
// router.get('/:id/files', passport.authenticate('jwt', { session: false }), (req, res, next) => {
//     const id = req.params.id;
//     const filesArray = [];
//     fs.readdir(`./uploads/files/jobs/${id}`, (err, files) => {
//         files.forEach((file, index) => {
//             filesArray.push(file);
//         });
//         res.json({ files: filesArray });
//     });
// });

// Upload job file
router.post('/:id/upload', function (req, res, next) {
    const id = req.params.id;
    var fileName = '';

    // var multer = require('multer');
    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, `./uploads/files`);
        },
        filename: function (req, file, cb) {
            fs.stat(`./uploads/files/${file.originalname}`, (error, stat) => {
                if (error == null) {
                    //fileExists = true;
                    fileName = `(Copy)${file.originalname}`;
                    console.log(file.originalname + " exists");
                    return res.json({
                        success: false,
                        msg: file.originalname + " exists"
                    });
                    cb(null, `(Copy)${file.originalname}`);
                } else if (error.code == 'ENOENT') {
                    //fileExists = false;
                    fileName = file.originalname;
                    console.log(file.originalname + " does not exist");
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
        let newJobFile = {
            jobID: req.params.id,
            fileName: fileName
        };

        job.uploadJobFile(newJobFile, (message) => {
            if (message.warningCount == 0) {
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
            } else {
                res.json({
                    success: false,
                    msg: message.message
                });
            }
        });
    });
});

// function wait(){
//     var date = new Date();
//     var date2 = null;
//     do {
//         date2 = new Date();
//     } while (date2 - date < 4000);
// }

// function makeDirectory(id) {
//     var mkdirp = require('mkdirp');
//     mkdirp(`./uploads/files/jobs/${id}`, (err) => {
//         console.log(err);
//     });
//     // wait(); // wait 2 seconds
// }

module.exports = router;