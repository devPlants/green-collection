const express = require("express");
const router = express.Router();
const storage = require("../storage/storage.js");
const users = require("../controllers/userControllers.js");

router.get("/users", users.getAll);
router.get("/users/:id", users.get);
router.post("/users", storage.single("photo"), users.create);
router.put("/users/:id", users.update);
router.delete("/users/:id", users.delete);

module.exports = router;
