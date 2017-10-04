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
    const queryString = `INSERT INTO Job (bidID, jobStatus, createdDate) VALUES ((SELECT bidID FROM Bid WHERE bidID=${newJob.bidID}), "IN-PROGRESS", "${newJob.createdDate}")`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}

module.exports.createJobMaterial = function(id, newJobMaterial, callback){
    const queryString = `INSERT INTO JobMaterial (materialID, jobID, quantity, perUnitCost) VALUES ((SELECT materialID FROM Material WHERE materialID=${newJobMaterial.materialID}), ${id}, ${newJobMaterial.quantity}, ${newJobMaterial.perUnitCost})`;
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

module.exports.updateJob = function(updatedJob, callback){
    console.log(updatedJob);
    const queryString = `UPDATE Job SET jobLabor=${updatedJob.jobLabor}, jobRevenue=${updatedJob.jobRevenue}, jobStatus="${updatedJob.jobStatus}", createdDate=${updatedJob.createdDate}, endDate=${updatedJob.endDate} WHERE jobID=${updatedJob.jobID}`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}