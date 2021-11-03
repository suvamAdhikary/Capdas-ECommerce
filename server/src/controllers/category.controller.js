const Categories = require("../models/category.model");

const router = require("express").Router();

//GET
router.get("/", async function (req, res) {
    console.log('req:', req.query.category)
    
    try {
        const cate = await Categories.find();
        res.status(200).send(cate);
    } catch (err) {
        console.log('err:', err)
        res.status(500).json(err)
    };
});


//GET ID
router.get("/:id", async (req, res) => {
    try {
        const Categ = await Categories.findById(req.params.id);
         res.status(400).send(Categ);
     } catch (err) {
        console.log('err:', err);
        res.status(500).send(err);
     }

})

//POST
router.post("/add", async (req, res) => {
    const newcate = new Categories(req.body);

    try {
        const savedCategory = await newcate.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        console.log('err:', err)
        res.status(500).json(err);
    };
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Categories.findByIdAndDelete(req.params.id);
        res.status(200).json("CATEGORY HAS BEEN SUCCESSFULLY DELETED!")
    } catch (err) {
        console.log('err:', err);
        res.status(500).json(err)  
    };
});
//UPDATE

router.put("/:id", async (req, res) => {
   try {
    const updatedCat = await Categories.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    }, {new:true})
       res.status(200).send(updatedCat);
     } catch (err) {
        console.log('err:', err)
        res.status(500).json(err)
    }
})

module.exports = router;