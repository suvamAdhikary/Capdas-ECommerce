const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

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
    name: reqStringF,
    email: reqStringT,
    username: reqStringF,
    password: reqStringF,
    mobile: reqNumberF,
}, {
    versionKey: false,
    timestamp: true,
})

userSchema.pre('save', function(next) {
    if(! this.isModified('password')) return next();

    const hash = bcrypt.hashSync(this.password, 8);

    this.password = hash;

    next();
});

userSchema.methods.checkPassword = function(password) {
    const match = bcrypt.compareSync(password, this.password);

    return match;
}

const User = mongoose.model("user", userSchema);

module.exports = User;