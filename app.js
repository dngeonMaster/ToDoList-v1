const express=require("express");
const bodyParser=require("body-parser")
const date=require(__dirname+"/date.js");





let items=[];
let workItems=[];


const app= express(); 
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine","ejs");


app.get("/",function(req,res){
    
    let day= date();
    res.render("list",{
        listTitle:day,
        newListItems:items,

    });
}); 

app.post("/",function(req,res){
    let item=req.body.newItem;
    items.push(item)
    res.redirect("/")

})


app.get("/work",function(req,res){
    res.render("list",{listTitle:"work List",newListItems:"workItems"});
})

app.post("/work",function(req,res){
    let item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})

app.get("/about",function(req,res){
    res.render("about");
})

app.get("/contact",function(req,res){
    res.render("contact");
})


app.listen(3000,function(){
    console.log("server is running");
})



