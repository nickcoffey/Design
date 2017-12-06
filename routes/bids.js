const express = require('express');
const router = express.Router();
const bid = require('../models/bid');
const config = require('../config/database');
const passport = require('passport');
const multer = require('multer');
const fs = require('fs');

/************************************************************* Bid ***************************************************************************/

// Update bid status
router.post('/update-status', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedBid = {
        bidID: request.body.bidID,
        bidStatus: request.body.bidStatus
    };

    bid.updateBidStatus(updatedBid, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Bid status updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete bid
router.post('/delete/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;

    bid.deleteBid(id, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid Deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update bid
router.post('/update', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedBid = {
        bidID: request.body.bidID,
        bidPrice: request.body.bidPrice,
        bidLabor: request.body.bidLabor,
        bidStatus: request.body.bidStatus,
        createdDate: request.body.createdDate,
        endDate: request.body.endDate,
        bidNotes: request.body.bidNotes
    }

    if (updatedBid.bidPrice == null || updatedBid.bidPrice == undefined || updatedBid.bidPrice == "") {
        delete updatedBid.bidPrice;
    }
    if (updatedBid.bidLabor == null || updatedBid.bidLabor == undefined || updatedBid.bidLabor == "") {
        delete updatedBid.bidLabor;
    }
    if (updatedBid.bidStatus == null || updatedBid.bidStatus == undefined || updatedBid.bidStatus == "") {
        delete updatedBid.bidStatus;
    }
    if (updatedBid.createdDate == null || updatedBid.createdDate == undefined || updatedBid.createdDate == "") {
        delete updatedBid.createdDate;
    }
    if (updatedBid.endDate == null || updatedBid.endDate == undefined || updatedBid.endDate == "") {
        delete updatedBid.endDate;
    }
    if (updatedBid.bidNotes == null || updatedBid.bidNotes == undefined || updatedBid.bidNotes == "") {
        delete updatedBid.bidNotes;
    }

    bid.updateBid(updatedBid, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Bid updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Create bid
router.post('/new', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newBid = {
        inquiryID: request.body.inquiryID,
        // bidLabor: request.body.bidLabor,
        bidPrice: request.body.bidPrice,
        // margin: request.body.margin
    };

    bid.createBid(newBid, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid created',
                id: message.insertId
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Get all bids
router.get('/all', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    bid.getAllBids((bids) => {
        const pendingBids = [];
        const declinedBids = [];
        const acceptedBids = [];

        if (!bids) {
            return err;
        } else {
            bids.forEach(bid => {
                if (bid.bidStatus == "PENDING") {
                    pendingBids.push(bid);
                } else if (bid.bidStatus == "DECLINED") {
                    declinedBids.push(bid);
                } else if (bid.bidStatus == "ACCEPTED") {
                    acceptedBids.push(bid);
                }
            });
            return response.json({
                bids: bids,
                pendingBids: pendingBids,
                declinedBids: declinedBids,
                acceptedBids: acceptedBids
            });
        }
    });
});

// Get bids by date
router.post('/by-date', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let dates = {
        startDate: request.body.startDate,
        endDate: request.body.endDate
    };
    
    bid.getBidsByDate(dates, (bids) => {
        if (!bids) {
            return err;
        } else {
            return response.json(bids);
        }
    });
});

// Get bid by id
router.get('/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    bid.getBidById(id, (bid) => {
        if (!bid) {
            return err;
        } else {
            return response.json(bid);
        }
    });
});

/********************************************************* Bid Material *************************************************************************/

// Get bid materials by id
router.get('/:id/bid-materials', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    bid.getBidMaterialsById(id, (bidMaterials) => {
        if (!bidMaterials) {
            return err;
        } else {
            return response.json(bidMaterials);
        }
    });
});

// Get bid materials cost
router.get('/:id/bid-materials/cost', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    bid.getCurrentBidMaterialsCost(id, (cost) => {
        if (!cost) {
            return err;
        } else {
            return response.json(cost);
        }
    });
});

// Create bid material
router.post('/new/bid-material', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newBidMaterial = {
        materialID: request.body.materialID,
        materialName: request.body.materialName,
        linearFeet: request.body.linearFeet,
        pricePerUnit: request.body.pricePerUnit,
        linearFeetCoverage: request.body.linearFeetCoverage
    };

    bid.createBidMaterial(newBidMaterial, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid material created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Create bid material by ID
router.post('/:id/new/bid-material', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    // const bidID = request.params.id;
    let newBidMaterial = {
        bidID: request.params.id,
        materialID: request.body.materialID,
        materialName: request.body.materialName,
        linearFeet: request.body.linearFeet,
        pricePerUnit: request.body.pricePerUnit,
        linearFeetCoverage: request.body.linearFeetCoverage
    };

    bid.createBidMaterialById(newBidMaterial, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid material created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete bid material
router.post('/remove/material', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let bidMaterial = {
        materialID: request.body.materialID,
        bidID: request.body.bidID
    };

    bid.deleteBidMaterial(bidMaterial, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid material deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update bid material
router.post('/change/material', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedBidMaterial = {
        bidID: request.body.bidID,
        materialID: request.body.materialID,
        linearFeet: request.body.linearFeet,
        pricePerUnit: request.body.pricePerUnit,
        linearFeetCoverage: request.body.linearFeetCoverage
    };
    if (updatedBidMaterial.bidID == null || updatedBidMaterial.bidID == undefined || updatedBidMaterial.bidID == "") {
        delete updatedBidMaterial.bidID;
    }
    if (updatedBidMaterial.materialID == null || updatedBidMaterial.materialID == undefined || updatedBidMaterial.materialID == "") {
        delete updatedBidMaterial.materialID;
    }
    if (updatedBidMaterial.linearFeet == null || updatedBidMaterial.linearFeet == undefined || updatedBidMaterial.linearFeet == "") {
        delete updatedBidMaterial.linearFeet;
    }
    if (updatedBidMaterial.pricePerUnit == null || updatedBidMaterial.pricePerUnit == undefined || updatedBidMaterial.pricePerUnit == "") {
        delete updatedBidMaterial.pricePerUnit;
    }
    if (updatedBidMaterial.linearFeetCoverage == null || updatedBidMaterial.linearFeetCoverage == undefined || updatedBidMaterial.linearFeetCoverage == "") {
        delete updatedBidMaterial.linearFeetCoverage;
    }

    bid.updateBidMaterial(updatedBidMaterial, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Bid material updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

/********************************************************* Bid Labor *************************************************************************/

// Create bid labor
router.post('/new/bid-labor', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newBidLabor = {
        roleID: request.body.roleID,
        roleName: request.body.roleName,
        roleWage: request.body.roleWage,
        laborHours: request.body.laborHours
    };

    if (newBidLabor.laborHours == null || newBidLabor.laborHours == undefined || newBidLabor.laborHours == "") {
        response.json({
            success: true,
            msg: 'Labor hours empty'
        });
    } else {
        bid.createBidLabor(newBidLabor, (message) => {
            if (message.message == "") {
                response.json({
                    success: true,
                    msg: 'Bid labor created'
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

// Create bid labor by ID
router.post('/:id/new/bid-labor', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newBidLabor = {
        bidID: request.params.id,
        roleID: request.body.roleID,
        roleName: request.body.roleName,
        roleWage: request.body.roleWage,
        laborHours: request.body.laborHours
    };
    // console.log(newBidLabor);

    bid.createBidLaborById(newBidLabor, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid labor created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete bid labor
router.post('/delete/bid-labor/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let laborID = request.params.id;

    bid.deleteBidLabor(laborID, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid labor deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Get bid labors by id
router.get('/:id/bid-labors', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    bid.getBidLaborsById(id, (bidLabors) => {
        if (!bidLabors) {
            return err;
        } else {
            return response.json(bidLabors);
        }
    });
});

// Update Bid Labor
router.post('/update/bid-labor', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedBidLabor = {
        laborID: request.body.laborID,
        roleWage: request.body.roleWage,
        laborHours: request.body.laborHours
    };
    if (updatedBidLabor.roleWage == null || updatedBidLabor.roleWage == undefined || updatedBidLabor.roleWage == "") {
        delete updatedBidLabor.roleWage;
    }
    if (updatedBidLabor.laborHours == null || updatedBidLabor.laborHours == undefined || updatedBidLabor.laborHours == "") {
        delete updatedBidLabor.laborHours;
    }

    bid.updateBidLabor(updatedBidLabor, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Bid labor updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

/********************************************************* Bid Equipment *************************************************************************/

// Create bid equipment
router.post('/new/bid-equipment', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newBidEquipment = {
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
    console.log(newBidEquipment);

    bid.createBidEquipment(newBidEquipment, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid equipment created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Create bid equipment by ID
router.post('/:id/new/bid-equipment', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newBidEquipment = {
        bidID: request.params.id,
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

    bid.createBidEquipmentById(newBidEquipment, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid equipment created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete bid equipment
router.post('/delete/bid-equipment/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let bidEquipmentID = request.params.id;

    bid.deleteBidEquipment(bidEquipmentID, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Bid equipment deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Get bid equipments by id
router.get('/:id/bid-equipments', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    bid.getBidEquipmentsById(id, (bidEquipments) => {
        if (!bidEquipments) {
            return err;
        } else {
            return response.json(bidEquipments);
        }
    });
});

// Update Bid Equipment
router.post('/update/bid-equipment', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedBidEquipment = {
        bidEquipmentID: request.body.bidEquipmentID,
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
    // console.log(updatedBidEquipment);
    // if (updatedBidEquipment.equipmentName == null || updatedBidEquipment.equipmentName == undefined || updatedBidEquipment.equipmentName == "") {
    //     delete updatedBidEquipment.equipmentName;
    // }
    // if (updatedBidEquipment.intervals == null || updatedBidEquipment.intervals == undefined || updatedBidEquipment.intervals == "") {
    //     delete updatedBidEquipment.intervals;
    // }
    // if (updatedBidEquipment.pricePerDay == null || updatedBidEquipment.pricePerDay == undefined || updatedBidEquipment.pricePerDay == "") {
    //     delete updatedBidEquipment.pricePerDay;
    // }
    // if (updatedBidEquipment.DaysSelected == null || updatedBidEquipment.DaysSelected == undefined || updatedBidEquipment.DaysSelected == "") {
    //     delete updatedBidEquipment.DaysSelected;
    // }
    // if (updatedBidEquipment.pricePer1Week == null || updatedBidEquipment.pricePer1Week == undefined || updatedBidEquipment.pricePer1Week == "") {
    //     delete updatedBidEquipment.pricePer1Week;
    // }
    // if (updatedBidEquipment.WeekSelected1 == null || updatedBidEquipment.WeekSelected1 == undefined || updatedBidEquipment.WeekSelected1 == "") {
    //     delete updatedBidEquipment.WeekSelected1;
    // }
    // if (updatedBidEquipment.pricePer2Week == null || updatedBidEquipment.pricePer2Week == undefined || updatedBidEquipment.pricePer2Week == "") {
    //     delete updatedBidEquipment.pricePer2Week;
    // }
    // if (updatedBidEquipment.WeekSelected2 == null || updatedBidEquipment.WeekSelected2 == undefined || updatedBidEquipment.WeekSelected2 == "") {
    //     delete updatedBidEquipment.WeekSelected2;
    // }
    // if (updatedBidEquipment.pricePer3Week == null || updatedBidEquipment.pricePer3Week == undefined || updatedBidEquipment.pricePer3Week == "") {
    //     delete updatedBidEquipment.pricePer3Week;
    // }
    // if (updatedBidEquipment.WeekSelected3 == null || updatedBidEquipment.WeekSelected3 == undefined || updatedBidEquipment.WeekSelected3 == "") {
    //     delete updatedBidEquipment.WeekSelected3;
    // }

    bid.updateBidEquipment(updatedBidEquipment, (message) => {
        if (message.warningCount == 0) {
            response.json({
                success: true,
                msg: 'Bid equipment updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

/********************************************************* Bid Files *************************************************************************/
// Upload bid file
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
        let newBidFile = {
            bidID: req.params.id,
            fileName: fileName
        };

        bid.uploadBidFile(newBidFile, (message) => {
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
    bid.getBidFilesById(id, (fileNames) => {
        if (!fileNames) {
            return err;
        } else {
            return res.json(fileNames);
        }
    });
});

// Delete bid file
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
            bid.deleteBidFile(id, (message) => {
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