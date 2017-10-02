const connection = require('../app');
const config = require('../config/database');

module.exports.getAllMaterials = function(callback){
    const queryString = 'SELECT * FROM Material'; 
    connection.query(queryString, (err, rows, fields) => {
        if(!err){
            callback(rows);
        } else{
            return err;
        }
    });
}

module.exports.createMaterial = function(newMaterial, callback){
    const queryString = `INSERT INTO Material (materialName) VALUES ("${newMaterial.materialName}")`;
    connection.query(queryString, (error, rows, fields) => {
        if(!error){
            callback(rows);
        } else{
            return error;
        }
    });
}