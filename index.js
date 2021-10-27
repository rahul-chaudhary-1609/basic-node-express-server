import express from "express";

const app=express();


app.get('/',(req,res)=>{
    res.send("Hello...")
})


app.listen(9090,(err)=>{
    if(err){
        console.log("Error Occured", err)
    }else{
        console.log("Server is running on port:9090")
    }
})