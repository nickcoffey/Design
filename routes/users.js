const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// Register a new user
router.post('/register', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    let newUser = {
        name: request.body.name,
        username: request.body.username,
        password: request.body.password
    };  

    User.addUser(newUser, (message) => {
        console.log(message);
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'User registered'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

// Authenticate user
router.post('/authenticate', (request, response, next) => {
    const username = request.body.username;
    const password = request.body.password;
    console.log(username);

    User.getUserByUsername(username, (user, error) => {
        //console.log(`User = ${JSON.stringify(user)}`);
        //console.log(`Error = ${error}`);
        if(error){
            return error;
        }
        if(!user[0]){
            return response.json({success: false, msg: 'User not found'});
        }

        /************************** FIX FROM STACK OVERFLOW ***********************************/
        // User without password for security
        let restrictedUser = {
            username: user[0].username,
            name: user[0].name
        }
        /************************** FIX FROM STACK OVERFLOW ***********************************/

        User.comparePassword(password, user[0].password, (error, isMatch) => {
            // If callback contains error
            if(error){
                return error;
            }
            // If callback hash matches 
            if(isMatch){
                const token = jwt.sign(restrictedUser, config.secret, {
                    expiresIn: 3600 // 1 hour in seconds
                });

                response.json({
                    success: true,
                    token: `JWT ${token}`,
                    user: {
                        name: user[0].name,
                        username: user[0].username
                    }
                });
            } else{
                return response.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

// Delete user
router.post('/delete/:username', passport.authenticate('jwt', {session: false}), (request, response, next) => {
    const username = request.params.username;

    User.deleteUser(username, (message) => {
        if(message.message == ""){
            response.json({
                success: true,
                msg: 'User Deleted'
            });
        } else{
            response.json({
                success: false,
                msg: message.message
            });
        }
    });
});

module.exports = router;