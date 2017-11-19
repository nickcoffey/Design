const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mysql = require('mysql');
const config = require('./config/database');

const serveIndex = require('serve-index');

//  Connect to DB
const connection = module.exports = mysql.createConnection(config.AWS);
// const connection = module.exports = mysql.createConnection(config.LOCAL);
connection.connect((err) => {
    if (err) {
        console.error(`Database connection failed ${err.stack}`);
    } else {
        console.log('Database connection successful');
    }

});

const app = express();

const users = require('./routes/users');
const customers = require('./routes/customers');
const inquiries = require('./routes/inquiries');
const bids = require('./routes/bids');
const jobs = require('./routes/jobs');
const materials = require('./routes/materials');
const labors = require('./routes/labors');

// Port Number
// const port = process.env.PORT || 8080;
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set Images Folder
//app.use(express.static('uploads'));
app.use('/api/uploads', express.static('uploads/files'), serveIndex('uploads/files'));

// Body Parser Middleware
app.use(bodyParser.json({
    parameterLimit: 100000,
    limit: '100mb',
    extended: true
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/api/users', users);
app.use('/api/customers', customers);
app.use('/api/inquiries', inquiries);
app.use('/api/bids', bids);
app.use('/api/jobs', jobs);
app.use('/api/materials', materials);
app.use('/api/labors', labors);

// Index Route
app.get('/', (request, response) => {
    response.send('Invalid Endpoint');
});


// Any other route besides given ones will be sent here
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'public/index.html'));
});


// Start Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});