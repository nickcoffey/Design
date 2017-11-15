const connection = require('../app');
const config = require('../config/database');
const sqlString = require('sqlstring');

/********************************************************* Job *************************************************************************/

module.exports.getAllJobs = function (callback) {
    const queryString = 'SELECT * FROM detailedJobs';
    connection.query(queryString, (err, rows, fields) => {
        if (!err) {
            callback(rows);
        } else {
            return err;
        }
    });
}

module.exports.getJobById = function (id, callback) {
    const queryString = `SELECT * FROM detailedJobs WHERE jobID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.createJob = function (newJob, callback) {
    const queryString = `INSERT INTO Job (bidID, jobStatus, createdDate) VALUES ((SELECT bidID FROM Bid WHERE bidID=${newJob.bidID}), "IN-PROGRESS", NOW())`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getCurrentJobs = function (callback) {
    const queryString = `SELECT * FROM detailedJobs WHERE jobStatus="IN-PROGRESS"`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getCurrentJobCosts = function (callback) {
    const queryString = `SELECT * FROM currentJobsCosts`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateJob = function (updatedJob, callback) {
    const queryString = sqlString.format(`UPDATE Job SET ? WHERE jobID = ?`, [updatedJob, updatedJob.jobID]);
    //console.log(queryString);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.updateJobStatus = function (updatedJob, callback) {
    const queryString = `UPDATE Job SET jobStatus = "${updatedJob.jobStatus}", endDate=NOW() WHERE jobID=${updatedJob.jobID}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteJob = function (id, callback) {
    const queryString = `DELETE FROM Job WHERE jobID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

/********************************************************* Job Materials *************************************************************************/

module.exports.createJobMaterial = function (newJobMaterial, callback) {
    const queryString = sqlString.format(`INSERT INTO JobMaterial SET ?`, newJobMaterial);
    // const queryString = `INSERT INTO JobMaterial (materialID, jobID, quantity, perUnitCost) VALUES ((SELECT materialID FROM Material WHERE materialID=${newJobMaterial.materialID}), ${id}, ${newJobMaterial.quantity}, ${newJobMaterial.perUnitCost})`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteJobMaterial = function (jobMaterial, callback) {
    const queryString = `DELETE FROM JobMaterial WHERE (materialID=${jobMaterial.materialID} AND jobID=${jobMaterial.jobID})`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getJobMaterialsById = function (id, callback) {
    const queryString = `SELECT * FROM Material JOIN JobMaterial ON Material.materialID = JobMaterial.materialID WHERE jobID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getCurrentJobMaterialsCost = function (id, callback) {
    const queryString = `SELECT SUM(JobMaterial.pricePerUnit/JobMaterial.linearFeetCoverage*JobMaterial.linearFeet) AS jobMaterialCost FROM JobMaterial WHERE JobMaterial.jobID = ${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

/********************************************************* Change Order *************************************************************************/

module.exports.createChangeOrder = function (newChangeOrder, callback) {
    const queryString = sqlString.format(`INSERT INTO ChangeOrder SET ?, changeDate = NOW()`, newChangeOrder);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteChangeOrder = function (id, callback) {
    const queryString = `DELETE FROM ChangeOrder WHERE changeID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getChangeOrdersById = function (id, callback) {
    const queryString = `SELECT * FROM ChangeOrder WHERE jobID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

/********************************************************* Job Revenue *************************************************************************/

module.exports.createJobRevenue = function (newJobRevenue, callback) {
    const queryString = sqlString.format(`INSERT INTO JobRevenue SET ?, revenueDate = NOW()`, newJobRevenue);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteJobRevenue = function (id, callback) {
    const queryString = `DELETE FROM JobRevenue WHERE revenueID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getJobRevenuesById = function (id, callback) {
    const queryString = `SELECT * FROM JobRevenue WHERE jobID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

/********************************************************* Job Labor *************************************************************************/

module.exports.createJobLabor = function (newJobLabor, callback) {
    const queryString = sqlString.format(`INSERT INTO JobLabor SET ?, laborDate = NOW()`, newJobLabor);
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.deleteJobLabor = function (id, callback) {
    const queryString = `DELETE FROM JobLabor WHERE laborID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}

module.exports.getJobLaborsById = function (id, callback) {
    const queryString = `SELECT * FROM JobLabor WHERE jobID=${id}`;
    connection.query(queryString, (error, rows, fields) => {
        if (!error) {
            callback(rows);
        } else {
            return error;
        }
    });
}