const connection = require('../app');
const config = require('../config/database');

module.exports.getAllBids = function(callback){
    const queryString = 'SELECT * FROM Bid'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            return err;
        }
    });
}

module.exports.getBidById = function(id, callback){
    const queryString = `SELECT * FROM Bid WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.getBidMaterialsById = function(id, callback){
    const queryString = `SELECT * FROM BidMaterial WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createBid = function(newBid, callback){
    const queryString = `INSERT INTO Bid (inquiryID, bidStatus, bidLabor, bidPrice, createdDate) VALUES ((SELECT inquiryID FROM Inquiry WHERE inquiryID=${newBid.inquiryID}), "PENDING", ${newBid.bidLabor}, ${newBid.bidPrice}, "${newBid.createdDate}")`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createBidMaterial = function(newBidMaterial, callback){
    const queryString = `INSERT INTO BidMaterial (materialID, bidID, quantity, perUnitCost) VALUES ((SELECT materialID FROM Material WHERE materialID=${newBidMaterial.materialID}), (SELECT MAX(bidID) AS bidID FROM Bid), ${newBidMaterial.quantity}, ${newBidMaterial.perUnitCost})`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.deleteBidMaterial = function(bidMaterial, callback){
    const queryString = `DELETE FROM BidMaterial WHERE (materialID=${bidMaterial.materialID} AND bidID=${bidMaterial.bidID})`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.updateBidStatus = function(updatedBid, callback){
    const queryString = `UPDATE Bid SET bidStatus = "${updatedBid.bidStatus}", endDate=NOW() WHERE bidID=${updatedBid.bidID}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.deleteBid = function(id, callback){
    const queryString = `DELETE FROM Bid WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}