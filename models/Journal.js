// Required dependencies and packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Createing new schema
const JournalModel = new Schema(
    {
        title: { type: String, required: true },
        date: { type: Date, default: Date.now },
        entry: String,
        //image: String,
        // userId: { type: String, required: true }
    });

// Creating new model
const Journal = mongoose.model("Journal", JournalModel);

// Exporting Journal
module.exports = Journal;
