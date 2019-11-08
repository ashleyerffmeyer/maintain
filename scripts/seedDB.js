const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Journal collection and inserts the journals below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Journal"
);

const journalSeed = [
  {
    title: "test",
    synopsis:
      "this",
    date: new Date(Date.now())
  }
];

db.Journal
  .remove({})
  .then(() => db.Journal.collection.insertMany(journalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
