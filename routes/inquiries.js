const express = require('express');
const router = express.Router();
const inquiry = require('../models/inquiry');
const config = require('../config/database');
const passport = require('passport');

// Get all inquiries
router.get('/all', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    inquiry.getAllInquiries((inquiries) => {
        const pendingInquiries = [];
        const declinedInquiries = [];
        const acceptedInquiries = [];

        if(!inquiries){
            throw err;
        } else{
            inquiries.forEach(inquiry => {
                if(inquiry.inquiryStatus == "PENDING"){
                    pendingInquiries.push(inquiry);
                } else if(inquiry.inquiryStatus == "DECLINED"){
                    declinedInquiries.push(inquiry);
                } else if(inquiry.inquiryStatus == "ACCEPTED"){
                    acceptedInquiries.push(inquiry);
                } 
            });
            //console.log({inquiries: inquiries});
            return response.json({
                pendingInquiries: pendingInquiries,
                declinedInquiries: declinedInquiries,
                acceptedInquiries: acceptedInquiries
            });
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

// Create inquiry
router.post('/new', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let newInquiry = {
        customerID: request.body.customerID,
        description: request.body.description,
        receivedDate: request.body.receivedDate
    };
    
    inquiry.createInquiry(newInquiry, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Inquiry created'
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