const express=require("express");
const bodyParser=require("body-parser")


const app= express();


app.get("/",function(req,res){
     var today=new Date();
     var currentDay=today.getDay();
     if(currentDay===6 || currentDay===0){
        res.send("Its a weekend");     
     }
     else{
        res.send("A weekday")
     }
}); 



app.listen(3000,function(){
    console.log("server is running");
})



