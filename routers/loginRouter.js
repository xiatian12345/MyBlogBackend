const express = require('express');

const {loginController} = require('../controllers');

const router = new express.Router();

router.post('/',loginController)
module.exports = router;