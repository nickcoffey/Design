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
            return response.json({customers: customers});
        }
    });
});

// Get customer by id
router.get('/:id', (request, response, next) => {
    const id = request.params.id;
    customer.getCustomerById(id, (customer) => {
        if(!customer){
            throw err;
        } else{
            return response.json(customer);
        }
    });
});

module.exports = router;