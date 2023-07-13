const express = require('express');

const {rootController} = require('../controllers');

const router = new express.Router();

router.get('/',rootController)
module.exports = router;