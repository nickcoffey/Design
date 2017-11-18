const connection = require('../app');
const config = require('../config/database');
const sqlString = require('sqlstring');

module.exports.getAllLabors = function (callback) {
    const queryString = 'SELECT * FROM LaborRole';
    connection.query(queryString, (err, rows, fields) => {
        if (!err) {
            callback(rows);
        } else {
            return err;
        }
    });
}

module.exports.createLabor = function (newLabor, callback) {
    const queryString = sqlString.format(`INSERT INTO LaborRole SET ?`, newLabor);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteLabor = function (id, callback) {
    const queryString = `DELETE FROM LaborRole WHERE roleID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateLabor = function (updatedLabor, callback) {
    const queryString = sqlString.format(`UPDATE LaborRole SET ? WHERE roleID = ?`, [updatedLabor, updatedLabor.roleID]);
    //console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}