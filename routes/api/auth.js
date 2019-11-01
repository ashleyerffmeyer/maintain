// Required dependencies and packages
const router = require("express").Router();

// Require Auth controller
const auth = require("../../controllers/auth");

// Create a new user
// POST /api/auth/user
router.post("/user", auth.createUser);

// Login
// POST /api/auth/user/<user_id>
router.post("/user/:id", auth.getUser);

// Login
// POST /api/auth/user/<user_id>
router.post("/user/:id", auth.deleteUser);

// Exporting router
module.exports = router;
