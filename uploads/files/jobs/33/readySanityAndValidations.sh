#!/bin/sh

# SET VARIABLES
source ./config/SANITY-VARS
VERSION=$1
ENVIRONMENT=$2
echo -e "OE VERSION: $VERSION" > ./output/output.txt
echo -e "ENVIRONMENT: $ENVIRONMENT\n" >> ./output/output.txt

# GET SQL AND OPEN SQL DEVELOPER
# cat "C:/Users/P2742129/Desktop/OE Sanity/DB Validations/validations_${VERSION}.sql" > /dev/clipboard
echo -e "\nVALIDATIONS:\n" >> ./output/output.txt
cat "./config/validations/validations_${VERSION}.sql" >> ./output/output.txt
"$SQLDEVELOPER" > ./output/logs/log.txt &

# WAIT FOR ENTER
# read -p "Press enter to continue"

# GET ENVIRONMENT AND OPEN SOAPUI 
# cat "C:/Users/P2742129/Desktop/OE Sanity/Environments/${ENVIRONMENT}.txt" > /dev/clipboard
echo -e "\n\n\nSANITY:\n" >> ./output/output.txt
cat "./config/environments/${ENVIRONMENT}.txt" >> ./output/output.txt
"$SOAPUI" >> ./output/logs/log.txt &

# WAIT FOR ENTER
# read -p "Press enter to continue"

# OPEN ONENOTE AND OUTLOOK
"$ONENOTE" >> ./output/logs/log.txt &
"$OUTLOOK" >> ./output/logs/log.txt &

# OPEN OUTPUT
"$NOTEPADPLUSPLUS" ./output/output.txt &

# REMOVE LOG
# rm ./output/logs/log.txt