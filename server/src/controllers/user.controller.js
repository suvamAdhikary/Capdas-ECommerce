
const express = require('express');

const router = express.Router();

const fs = require('fs');

const upload = require('../middlewares/file-upload');

const User = require('../models/user.model');

const crudController = require('./crud.controller');


router.get('', crudController.get(User));
router.get('/:id', crudController.getOne(User));
router.patch('/:id', crudController.updateOne(User));
router.delete('/:id', crudController.deleteOne(User));


router.patch('/img/:id', upload.single("dp"), async (req, res) => {
    try{
        const pic = await User.findById(req.params.id).lean().exec();

        const old = pic.image;

        if(old) {
            fs.unlink(old, (err) => {
                if(err) throw err;
            })
        }

        const user = await User.findByIdAndUpdate(req.params.id, {
            image: req.file.path,
        }, { new: true});

        return res.status(200).json({user});
    } catch (err) {
        return res.status(400).json(err.message);
    }
})


module.exports = router;