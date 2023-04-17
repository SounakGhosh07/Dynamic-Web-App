const express = require("express")
const Detail = require("../models/detail")
const Slider = require("../models/sliders");
const Contact = require("../models/queries")

const routes = express.Router()

routes.get("/", async function(req, res){
    const d1 = await Detail.findOne({"_id" : "643c23e48a1c4038ec97bdac"});
    const s = await Slider.find();
    console.log(d1);
    res.render("index",{
        details : d1,
        sliders : s
    });
});

routes.get("/gallery", async function(req, res){
    const d1 = await Detail.findOne({"_id" : "643c23e48a1c4038ec97bdac"});
    const s = await Slider.find();
    console.log(d1);
    res.render("gallery",{
        details : d1,
        sliders : s
    });
});

routes.post("/process-query", async function(req, res){
    console.log("Hello World!");
    console.log(req.body);

    try{
        const data = new Contact(req.body);
        data.save();
        console.log(data);
        res.redirect("/");
    }
    catch(e){
        console.log(e);
        res.redirect("/");
    }
})

module.exports = routes