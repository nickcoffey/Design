# Design
Source Code for Allied Waterproofing Web App

MUST USE JOIN ON DELETE IN ORDER TO CHANGE PARENT'S STATUS BACK TO PENDING
(IE: FOR JOB DELETION, PASS JSON THAT CONTAINS JOBID AND BIDID AND USE THOSE TO CALL 2 APIS)

Use this link to help with setting up delete API calls
https://stackoverflow.com/questions/2914936/mysql-foreign-key-constraints-cascade-delete