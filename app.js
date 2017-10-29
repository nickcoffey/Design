const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mysql = require('mysql');
const config = require('./config/database');

//  Connect to DB
const connection = module.exports = mysql.createConnection(config.AWS);
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

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set Images Folder
app.use(express.static('uploads'));

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


app.use('/users', users);
app.use('/customers', customers);
app.use('/inquiries', inquiries);
app.use('/bids', bids);
app.use('/jobs', jobs);
app.use('/materials', materials);

// Index Route
app.get('/', (request, response) => {
    response.send('Invalid Endpoint');
});


// // Any other route besides given ones will be sent here
// app.get('*', (request, response) => {
//     response.sendFile(path.join(__dirname, 'public/index.html'));
// });


// Start Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});