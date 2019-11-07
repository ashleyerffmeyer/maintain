// Required dependencies and packages
const path = require("path");
const router = require("express").Router();
const health = require("./api/health");
const auth = require("./api/auth");
const journal = require("./api/journal");

const apiRoutes = require("./api");
// API Routes
router.use("/api", apiRoutes);
router.use("/api/health", health);
router.use("/api/auth", auth);
router.use("/api/journal", journal);


// If no API routes are hit, send to the React app
router.use('/*', function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Export router
module.exports = router;
