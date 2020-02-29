const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

let userModel = mongoose.model('user', userSchema); //创建一个user集合

module.exports = userModel;