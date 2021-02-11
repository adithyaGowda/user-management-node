const process = require('process');
const mongoose = require('mongoose');
const mongoConfig = require('../config/mongoConfig.json');
const autoIncrement = require('mongoose-auto-increment');

var dbURI = mongoConfig.url;
var dbOptions = mongoConfig.options;

mongoose.connect(dbURI, dbOptions);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose default connection open to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close( () => {
        console.log('Mongoose default connection disconnected through app termination'); 
        process.exit(0);
    });
});

autoIncrement.initialize(mongoose.connection);
module.exports = mongoose;

