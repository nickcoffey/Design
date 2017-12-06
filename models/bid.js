const connection = require('../app');
const config = require('../config/database');
const sqlString = require('sqlstring');

/************************************************************* Bid ***************************************************************************/

module.exports.getAllBids = function (callback) {
    const queryString = 'SELECT * FROM detailedBids';
    connection.query(queryString, (err, rows, fields) => {
        if (!err) {
            callback(rows);
        } else {
            return err;
        }
    });
}

module.exports.getBidById = function (id, callback) {
    const queryString = `SELECT * FROM detailedBids WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getBidsByDate = function (dates, callback) {
    const queryString = `SELECT bidID, bidStatus, createdDate, customerID, customerName FROM detailedBids WHERE createdDate BETWEEN '${dates.startDate}' AND '${dates.endDate}'`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateBid = function (updatedBid, callback) {
    const queryString = sqlString.format(`UPDATE Bid SET ? WHERE bidID = ?`, [updatedBid, updatedBid.bidID]);
    console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteBid = function (id, callback) {
    const queryString = `DELETE FROM Bid WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateBidStatus = function (updatedBid, callback) {
    const queryString = `UPDATE Bid SET bidStatus = "${updatedBid.bidStatus}", endDate=NOW() WHERE bidID=${updatedBid.bidID}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.createBid = function (newBid, callback) {
    const queryString = sqlString.format(`INSERT INTO Bid SET ?, bidStatus="PENDING", createdDate=NOW()`, newBid);
    // const queryString = `INSERT INTO Bid (inquiryID, bidStatus, bidLabor, bidPrice, createdDate) VALUES (${newBid.inquiryID}, "PENDING", ${newBid.bidLabor}, ${newBid.bidPrice}, NOW())`;
    // console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

/********************************************************* Bid Material *************************************************************************/

module.exports.getBidMaterialsById = function (id, callback) {
    const queryString = sqlString.format(`SELECT * FROM BidMaterial WHERE bidID = ?`, id);
    // const queryString = `SELECT * FROM Material JOIN BidMaterial ON Material.materialID = BidMaterial.materialID WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getCurrentBidMaterialsCost = function (id, callback) {
    const queryString = `SELECT SUM(BidMaterial.quantity*BidMaterial.perUnitCost) AS bidMaterialCost FROM BidMaterial JOIN Bid ON BidMaterial.bidID = Bid.bidID JOIN Job ON Bid.bidID = Job.bidID WHERE Job.jobID = ${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.createBidMaterial = function (newBidMaterial, callback) {
    const queryString = sqlString.format(`INSERT INTO BidMaterial SET ?, bidID=(SELECT MAX(bidID) FROM Bid)`, newBidMaterial);
    // const queryString = `INSERT INTO BidMaterial (materialID, bidID, materialName, linearFeet, pricePerLinearFoot) VALUES (${newBidMaterial.materialID}, (SELECT MAX(bidID) AS bidID FROM Bid), ${newBidMaterial.materialName}, ${newBidMaterial.linearFeet}, ${newBidMaterial.pricePerLinearFoot})`;
    // console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.createBidMaterialById = function (newBidMaterial, callback) {
    const queryString = sqlString.format(`INSERT INTO BidMaterial SET ?`, newBidMaterial);
    // const queryString = `INSERT INTO BidMaterial (materialID, bidID, quantity, perUnitCost) VALUES ((SELECT materialID FROM Material WHERE materialID=${newBidMaterial.materialID}), ${bidID}, ${newBidMaterial.quantity}, ${newBidMaterial.perUnitCost})`;
    console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteBidMaterial = function (bidMaterial, callback) {
    const queryString = `DELETE FROM BidMaterial WHERE (materialID=${bidMaterial.materialID} AND bidID=${bidMaterial.bidID})`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateBidMaterial = function (updatedBidMaterial, callback) {
    const queryString = sqlString.format(`UPDATE BidMaterial SET ? WHERE bidID = ? AND materialID = ?`, [updatedBidMaterial, updatedBidMaterial.bidID, updatedBidMaterial.materialID]);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

/********************************************************* Bid Labor *************************************************************************/

module.exports.createBidLabor = function (newBidLabor, callback) {
    const queryString = sqlString.format(`INSERT INTO BidLabor SET ?, bidID=(SELECT MAX(bidID) FROM Bid)`, newBidLabor);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.createBidLaborById = function (newBidLabor, callback) {
    const queryString = sqlString.format(`INSERT INTO BidLabor SET ?`, [newBidLabor]);
    // const queryString = `INSERT INTO BidMaterial (materialID, bidID, quantity, perUnitCost) VALUES ((SELECT materialID FROM Material WHERE materialID=${newBidMaterial.materialID}), ${bidID}, ${newBidMaterial.quantity}, ${newBidMaterial.perUnitCost})`;
    console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteBidLabor = function (id, callback) {
    const queryString = `DELETE FROM BidLabor WHERE laborID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getBidLaborsById = function (id, callback) {
    const queryString = `SELECT * FROM BidLabor WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateBidLabor = function (updatedBidLabor, callback) {
    const queryString = sqlString.format(`UPDATE BidLabor SET ? WHERE laborID = ?`, [updatedBidLabor, updatedBidLabor.laborID]);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

/********************************************************* Bid Equipment *************************************************************************/

module.exports.createBidEquipment = function (newBidEquipment, callback) {
    const queryString = sqlString.format(`INSERT INTO BidEquipment SET ?, bidID=(SELECT MAX(bidID) FROM Bid)`, newBidEquipment);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.createBidEquipmentById = function (newBidEquipment, callback) {
    const queryString = sqlString.format(`INSERT INTO BidEquipment SET ?`, [newBidEquipment]);
    // const queryString = `INSERT INTO BidMaterial (materialID, bidID, quantity, perUnitCost) VALUES ((SELECT materialID FROM Material WHERE materialID=${newBidMaterial.materialID}), ${bidID}, ${newBidMaterial.quantity}, ${newBidMaterial.perUnitCost})`;
    console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteBidEquipment = function (id, callback) {
    const queryString = `DELETE FROM BidEquipment WHERE bidEquipmentID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getBidEquipmentsById = function (id, callback) {
    const queryString = `SELECT * FROM BidEquipment WHERE bidID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateBidEquipment = function (updatedBidEquipment, callback) {
    const queryString = sqlString.format(`UPDATE BidEquipment SET ? WHERE bidEquipmentID = ?`, [updatedBidEquipment, updatedBidEquipment.bidEquipmentID]);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

/********************************************************* Bid Files *************************************************************************/
module.exports.uploadBidFile = function (newBidFile, callback) {
    const queryString = sqlString.format(`INSERT INTO BidFiles(fileName, bidID) VALUES(?, (SELECT Bid.bidID FROM Bid WHERE Bid.bidID = ?))`, [newBidFile.fileName, newBidFile.bidID]);
    // console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getBidFilesById = function (bidID, callback) {
    const queryString = sqlString.format(`SELECT * FROM BidFiles WHERE bidID = ?`, [bidID]);
    // console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteBidFile = function (fileID, callback) {
    const queryString = sqlString.format(`DELETE FROM BidFiles WHERE fileID = ?`, [fileID]);
    // console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}