'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'Express' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Express' });
});

router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Express' });
});

router.get('/services', function (req, res) {
    res.render('services', { title: 'Express' });
});


module.exports = router;
