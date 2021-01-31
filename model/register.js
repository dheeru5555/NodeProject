const mongoose = require("mongoose");

var scheme = new  mongoose.Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    email : {
        type: String,
        unique : false,
        required : true
    },
    user : {
        type: String,
        unique : false,
        required : true
    }
});
var Register = mongoose.model("dheeraj", scheme );

module.exports = Register;