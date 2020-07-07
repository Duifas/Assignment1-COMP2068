/*
 * Name: Thales Barros Fajardo Valente
 * Student ID: 200400698
 * Date: 07/06/2020
 * 
 * Description: Creation of back-end routes and functions for the website
 */

//Creation of the main express, router and the json object model from contactMessage.js
'use strict';
var express = require('express');
var router = express.Router();
var articlesModel = require('../model/contactMessage');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

// GET About page
router.get('/about', function (req, res) {
    res.render('about', { title: 'About' });
});

// GET Contact page
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

// GET Projects page
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

// GET Services page
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

/* POST create contact message */
router.post('/contact', function (req, res) {
    //Create a new article using Article Model Schema
    const article = new articlesModel({ name: req.body.name, email: req.body.email, description: req.body.description });
    //Insert it into the database and exits if there is an error
    article.save(function (err) {
        if (err) console.log(err);
    });
});

module.exports = router;
