const express = require('express');
const router = express.Router();
const customer = require('../models/customer');

router.get('/customers', (request, response, next) => {
    console.log('Router working');
    /*customer.getAllBids((customers) => {
        if(!customers){
            throw err;
        } else{
            response.json();
        }
    });*/
});

module.exports = router;