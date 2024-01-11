const express =require('express')

//const date=require('./Middlewares/date')
const app = express();
//app.use(date);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Public/HOME.html")
})
app.get("/service",(req,res)=>{
    res.sendFile(__dirname+"/Public/Services.html")
})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/Public/ContactUS.html")
})
app.listen(5000,console.log("Server is running"));