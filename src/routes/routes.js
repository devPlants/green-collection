const express = require("express");
const router = express.Router();
const storage = require("../storage/storage.js");
const users = require("../controllers/userControllers.js");
const auth = require("../controllers/auth.js");
const products = require("../controllers/productControllers.js");
const admin = require("../controllers/adminControllers.js");
const exchanges = require("../controllers/exchangeControllers.js");

router.post("/login", auth.login);
router.post("/users", storage.single("photo"), users.create);

router.use(auth.verifyAuth);

router.get("/users/:id", users.get);
router.get("/users", users.getAll);
router.put("/users", users.update);
router.delete("/users", users.delete);

router.get("/products/:id", products.get);
router.post("/products", storage.single("photo"), products.create);
router.put("/products/:id", products.update);
router.delete("/products/:id", products.delete);

router.post("/exchanges", exchanges.create);
router.get("/exchanges", exchanges.getByUser);

router.use(auth.authAdmin);
router.get("/admins", admin.getCollectionPending);
router.put("/admins", admin.updateCollectionStatus);

module.exports = router;
