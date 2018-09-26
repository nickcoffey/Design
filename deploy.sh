#!/bin/bash

# MAKE SURE FILE IS EXECUTABLE chmod +x deploy.sh
# PUT IT IN ../Scripts

# STOP APP AND PULL IN CHANGES
cd ../Design
forever app.js stop
git pull

# INSTALL ANY NEW DEPENDENCIES
npm install
cd angular-src
npm install
cd ../

# RESTART APP
forever start app.js

