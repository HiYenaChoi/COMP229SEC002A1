/*
  File: styles.css
  Student: [Yena Choi]
  Student ID: [301251326]
  Date: [2023-10-04]
  
  Description: [Portfolio]
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/')