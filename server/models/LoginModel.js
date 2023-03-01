const mongoose = require('mongoose');

const loginTemplate = new mongoose.Schema({
    email : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    }


})


module.exports = mongoose.model('login' , loginTemplate);