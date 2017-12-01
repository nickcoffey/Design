const connection = require('../app');
const config = require('../config/database');
const sqlString = require('sqlstring');

module.exports.getAllEquipments = function (callback) {
    const queryString = 'SELECT * FROM Equipment';
    connection.query(queryString, (err, rows, fields) => {
        if (!err) {
            callback(rows);
        } else {
            return err;
        }
    });
}

module.exports.createEquipment = function (newEquipment, callback) {
    const queryString = sqlString.format(`INSERT INTO Equipment SET ?`, newEquipment);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteEquipment = function (id, callback) {
    const queryString = `DELETE FROM Equipment WHERE equipmentID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateEquipment = function (updatedEquipment, callback) {
    const queryString = sqlString.format(`UPDATE Equipment SET ? WHERE equipmentID = ?`, [updatedEquipment, updatedEquipment.equipmentID]);
    //console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}