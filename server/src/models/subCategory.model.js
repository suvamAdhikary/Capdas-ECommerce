const mongoose = require("mongoose");

const subCategoriesSchema = new mongoose.Schema({
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "categories", required: true },
    name: { type: String, required: true },
    prodId: {type:String, required: false },

}, {
    timestamps: true,
    versionKey: false,
});

const SubCategory = mongoose.model("subCategories", subCategoriesSchema);

module.exports = SubCategory;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////