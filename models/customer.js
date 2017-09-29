const connection = require('../app');
const config = require('../config/database');

module.exports.getAllCustomers = function(callback){
    connection.query('SELECT * FROM Customer', (err, rows, fields) => {
        if(!err){
            console.log(rows);
            callback(rows);
        } else{
            throw err;
        }
    });
}