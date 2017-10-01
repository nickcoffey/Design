const express = require('express');
const router = express.Router();
const bid = require('../models/bid');
const config = require('../config/database');
const passport = require('passport');

// Get all bids
router.get('/all', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    bid.getAllBids((bids) => {
        if(!bids){
            throw err;
        } else{
            return response.json({bids: bids});
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

module.exports = router;