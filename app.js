import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs"); 

    let newItems = [];


app.get("/", (req, res) => {
    let today  = new Date();
    let options = {
        weekday: 'long', 
        day: 'numeric',
        year: 'numeric',
        month: 'long',
    };
    var day = today.toLocaleDateString("en-US", options);
        
    res.render("list", { kindOfDay: day, newListItems: newItems });
    });

app.post("/", (req, res) => {
    let newItem = req.body.newItem; 
    newItems.push(newItem); 
    res.redirect("/");
});


app.listen(3000, () => {
    console.log("Server responding at port 3000!!");
});


