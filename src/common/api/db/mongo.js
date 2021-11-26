"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose = new mongoose_1.Mongoose();
var mongoURI = process.env.MONGODB_URI || '';
var mongoConnectError = function (error) {
    if (error) {
        console.log('Connection error', error);
        return new Error(JSON.stringify(error));
    }
    console.log('Connection success');
};
mongoose.connect(mongoURI, mongoConnectError);
