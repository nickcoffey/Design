const connection = require('../app');
const config = require('../config/database');

module.exports.getAllCustomers = function(callback){
    const queryString = 'SELECT * FROM Customer'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            throw err;
        }
    });
}

module.exports.getCustomerById = function(id, callback){
    const queryString = `SELECT * FROM Customer WHERE customerID=${id}`;
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            throw err;
        }
    });
}