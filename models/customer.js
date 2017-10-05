const connection = require('../app');
const config = require('../config/database');

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
    const queryString = `INSERT INTO Customer (customerName, email, address, phone) VALUES ("${newCustomer.customerName}", "${newCustomer.email}", "${newCustomer.address}", "${newCustomer.phone}")`;
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