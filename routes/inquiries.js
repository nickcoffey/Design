const express = require('express');
const router = express.Router();
const inquiry = require('../models/inquiry');
const config = require('../config/database');
const passport = require('passport');

// Get all inquiries
router.get('/all', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    inquiry.getAllInquiries((inquiries) => {
        if(!inquiries){
            throw err;
        } else{
            return response.json({inquiries: inquiries});
        }
    });
});

// Get inquiry by id
router.get('/:id', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;
    inquiry.getInquiryById(id, (inquiry) => {
        if(!inquiry){
            throw err;
        } else{
            return response.json(inquiry);
        }
    });
});

module.exports = router;