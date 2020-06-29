'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'About' });
});

router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

/* POST create contact message */
router.post('/contact', function (req, res) {
    //Create a new article using Article Model Schema
    const article = new articlesModel({ name: req.body.name, email: req.body.email, description: req.body.description });
    //Insert it into the database
    article.save(function (err) {
        if (err) console.log(err);
    });
});

module.exports = router;
