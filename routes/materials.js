const express = require('express');
const router = express.Router();
const material = require('../models/material');
const config = require('../config/database');
const passport = require('passport');

// Get all materials
router.get('/all', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    material.getAllMaterials((materials) => {
        if(!materials){
            return err;
        } else{
            return response.json({materials: materials});
        }
    });
});

// Create material
router.post('/new', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let newMaterial = {
        materialName: request.body.materialName
    };  

    material.createMaterial(newMaterial, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Material created'
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