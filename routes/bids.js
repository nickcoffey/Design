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
            return err;
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
            return err;
        } else{
            return response.json(bid);
        }
    });
});

// Get bid materials by id
router.get('/:id/bid-materials', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;
    bid.getBidMaterialsById(id, (bidMaterials) => {
        if(!bidMaterials){
            return err;
        } else{
            return response.json(bidMaterials);
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

// Delete bid material
router.post('/delete/bid-material', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let bidMaterial = {
        materialID: request.body.materialID,
        bidID: request.body.bidID
    };

    bid.deleteBidMaterial(bidMaterial, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Bid material deleted'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update bid status
router.post('/update-status', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let updatedBid = {
        bidID: request.body.bidID,
        bidStatus: request.body.bidStatus
    };

    bid.updateBidStatus(updatedBid, (message) => {
        if(message.message.includes("Rows matched: 1  Changed: 1  Warnings: 0")){
            response.json({
                success: true,
                msg: 'Bid status updated'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete bid
router.post('/delete/:id', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;

    bid.deleteBid(id, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Bid Deleted'
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