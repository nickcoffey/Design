const connection = require('../app');
const config = require('../config/database');

module.exports.getAllInquiries = function(callback){
    const queryString = 'SELECT * FROM Inquiry'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            return err;
        }
    });
}

module.exports.getInquiryById = function(id, callback){
    const queryString = `SELECT * FROM Inquiry WHERE inquiryID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createInquiry = function(newInquiry, callback){
    const queryString = `INSERT INTO Inquiry (customerID, description, inquiryStatus, receivedDate) VALUES ((SELECT customerID FROM Customer WHERE customerID=${newInquiry.customerID}), "${newInquiry.description}", "PENDING", "${newInquiry.receivedDate}")`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.updateInquiryStatus = function(updatedInquiry, callback){
    const queryString = `UPDATE Inquiry SET inquiryStatus = "${updatedInquiry.inquiryStatus}", endDate=NOW() WHERE inquiryID=${updatedInquiry.inquiryID}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}