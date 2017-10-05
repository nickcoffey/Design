const express = require('express');
const router = express.Router();
const customer = require('../models/customer');
const config = require('../config/database');
const passport = require('passport');

// Get all customers
router.get('/all', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    customer.getAllCustomers((customers) => {
        if(!customers){
            return err;
        } else{
            return response.json({customers: customers});
        }
    });
});

// Get customer by id
router.get('/:id', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;
    customer.getCustomerById(id, (customer) => {
        if(!customer){
            return err;
        } else{
            return response.json(customer);
        }
    });
});

// Create customer
router.post('/new', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let newCustomer = {
        customerName: request.body.customerName,
        email: request.body.email,
        address: request.body.address,
        phone: request.body.phone
    };  

    customer.createCustomer(newCustomer, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Customer created'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete customer
router.post('/delete/:id', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;

    customer.deleteCustomer(id, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Customer Deleted'
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