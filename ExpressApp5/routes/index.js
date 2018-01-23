'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express - MZoladz - third commit - git hub - test2' });
});

module.exports = router;
