const express = require('express');

const {apiController} = require('../controllers');

const router = new express.Router();

router.get('/',apiController)
module.exports = router;