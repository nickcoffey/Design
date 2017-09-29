const express = require('express');
const router = express.Router();
const customer = require('../models/customer');
const config = require('../config/database');

// Get all customers
router.get('/all', (request, response, next) => {
    customer.getAllCustomers((customers) => {
        if(!customers){
            throw err;
        } else{
            response.json();
        }
    });
});

module.exports = router;