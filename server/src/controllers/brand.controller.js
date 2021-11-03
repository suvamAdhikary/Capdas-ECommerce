const express = require ("express");

const Brand = require("../models/brand.model");

const router = express.Router();

router.post("", async (req, res) => {
    try{
        const brand = await Brand.create(req.body);
        return res.status(201).send({brand});

    } catch (err) {
        return res.status(400).send({err});
    } 
});

router.get("", async (req, res) => {
    try{
        const brands = await Brand.find().lean().exec();
        return res.status(200).send({brands});

    } catch (err) {
        return res.status(400).send({err});
    } 
});

router.patch("/:id", async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        return res.status(200).send({brand});

    } catch (err) {
        return res.status(400).send({err});
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const brand = await Brand.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({brand});

    } catch (err) {
        return res.status(400).send({err});
    }
});

module.exports = router;