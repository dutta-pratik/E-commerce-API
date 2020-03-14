const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const Products = require("./models/products");

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//use for encoding URL
app.use(express.urlencoded({extended : true}));

//use express router
app.use("/", require("./routes/index"));

//checking if server is running fine or not
app.listen(port, function(err){
    if(err){
        console.log("Error : ", err);
    }
    console.log(`Server running succesfull at port: ${port}`);
});