// Required dependencies and packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Createing new schema
const UserModel = new Schema(
    {
        name: { type: String, required: true },
        user: { type: String, required: true, unique: true },
        passwd: { type: String, required: true },
    }
);

// Creating new model
const User = mongoose.model("User", UserModel);

// Exporting User
module.exports = User;
