const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const jwtAuth = require('./lib/jwt-auth')
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(jwtAuth.middleware)
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://maintain:maintain14@ds131905.mlab.com:31905/heroku_ppgvlmlw");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}`);
});
