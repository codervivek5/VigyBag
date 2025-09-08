const express = require("express");
const { getProducts } = require("../controllers/productController");
const router = express.Router();

const authRoutes = require("./authRoutes");
const subscribeRouter = require("./subscribe");

router.use("/auth", authRoutes);
router.use("/subscribe", subscribeRouter); // ← add this
router.get("/products", getProducts);

module.exports = router;
