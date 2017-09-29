const connection = require('../app');

module.exports.getAllBids = function(callback){
    connection.query('SELECT * FROM Customer', (err, rows, fields) => {
        console.log(rows);
        if(!err){
            callback(rows);
            //console.log(rows);
        } else{
            throw err;
            //console.log(err);
        }
    });
}