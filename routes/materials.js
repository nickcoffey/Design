const express = require('express');
const router = express.Router();
const material = require('../models/material');
const config = require('../config/database');
const passport = require('passport');

// Get all materials
router.get('/all', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    material.getAllMaterials((materials) => {
        if (!materials) {
            return err;
        } else {
            return response.json({ materials: materials });
        }
    });
});

// Create material
router.post('/new', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newMaterial = {
        materialName: request.body.materialName,
        pricePerUnit: request.body.pricePerUnit,
        linearFeetCoverage: request.body.linearFeetCoverage
    };

    material.createMaterial(newMaterial, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Material created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete material
router.post('/delete/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;

    material.deleteMaterial(id, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Material Deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update material
router.post('/update', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedMaterial = {
        materialID: request.body.materialID,
        materialName: request.body.materialName,
        pricePerUnit: request.body.pricePerUnit,
        linearFeetCoverage: request.body.linearFeetCoverage
    };

    if (updatedMaterial.materialID == null || updatedMaterial.materialID == undefined || updatedMaterial.materialID == "") {
        delete updatedMaterial.materialID;
    }
    if (updatedMaterial.materialName == null || updatedMaterial.materialName == undefined || updatedMaterial.materialName == "") {
        delete updatedMaterial.materialName;
    }
    if (updatedMaterial.pricePerUnit == null || updatedMaterial.pricePerUnit == undefined || updatedMaterial.pricePerUnit == "") {
        delete updatedMaterial.pricePerUnit;
    }
    if (updatedMaterial.linearFeetCoverage == null || updatedMaterial.linearFeetCoverage == undefined || updatedMaterial.linearFeetCoverage == "") {
        delete updatedMaterial.linearFeetCoverage;
    }

    material.updateMaterial(updatedMaterial, (message) => {
        if (message.message.includes("Warnings: 0")) {
            response.json({
                success: true,
                msg: 'Material Updated'
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