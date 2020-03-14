const mongoose = require("mongoose");

//schema for product list
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamp: true
});
//making model
const Products = mongoose.model("Products", productSchema);
//exporting the schema
module.exports = Products;
