const connection = require('../app');
const config = require('../config/database');

module.exports.getAllBids = function(callback){
    const queryString = 'SELECT * FROM Bid'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            throw err;
        }
    });
}

module.exports.getBidById = function(id, callback){
    const queryString = `SELECT * FROM Bid WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            throw error;
        }
    });
}