const express=require("express");
const bodyParser=require("body-parser")


const app= express();


app.get("/",function(req,res){
     var today=new Date();
     if(today.getDate()===6 || today.getDate()===0){
        res.send("its a weekend");
     }
     else{
        res.send("A weekday")
     }
})



app.listen(3000,function(){
    console.log("server is running");
})



