#!/bin/sh

echo "Stopping app"
forever stop app.js
echo "Pulling in changes"
git pull
echo "Starting app"
forever start app.js