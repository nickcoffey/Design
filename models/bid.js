const connection = require('../app');
const config = require('../config/database');
const sqlString = require('sqlstring');

module.exports.getAllBids = function(callback){
    const queryString = 'SELECT * FROM detailedBids'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            return err;
        }
    });
}

module.exports.getBidById = function(id, callback){
    const queryString = `SELECT * FROM detailedBids WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.getBidMaterialsById = function(id, callback){
    const queryString = `SELECT * FROM Material JOIN BidMaterial ON Material.materialID = BidMaterial.materialID WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.getCurrentBidMaterialsCost = function(id, callback){
    const queryString = `SELECT SUM(BidMaterial.quantity*BidMaterial.perUnitCost) AS bidMaterialCost FROM BidMaterial JOIN Bid ON BidMaterial.bidID = Bid.bidID JOIN Job ON Bid.bidID = Job.bidID WHERE Job.jobID = ${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createBid = function(newBid, callback){
    const queryString = `INSERT INTO Bid (inquiryID, bidStatus, bidLabor, bidPrice, createdDate) VALUES ((SELECT inquiryID FROM Inquiry WHERE inquiryID=${newBid.inquiryID}), "PENDING", ${newBid.bidLabor}, ${newBid.bidPrice}, NOW())`;
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

module.exports.createBidMaterialById = function(bidID, newBidMaterial, callback){
    const queryString = `INSERT INTO BidMaterial (materialID, bidID, quantity, perUnitCost) VALUES ((SELECT materialID FROM Material WHERE materialID=${newBidMaterial.materialID}), ${bidID}, ${newBidMaterial.quantity}, ${newBidMaterial.perUnitCost})`;
    console.log(queryString);
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

module.exports.updateBid = function(updatedBid, callback){
    const queryString = sqlString.format(`UPDATE Bid SET ? WHERE bidID = ?`, [updatedBid, updatedBid.bidID]);
    console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}