//using product model
const Products = require("../models/products");

module.exports.home = function(req, res){
    return res.render("home");
    // return res.status(200).json({
        
    //     message: "API's Working"
    // });
}

//used to create produc list
module.exports.create = function(req, res){
    console.log("added");
    console.log(req.body);
   let product = Products.create({
        id: req.body.id,
        name: req.body.name,
        quantity: req.body.quantity
    });
    return res.status(200).json({
        data: {
            product: product
        },
        message: "Product listed"
    });
    
}

//controller to fetch all list of items
module.exports.fetch = async function(req, res){
    let products = await Products.find({}).sort("-createdAt");
    console.log(products);
    return res.status(200).json({
        data: {
            product: products
        },
        message: "Product listed"
    });
}

//controller for destroy the particular item
module.exports.destroy = async function(req, res){
    
    let product = await Products.findById(req.params.id);
    console.log(req.params.id);
    product.remove();
    console.log("product deleted");
    return res.status(200).json({
        message: "product deleted"
    });
}

// module.exports.update = function(req, res){
//     console.log(req.body);
//     Products.findOneAndUpdate({id: req.params.id}, 
//             {$set: {quantity: req.params.number}}, function(err, product){
//             if(err){console.log("Error in Updatation");
//             }
//             return res.status(200).json({
//                 data: {
//                     product = product
//                 },
//                 message: "List Updated"
//             });
//         }
//     ); 

// }