const express = require("express");
const router = express.Router();
const storage = require("../storage/storage.js");
const users = require("../controllers/userControllers.js");
const auth = require("../controllers/auth.js");
const products = require("../controllers/productControllers.js");

router.post("/login", auth.login);

router.post("/users", storage.single("photo"), users.create);

router.use(auth.verifyAuth);

router.get("/users/:id", users.get);
router.get("/users", users.getAll);
router.put("/users", users.update);
router.delete("/users", users.delete);

router.get("/products/:id", products.get);
router.post("/products", storage.single("photo"), products.create);
router.put("/products", products.update);
router.delete("/products", products.delete);

module.exports = router;
