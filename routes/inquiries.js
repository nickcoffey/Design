const express = require('express');
const router = express.Router();
const inquiry = require('../models/inquiry');
const config = require('../config/database');
const passport = require('passport');
const multer = require('multer');
const fs = require('fs');

// Get all inquiries
router.get('/all', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    inquiry.getAllInquiries((inquiries) => {
        const pendingInquiries = [];
        const declinedInquiries = [];
        const acceptedInquiries = [];

        if (!inquiries) {
            return err;
        } else {
            inquiries.forEach(inquiry => {
                if (inquiry.inquiryStatus == "PENDING") {
                    pendingInquiries.push(inquiry);
                } else if (inquiry.inquiryStatus == "DECLINED") {
                    declinedInquiries.push(inquiry);
                } else if (inquiry.inquiryStatus == "ACCEPTED") {
                    acceptedInquiries.push(inquiry);
                }
            });
            //console.log({inquiries: inquiries});
            return response.json({
                inquiries: inquiries,
                pendingInquiries: pendingInquiries,
                declinedInquiries: declinedInquiries,
                acceptedInquiries: acceptedInquiries
            });
        }
    });
});

// Get inquiries by customer
router.get('/all/customer/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    inquiry.getInquiriesByCustomer(request.params.id, (inquiries) => {
        if (!inquiries) {
            return err;
        } else {
            return response.json({
                inquiries: inquiries,
            });
        }
    });
});

// Get inquiry by id
router.get('/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    inquiry.getInquiryById(id, (inquiry) => {
        if (!inquiry) {
            return err;
        } else {
            return response.json(inquiry);
        }
    });
});

// Create inquiry
router.post('/new', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newInquiry = {
        customerID: request.body.customerID,
        description: request.body.description,
        receivedDate: request.body.receivedDate
    };

    inquiry.createInquiry(newInquiry, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Inquiry created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update inquiry status
router.post('/update-status', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedInquiry = {
        inquiryID: request.body.inquiryID,
        inquiryStatus: request.body.inquiryStatus,
        removeEndDate: request.body.removeEndDate
    };

    inquiry.updateInquiryStatus(updatedInquiry, (message) => {
        if (message.message.includes("Rows matched: 1  Changed: 1  Warnings: 0")) {
            response.json({
                success: true,
                msg: 'Inquiry status updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete inquiry
router.post('/delete/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;

    inquiry.deleteInquiry(id, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Inquiry Deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update inquiry
router.post('/update', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedInquiry = {
        inquiryID: request.body.inquiryID,
        description: request.body.description
    }

    if (updatedInquiry.description == null || updatedInquiry.description == undefined || updatedInquiry.description == "") {
        delete updatedInquiry.description;
    }

    inquiry.updateInquiry(updatedInquiry, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Inquiry updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

/********************************************************* Inquiry Files *************************************************************************/
// Upload inquiry file
router.post('/:id/upload', function (req, res, next) {
    const id = req.params.id;
    var fileName = '';

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, `./uploads/files`);
        },
        filename: function (req, file, cb) {
            fs.stat(`./uploads/files/${file.originalname}`, (error, stat) => {
                if (error == null) {
                    //fileExists = true;
                    fileName = `(Copy)${file.originalname}`;
                    return res.json({
                        success: false,
                        msg: file.originalname + " exists"
                    });
                    console.log(file.originalname + " exists");
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
        let newInquiryFile = {
            inquiryID: req.params.id,
            fileName: fileName
        };

        inquiry.uploadInquiryFile(newInquiryFile, (message) => {
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

// Get file names
router.get('/:id/files', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const id = req.params.id;
    inquiry.getInquiryFilesById(id, (fileNames) => {
        if (!fileNames) {
            return err;
        } else {
            return res.json(fileNames);
        }
    });
});

// Delete inquiry file
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
            inquiry.deleteInquiryFile(id, (message) => {
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


module.exports = router;