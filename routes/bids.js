const express = require('express');
const router = express.Router();
const bid = require('../models/bid');
const config = require('../config/database');
const passport = require('passport');

// Get all bids
router.get('/all', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    bid.getAllBids((bids) => {
        const pendingBids = [];
        const declinedBids = [];
        const acceptedBids = [];

        if(!bids){
            throw err;
        } else{
            bids.forEach(bid => {
                if(bid.bidStatus == "PENDING"){
                    pendingBids.push(bid);
                } else if(bid.bidStatus == "DECLINED"){
                    declinedBids.push(bid);
                } else if(bid.bidStatus == "ACCEPTED"){
                    acceptedBids.push(bid);
                } 
            });
            return response.json({
                pendingBids: pendingBids,
                declinedBids: declinedBids,
                acceptedBids: acceptedBids
            });
        }
    });
});

// Get bid by id
router.get('/:id', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;
    bid.getBidById(id, (bid) => {
        if(!bid){
            throw err;
        } else{
            return response.json(bid);
        }
    });
});

// Create bid
router.post('/new', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let newBid = {
        inquiryID: request.body.inquiryID,
        bidLabor: request.body.bidLabor,
        bidPrice: request.body.bidPrice,
        createdDate: request.body.createdDate
    };

    bid.createBid(newBid, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Bid created'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Create bid material
router.post('/new/bid-material', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let newBidMaterial = {
        materialID: request.body.materialID,
        quantity: request.body.quantity,
        perUnitCost: request.body.perUnitCost
    };
    
    bid.createBidMaterial(newBidMaterial, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Bid material created'
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