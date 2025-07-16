import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { getDate } from "/date.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs"); 

    const newItems = [];
    const workItems = [];


app.get("/", (req, res) => {

    const day = getDate();
        
    res.render("list", { listTitle: day, newListItems: newItems });
});

app.post("/", (req, res) => {
    const newItem = req.body.newItem;
    
    if (req.body.list === "Work List") {
        workItems.push(newItem);   
        res.redirect("work")
    }else{
        newItems.push(newItem); 
        res.redirect("/");
    }

    console.log(req.body);
});


// FOR WORK ROUTE


app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", (req, res)=>{
    let workItem = req.body.newItem;
    workItems.push(workItem);
    res.redirect("/work");
});

// about route

app.get("/about", (req, res)=>{
    res.render("about");
});


app.listen(3000, () => {
    console.log("Server responding at port 3000!!");
});




