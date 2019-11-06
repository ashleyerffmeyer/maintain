// Required dependencies and packages
const path = require("path");
const router = require("express").Router();
const health = require("./api/health");
const auth = require("./api/auth");
const journal = require("./api/journal");
var { generateToken, sendToken } = require('../../utils2/token.utils');
var passport = require('passport');
var config = require('../config');
var request = require('request');
require('../passport')();
// API Routes
router.use("/api/health", health);
router.use("/api/auth", auth);
router.use("/api/journal", journal);
router.route('/auth/google')
    .post(passport.authenticate('google-token', {session: false}), function(req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };

        next();
    }, generateToken, sendToken);


// If no API routes are hit, send to the React app
router.use('/*',function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Export router
module.exports = router;
