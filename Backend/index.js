const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//Database connection with mongoDB
// mongoose.connect("mongodb+srv://sainiramandeep1710:5KTNLUXlClgNFwaF@cluster0.dvybi.mongodb.net/shop.co").then(() =>{
//     console.log("Connection successfull")
// }).catch((err) => console.log("Error: " + err))
mongoose.connect("mongodb://localhost:27017").then(() =>{
    console.log("Connection successfull")
}).catch((err) => console.log("Error: " + err))

// mongoose.connection.on('connected', () => {
//     console.log('Mongoose successfully connected to MongoDB');
// });

// mongoose.connection.on('error', (err) => {
//     console.error('Mongoose connection error:', err);
// });

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

const upload = multer({storage:storage})

//creating upload endpoint for image 
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res) =>{
    res.json({
        success:1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,     
    },
    image:{
        type: String,
        required: true, 
    },
    category: {
        type: String,
        required: true,
    }, 
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number, 
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
    },
    avilable:{
        type: Boolean,
        default: true, 
    },
    brand:{
        type:String,
        required: true,
    }
})

app.post('/addproduct', async (req,res ) =>{
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name:req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price, 
        brand: req.body.brand,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// creating api for deleting products

app.post('/removeproduct', async (req,res) =>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
})

// creating api for getting all products
app.get('/allproducts', async (req,res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

//schema creating for the user model
const Users = mongoose.model('Users',{
    name:{
        type: String, 
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String, 
    },
    cartData:{
        type:Object,
    },
    data:{
        type:Date,
        default:Date.now,
    }
})

// creating the endpoint for registering the user
app.post('/signup', async (req,res) =>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    let cart = {};
    for(let i=0;i<300;i++){
        cart[i] = 0;
    }
    const user = new Users({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id: user.id 
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating endpoint for user login
app.post('/login', async (req,res) =>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data ={
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})

app.listen(port, (error) =>{
    if(!error){
        console.log("Server running on port " +port)
    }
    else{
        console.log("Error : "+error)
    }
})