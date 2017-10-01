const connection = require('../app');
const config = require('../config/database');

module.exports.getAllJobs = function(callback){
    const queryString = 'SELECT * FROM Job'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            throw err;
        }
    });
}

module.exports.getJobById = function(id, callback){
    const queryString = `SELECT * FROM Job WHERE jobID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            throw error;
        }
    });
}

module.exports.getCurrentJobs = function(callback){
    const queryString = `SELECT * FROM currentJobs`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            throw error;
        }
    });
}