// Required dependencies and packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Createing new schema
const JournalModel = new Schema(
    {
        title: { type: String },
        synopsis: { type: String, required: true },
        date: { type: Date, default: Date.now }
    });

// Creating new model
const Journal = mongoose.model("Journal", JournalModel);

// Exporting Journal
module.exports = Journal;
