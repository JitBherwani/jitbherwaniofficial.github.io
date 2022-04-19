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

app.get('signup',(req,res)=>{
    res.sendFile(path.join(staticPath,'signup.html'))
})

app.get('/404',(req,res)=>{
    res.sendFile(path.join(staticPath,'404.html'))
})
app.use((req,res)=>{
    res.redirect('/404')
})

app.listen(3000,()=>{
    console.log("Listening to Port 3000....")
})