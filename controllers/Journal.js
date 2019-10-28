// Required dependencies and packages
var express = require("express");
var mongoose = require("mongoose");

// Ensuring that all models are required
var db = require("../models");

exports.getJournal = (req, res) => {
    db.Journal.find().then(function (dbJournal) {
        res.json(dbJournal);
    })
        .catch(function (err) {
            res.json(err);
        });
};


exports.saveJournal = (req, res) => {
    db.Journal.create(req.body).then(
        (response) => {
            res.json("Your journal entry has been successfully saved!");
        }
    ).catch(
        (err) => {
            res.json(err);
        });

};


exports.deleteJournal = (req, res) => {
    db.Journal.deleteOne({ _id: req.params.id }).then(function (deletedJournal) {
        res.json("Journal deleted successfully!");

    }).catch(function (err) {
        res.json(err);
    });
};