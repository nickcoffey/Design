const express = require('express');
const router = express.Router();
const labor = require('../models/labor');
const config = require('../config/database');
const passport = require('passport');

// Get all labors
router.get('/all', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    labor.getAllLabors((labors) => {
        if (!labors) {
            return err;
        } else {
            return response.json({ labors: labors });
        }
    });
});

// Create labor
router.post('/new', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let newLabor = {
        roleName: request.body.roleName,
        roleWage: request.body.roleWage
    };

    labor.createLabor(newLabor, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Labor created'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete labor
router.post('/delete/:id', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;

    labor.deleteLabor(id, (message) => {
        if (message.message == "") {
            response.json({
                success: true,
                msg: 'Labor Deleted'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update labor
router.post('/update', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedLabor = {
        roleID: request.body.roleID,
        roleName: request.body.roleName,
        roleWage: request.body.roleWage
    };

    if (updatedLabor.roleName == null || updatedLabor.roleName == undefined || updatedLabor.roleName == "") {
        delete updatedLabor.roleName;
    }
    if (updatedLabor.roleWage == null || updatedLabor.roleWage == undefined || updatedLabor.roleWage == "") {
        delete updatedLabor.roleWage;
    }

    labor.updateLabor(updatedLabor, (message) => {
        if (message.message.includes("Warnings: 0")) {
            response.json({
                success: true,
                msg: 'Labor Updated'
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