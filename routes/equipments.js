const express = require('express');
const router = express.Router();
const equipment = require('../models/equipment');
const config = require('../config/database');
const passport = require('passport');

// Get all equipments
router.get('/all', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    equipment.getAllEquipments((equipments) => {
        if (!equipments) {
            return err;
        } else {
            return response.json(equipments);
        }
    });
});

// Create equipment
router.post('/new', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newEquipment = {
        equipmentName: request.body.equipmentName,
        pricePerDay: request.body.pricePerDay,
        pricePer1Week: request.body.pricePer1Week,
        pricePer2Week: request.body.pricePer2Week,
        pricePer3Week: request.body.pricePer3Week
    };

    equipment.createEquipment(newEquipment, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Equipment Created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete equipment
router.post('/delete/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;

    equipment.deleteEquipment(id, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Equipment Deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update equipment
router.post('/update', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedEquipment = {
        equipmentID: request.body.equipmentID,
        equipmentName: request.body.equipmentName,
        pricePerDay: request.body.pricePerDay,
        pricePer1Week: request.body.pricePer1Week,
        pricePer2Week: request.body.pricePer2Week,
        pricePer3Week: request.body.pricePer3Week
    };

    if (updatedEquipment.equipmentName == null || updatedEquipment.equipmentName == undefined || updatedEquipment.equipmentName == "") {
        delete updatedEquipment.equipmentName;
    }
    if (updatedEquipment.pricePerDay == null || updatedEquipment.pricePerDay == undefined || updatedEquipment.pricePerDay == "") {
        delete updatedEquipment.pricePerDay;
    }
    if (updatedEquipment.pricePer1Week == null || updatedEquipment.pricePer1Week == undefined || updatedEquipment.pricePer1Week == "") {
        delete updatedEquipment.pricePer1Week;
    }
    if (updatedEquipment.pricePer2Week == null || updatedEquipment.pricePer2Week == undefined || updatedEquipment.pricePer2Week == "") {
        delete updatedEquipment.pricePer2Week;
    }
    if (updatedEquipment.pricePer3Week == null || updatedEquipment.pricePer3Week == undefined || updatedEquipment.pricePer3Week == "") {
        delete updatedEquipment.pricePer3Week;
    }

    equipment.updateEquipment(updatedEquipment, (message) => {
        if (message.message.includes("Warnings: 0")) {
            response.json({
                success: true,
                msg: 'Equipment Updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

module.exports = router;