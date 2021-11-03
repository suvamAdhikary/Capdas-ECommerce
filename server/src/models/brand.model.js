const mongoose = require('mongoose');

const reqStringT = {
    type : String,
    required : true,
}
const reqStringF = {
    type : String,
    required : false,
}

const brandSchema = mongoose.Schema({
    brandName: reqStringT,
}, {
    versionKey: false,
    timestamp: true,
});

const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand;