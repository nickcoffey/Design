const connection = require('../app');
const config = require('../config/database');
const sqlString = require('sqlstring');

module.exports.getAllInquiries = function(callback){
    const queryString = 'SELECT * FROM detailedInquiries'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            return err;
        }
    });
}

module.exports.getInquiryById = function(id, callback){
    const queryString = `SELECT * FROM detailedInquiries WHERE inquiryID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createInquiry = function(newInquiry, callback){
    const queryString = `INSERT INTO Inquiry (customerID, description, inquiryStatus, receivedDate) VALUES ((SELECT customerID FROM Customer WHERE customerID=${newInquiry.customerID}), "${newInquiry.description}", "PENDING", NOW())`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.updateInquiryStatus = function(updatedInquiry, callback){
    let queryString = null;
    if(updatedInquiry.removeEndDate == true){
        queryString = `UPDATE Inquiry SET inquiryStatus = "${updatedInquiry.inquiryStatus}", endDate=null WHERE inquiryID=${updatedInquiry.inquiryID}`;
    } else if(updatedInquiry.removeEndDate == false){
        queryString = `UPDATE Inquiry SET inquiryStatus = "${updatedInquiry.inquiryStatus}", endDate=NOW() WHERE inquiryID=${updatedInquiry.inquiryID}`;
    }
    
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.deleteInquiry = function(id, callback){
    const queryString = `DELETE FROM Inquiry WHERE inquiryID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.updateInquiry = function(updatedInquiry, callback){
    const queryString = sqlString.format(`UPDATE Inquiry SET ? WHERE inquiryID = ?`, [updatedInquiry, updatedInquiry.inquiryID]);
    console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}