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
const reqNumberT = {
    type: Number,
    required : true,
}

const addressSchema = mongoose.Schema({
    name: reqStringT,
    houseNo: reqStringT,
    locality: reqStringT,
    pin: reqStringT,
    city: reqStringT,
    state: reqStringT,
}, {
    versionKey: false,
    timestamp: true,
})

const userSchema = mongoose.Schema({
    name: reqStringF,
    email: {type: String, required: true, unique: true},
    username: reqStringF,
    password: reqStringF,
    mobile: reqNumberF,
    totalItemsInBag: reqNumberF,
    totalPrice: reqNumberF,
    address: addressSchema,
    image: reqStringF,
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