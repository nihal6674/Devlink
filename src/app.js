const express=require('express')
const app=express()

app.use("/home",(req,res)=>{
    res.send("This is the home page")
})

app.get("/home/sign",(req,res)=>{
    res.send("This is the Home sign page")
})

app.use("/about",(req,res)=>{
    res.send("This is the about page")
})

app.use("/contact",(req,res)=>{
    res.send("This is the contact page")
})

app.listen(3000,()=>{
    console.log("server started on port 3000")
})