const connection = require('../app');
const config = require('../config/database');
const sqlString = require('sqlstring');

module.exports.getAllMaterials = function (callback) {
    const queryString = 'SELECT * FROM Material';
    connection.query(queryString, (err, rows, fields) => {
        if (!err) {
            callback(rows);
        } else {
            return err;
        }
    });
}

module.exports.createMaterial = function (newMaterial, callback) {
    const queryString = `INSERT INTO Material (materialName) VALUES ("${newMaterial.materialName}")`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteMaterial = function (id, callback) {
    const queryString = `DELETE FROM Material WHERE materialID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateMaterial = function (updatedMaterial, callback) {
    const queryString = sqlString.format(`UPDATE Material SET ? WHERE materialID = ?`, [updatedMaterial, updatedMaterial.materialID]);
    //console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}