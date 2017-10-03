const connection = require('../app');
const config = require('../config/database');

module.exports.getAllJobs = function(callback){
    const queryString = 'SELECT * FROM Job'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            return err;
        }
    });
}

module.exports.getJobById = function(id, callback){
    const queryString = `SELECT * FROM Job WHERE jobID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.getJobMaterialsById = function(id, callback){
    const queryString = `SELECT * FROM JobMaterial WHERE jobID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createJob = function(newJob, callback){
    const queryString = `INSERT INTO Job (bidID, jobStatus, createdDate) VALUES ((SELECT bidID FROM Bid WHERE bidID=${newJob.bidID}), "PENDING", "${newJob.createdDate}")`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createJobMaterial = function(newJobMaterial, callback){
    const queryString = `INSERT INTO JobMaterial (materialID, jobID, quantity, perUnitCost) VALUES ((SELECT materialID FROM Material WHERE materialID=${newJobMaterial.materialID}), (SELECT MAX(jobID) AS jobID FROM Job), ${newJobMaterial.quantity}, ${newJobMaterial.perUnitCost})`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.getCurrentJobs = function(callback){
    const queryString = `SELECT * FROM currentJobs`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}