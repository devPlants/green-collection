const express = require("express");
const router = express.Router();
const storage = require("../storage/storage.js");
const users = require("../controllers/userControllers.js");
const products = require("../controllers/productControllers.js");

router.get("/users/:id", users.get);
router.post("/users", storage.single("photo"), users.create);
router.put("/users/:id", users.update);
router.delete("/users/:id", users.delete);

router.get("/products/:id", products.get);
router.post("/products", storage.single("photo"), products.create);
router.put("/products/:id", products.update);
router.delete("/products/:id", products.delete);

module.exports = router;