const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//Database connection with mongoDB
mongoose.connect("mongodb+srv://sainiramandeep1710:5KTNLUXlClgNFwaF@cluster0.dvybi.mongodb.net/shop.co")

//api creation

app.get("/", (req, res) =>{
    res.send("Express App is Running")
})

//Image Storage Engine
const storage  = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb) =>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage})




app.listen(port, (error) =>{
    if(!error){
        console.log("Server running on port " +port)
    }
    else{
        console.log("Error : "+error)
    }
})