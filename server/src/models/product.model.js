const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    image: { type: Array, required: true },
    size: { type: String, required: false },
    scope: { type: String, required: false },
    rating: { type: String, required: true },
    productDetails: { type: String, required: false },
    productCare: { type: Array, required: false },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
      required: false,
    },
    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subcategories",
      required: false,
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brand",
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;
