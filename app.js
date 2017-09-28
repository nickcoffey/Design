const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'alliedwaterproofing.cvsyojwbt8yt.us-east-2.rds.amazonaws.com',
    user: 'coffeynick',
    password: 'Capp_1217',
    port: '3306',
    database: 'designDB'
});

connection.connect((err) => {
    if(err){
        console.error(`Database connection failed ${err.stack}`);
    } else{
        console.log('Database connection successful');
    }

});

connection.query('SELECT * FROM Job', (err, rows, fields) => {
    if(!err){
        console.log(rows);
    } else{
        console.log(err);
    }
});