const express = require("express");
const router = express.Router();

const adminCheck = require("../controllers/adminCheck");

const {
  getProduct,
  getAllProducts,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/productController");

router.use(express.json());

// //Get one product
router.get("/:id", getProduct);

// Get all products
router.get("/", getAllProducts);

//Add new product
router.post("/", addProduct);

//Edit product
router.put("/:id", adminCheck, editProduct);

//Delete product
router.delete("/:id", adminCheck, deleteProduct);

module.exports = router;
