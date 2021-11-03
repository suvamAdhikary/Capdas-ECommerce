const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
   category: { type: String, required: true }
}, {
    timestamps: true,
versionKey: false});

module.exports = mongoose.model("categories", categoriesSchema);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////