const express = require('express');
const ViewController = require("../controllers/ViewController");
const router = express.Router();

router.get('/', ViewController.monstraHome);
router.get('/history', ViewController.monstraHistory);

module.exports = router;