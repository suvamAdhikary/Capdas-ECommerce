const mongoose = require('mongoose');

const reqStringT = {
    type : String,
    required : true,
}
const reqStringF = {
    type : String,
    required : false,
}
const reqNumberF = {
    type: Number,
    required : false,
}

const userSchema = mongoose.Schema({
    email: reqStringT,
    username: reqStringF,
    password: reqStringF,
    mobile: reqNumberF,
}, {
    versionKey: false,
    timestamp: true,
})

const User = mongoose.model("user", userSchema);

module.exports = User;