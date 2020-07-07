/*
 * Name: Thales Barros Fajardo Valente
 * Student ID: 200400698
 * Date: 07/06/2020
 * 
 * Description: Creation of the file used to create objects to add to the database
 */

//Connection with the Mongoose npm
const mongoose = require('mongoose')

//Creation of the json object declared ArticleSchema
const ArticleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

//Creation of the model and attribution to module
const Articles = mongoose.model("Articles", ArticleSchema);
module.exports = Articles; 