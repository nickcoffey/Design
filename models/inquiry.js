const connection = require('../app');
const config = require('../config/database');

module.exports.getAllInquiries = function(callback){
    const queryString = 'SELECT * FROM Inquiry'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            throw err;
        }
    });
}

module.exports.getInquiryById = function(id, callback){
    const queryString = `SELECT * FROM Inquiry WHERE inquiryID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            throw error;
        }
    });
}