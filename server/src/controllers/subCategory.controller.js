const SubCategory = require("../models/subCategory.model");
const router = require("express").Router();

//GET by id

router.get("/:id", async (req, res) => {
    try {
        const single = await SubCategory.findById(req.params.id);
        res.status(200).json(single);

    } catch (err) {
        console.log('err:', err);
        res.status(500).send(err);
    }
});

//GET all
router.get("/", async (req, res) => {
    try {
        const subc = await SubCategory.find().lean().exec();
        res.status(200).json(subc);
    } catch (err) {
        console.log('err:', err)
        res.status(500).send(err)
    }
});

//POST
router.post("/", async (req, res) => {
   const newSubCat = new SubCategory(req.body);

    try {
        const savedsubCate = await newSubCat.save();
        res.status(200).json(savedsubCate);
    } catch (err) {
        console.log('err:', err);
        res.status(500).send(err);
    }
});


//update by id
router.put("/:id", async (req, res) => {
    try {
        const updatedSubCat = await SubCategory.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).send(updatedSubCat);
    } catch (err) {
        console.log('err:', err);
        res.status(500).json(err);
    }
});



//delete by id
router.delete("/:id", async (req, res) => {
    try {
        await SubCate.findByIdAndDelete(req.params.id);
        res.status(200).json("SUBCATEGORY HAS BEEN SUCCESSFULLY DELETED!")
    } catch (err) {
        console.log('err:', err);
        res.status(500).json(err)  
    };
});



module.exports = router
