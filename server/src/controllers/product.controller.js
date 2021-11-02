const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();

//to post product
router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send({ product });
  } catch (err) {
    return res.status(400).send({ err });
  }
});

//to get all product
router.get("", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    return res.status(200).send({ product });
  } catch (err) {
    return res.status(400).send({ err });
  }
});

//to get one product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send({ product });
  } catch (err) {
    return res.status(400).send({ err });
  }
});

//to delete product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    return res.status(200).send({ product });
  } catch (err) {
    return res.status(400).send({ err });
  }
});

// to update product

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send({ product });
  } catch (err) {
    return res.status(400).send({ err });
  }
});

module.exports = router;
