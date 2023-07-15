const express = require('express');

const {registController} = require('../controllers');

const router = new express.Router();

router.post('/',registController)
module.exports = router;