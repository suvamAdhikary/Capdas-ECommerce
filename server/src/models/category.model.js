const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    category: { type: String, required: true },
    imageURL: {type: String, required: false}
}, {
    timestamps: true,
versionKey: false});

module.exports = mongoose.model("categories", categoriesSchema);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////