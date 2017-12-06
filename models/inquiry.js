const connection = require('../app');
const config = require('../config/database');
const sqlString = require('sqlstring');

module.exports.getAllInquiries = function (callback) {
    const queryString = 'SELECT * FROM detailedInquiries';
    connection.query(queryString, (err, rows, fields) => {
        if (!err) {
            callback(rows);
        } else {
            return err;
        }
    });
}

module.exports.getInquiriesByCustomer = function (customerID, callback) {
    const queryString = `SELECT * FROM Inquiry WHERE customerID = ${customerID}`;
    connection.query(queryString, (err, rows, fields) => {
        if (!err) {
            callback(rows);
        } else {
            return err;
        }
    });
}

module.exports.getInquiriesByDate = function (dates, callback) {
    const queryString = `SELECT inquiryID, inquiryStatus, receivedDate, customerID, customerName FROM detailedInquiries WHERE receivedDate BETWEEN '${dates.startDate}' AND '${dates.endDate}'`;
    connection.query(queryString, (err, rows, fields) => {
        if (!err) {
            callback(rows);
        } else {
            return err;
        }
    });
}

module.exports.getInquiryById = function (id, callback) {
    const queryString = `SELECT * FROM detailedInquiries WHERE inquiryID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.createInquiry = function (newInquiry, callback) {
    const queryString = sqlString.format(`INSERT INTO Inquiry SET ?, inquiryStatus = "PENDING", receivedDate = NOW()`, [newInquiry]);
    console.log(queryString);
    // const queryString = `INSERT INTO Inquiry (customerID, description, inquiryStatus, receivedDate) VALUES ((SELECT customerID FROM Customer WHERE customerID=${newInquiry.customerID}), "${newInquiry.description}", "PENDING", NOW())`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateInquiryStatus = function (updatedInquiry, callback) {
    let queryString = null;
    if (updatedInquiry.removeEndDate == true) {
        queryString = `UPDATE Inquiry SET inquiryStatus = "${updatedInquiry.inquiryStatus}", endDate=null WHERE inquiryID=${updatedInquiry.inquiryID}`;
    } else if (updatedInquiry.removeEndDate == false) {
        queryString = `UPDATE Inquiry SET inquiryStatus = "${updatedInquiry.inquiryStatus}", endDate=NOW() WHERE inquiryID=${updatedInquiry.inquiryID}`;
    }

    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteInquiry = function (id, callback) {
    const queryString = `DELETE FROM Inquiry WHERE inquiryID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateInquiry = function (updatedInquiry, callback) {
    const queryString = sqlString.format(`UPDATE Inquiry SET ? WHERE inquiryID = ?`, [updatedInquiry, updatedInquiry.inquiryID]);
    // console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

/********************************************************* Inquiry Files *************************************************************************/
module.exports.uploadInquiryFile = function (newInquiryFile, callback) {
    const queryString = sqlString.format(`INSERT INTO InquiryFiles(fileName, inquiryID) VALUES(?, (SELECT Inquiry.inquiryID FROM Inquiry WHERE Inquiry.inquiryID = ?))`, [newInquiryFile.fileName, newInquiryFile.inquiryID]);
    // console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getInquiryFilesById = function (inquiryID, callback) {
    const queryString = sqlString.format(`SELECT * FROM InquiryFiles WHERE inquiryID = ?`, [inquiryID]);
    // console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteInquiryFile = function (fileID, callback) {
    const queryString = sqlString.format(`DELETE FROM InquiryFiles WHERE fileID = ?`, [fileID]);
    // console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}