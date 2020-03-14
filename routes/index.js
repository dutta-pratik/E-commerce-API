//initializing express
const express = require("express");
//initializing router
const router = express.Router();

const productController = require("../controllers/product_controller");

router.get("/", productController.home);

//creating new product 
router.post("/products/create", productController.create);

//getting all product list
router.get("/products", productController.fetch);

//deleting
router.delete("/products/:id", productController.destroy);

// router.post("/products/:id/update_quantity", productController.update);


module.exports = router;