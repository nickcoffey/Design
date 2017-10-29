const connection = require('../app');
const config = require('../config/database');
const sqlString = require('sqlstring');

module.exports.getAllCustomers = function(callback){
    const queryString = 'SELECT * FROM Customer'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            return err;
        }
    });
}

module.exports.getCustomerById = function(id, callback){
    const queryString = `SELECT * FROM Customer WHERE customerID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createCustomer = function(newCustomer, callback){
    const queryString = sqlString.format(`INSERT INTO Customer SET ?`, [newCustomer]);
    //const queryString = `INSERT INTO Customer (customerName, email, address, phone) VALUES ("${newCustomer.customerName}", "${newCustomer.email}", "${newCustomer.address}", "${newCustomer.phone}")`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.deleteCustomer = function(id, callback){
    const queryString = `DELETE FROM Customer WHERE customerID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.updateCustomer = function(updatedCustomer, callback){
    const queryString = sqlString.format(`UPDATE Customer SET ? WHERE customerID = ?`, [updatedCustomer, updatedCustomer.customerID]);
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.getContactsByID = function(id, callback){
    const queryString = `SELECT * FROM Contact WHERE customerID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createContact = function(newContact, callback){
    const queryString = `INSERT INTO Contact (customerID, contactName, contactEmail, contactTitle, contactPhone) VALUES ("${newContact.customerID}", "${newContact.contactName}", "${newContact.contactEmail}", "${newContact.contactTitle}", "${newContact.contactPhone}")`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.deleteContact = function(id, callback){
    const queryString = `DELETE FROM Contact WHERE contactID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.updateContact = function(updatedContact, callback){
    const queryString = sqlString.format(`UPDATE Contact SET ? WHERE contactID = ?`, [updatedContact, updatedContact.contactID]);
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}