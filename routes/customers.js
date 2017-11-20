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
        address: request.body.address,
        city: request.body.city,
        state: request.body.state,
        zip: request.body.zip
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

// Update customer
router.post('/update', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let updatedCustomer = {
        customerID: request.body.customerID,
        customerName: request.body.name,
        address: request.body.address,
        city: request.body.city,
        state: request.body.state,
        zip: request.body.zip
    }

    if(updatedCustomer.name == null || updatedCustomer.name == undefined || updatedCustomer.name == ""){
        delete updatedCustomer.name;
    }
    if(updatedCustomer.address == null || updatedCustomer.address == undefined || updatedCustomer.address == ""){
        delete updatedCustomer.address;
    }
    if(updatedCustomer.city == null || updatedCustomer.city == undefined || updatedCustomer.city == ""){
        delete updatedCustomer.city;
    }
    if(updatedCustomer.state == null || updatedCustomer.state == undefined || updatedCustomer.state == ""){
        delete updatedCustomer.state;
    }
    if(updatedCustomer.zip == null || updatedCustomer.zip == undefined || updatedCustomer.zip == ""){
        delete updatedCustomer.zip;
    }

    customer.updateCustomer(updatedCustomer, (message) => {
        if(message.warningCount == 0){
            response.json({
                success: true,
                msg: 'Customer updated'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Get contacts by id
router.get('/:id/contacts', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    const id = request.params.id;
    customer.getContactsByID(id, (contacts) => {
        if (!contacts) {
            return err;
        } else {
            return response.json(contacts);
        }
    });
});

// Create contact
router.post('/:id/new/contact', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let newContact = {
        customerID: request.params.id,
        contactTitle: request.body.contactTitle,
        contactName: request.body.contactName,
        contactPhone: request.body.contactPhone,
        contactEmail: request.body.contactEmail
    };  

    customer.createContact(newContact, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Contact created'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Delete contact
router.post('/delete/contact/:id', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const id = request.params.id;

    customer.deleteContact(id, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'Contact Deleted'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Update contact
router.post('/update/contact', passport.authenticate('jwt', { session: false }), (request, response, next) => {
    let updatedContact = {
        contactID: request.body.contactID,
        contactTitle: request.body.contactTitle,
        contactName: request.body.contactName,
        contactPhone: request.body.contactPhone,
        contactEmail: request.body.contactEmail
    }

    if (updatedContact.contactTitle == null || updatedContact.contactTitle == undefined || updatedContact.contactTitle == "") {
        delete updatedContact.contactTitle;
    }
    if (updatedContact.contactName == null || updatedContact.contactName == undefined || updatedContact.contactName == "") {
        delete updatedContact.contactName;
    }
    if (updatedContact.contactPhone == null || updatedContact.contactPhone == undefined || updatedContact.contactPhone == "") {
        delete updatedContact.contactPhone;
    }
    if (updatedContact.contactEmail == null || updatedContact.contactEmail == undefined || updatedContact.contactEmail == "") {
        delete updatedContact.contactEmail;
    }

    customer.updateContact(updatedContact, (message) => {
        if (message.message.includes("Rows matched: 1  Changed: 1  Warnings: 0")) {
            response.json({
                success: true,
                msg: 'Contact updated'
            });
        } else {
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

module.exports = router;