
const express = require('express');

const router = express.Router();

const User = require('../models/user.model');

const crudController = require('./crud.controller');


router.get('', crudController.get(User));
router.get('/:id', crudController.getOne(User));
router.patch('/:id', crudController.updateOne(User));
router.delete('/:id', crudController.deleteOne(User));


module.exports = router;