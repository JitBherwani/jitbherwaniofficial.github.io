// Importing Packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//Declare Static path
let staticPath = path.join(__dirname, "public")

// Initializing Express Js
const app = express();

//Middleware
app.use(express.static(staticPath));


// Route
// Home Route
app.get("/",(req,res)=>{
    res.sendFile(staticPath,"/index.html");
    // res.sendFile(StaticPath)
})

app.listen(3000,()=>{
    console.log("Listening to Port 3000....")
})