import express from "express";
const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

app.get("/",(req,res)=>{
    res.send("hello everyone!!");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About US</h1>")
});

app.get("/contact",(req,res)=>{
    res.send("<h1>contact US</h1>")
});