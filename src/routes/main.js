const express = require("express")
const Detail = require("../models/detail")
const Slider = require("../models/sliders");
const Contact = require("../models/queries")
const Resource = require("../models/contr")

const routes = express.Router()

routes.get("/", async function(req, res){
    const d1 = await Detail.findOne({"_id" : "643c23e48a1c4038ec97bdac"});
    const s = await Slider.find();
    const q = await Contact.find();
    console.log(d1);
    console.log(q[0].phone);
    res.render("index",{
        details : d1,
        sliders : s,
        queries : q
    });
});

routes.get("/services", async function(req, res){
    const d1 = await Detail.findOne({"_id" : "643c23e48a1c4038ec97bdac"});
    const s = await Slider.find();
    const q = await Contact.find();
    console.log(d1);
    console.log(q[0].phone);
    res.render("service",{
        details : d1,
        sliders : s,
        queries : q
    });
});

routes.get("/contact-us", async function(req, res){
    const d1 = await Detail.findOne({"_id" : "643c23e48a1c4038ec97bdac"});
    const s = await Slider.find();
    const q = await Contact.find();
    console.log(d1);
    console.log(q[0].phone);
    res.render("contact",{
        details : d1,
        sliders : s,
        queries : q
    });
});

routes.get("/about", async function(req, res){
    const d1 = await Detail.findOne({"_id" : "643c23e48a1c4038ec97bdac"});
    const s = await Slider.find();
    const q = await Contact.find();
    console.log(d1);
    console.log(q[0].phone);
    res.render("about",{
        details : d1,
        sliders : s,
        queries : q
    });
});

routes.get("/find", async function(req, res){
    const d1 = await Detail.findOne({"_id" : "643c23e48a1c4038ec97bdac"});
    const s = await Slider.find();
    const q = await Contact.find();
    const c = await Resource.find();
    console.log(d1);
    console.log(q[0].phone);
    res.render("contr",{
        details : d1,
        sliders : s,
        queries : q,
        Resources : c
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

routes.get("/contribute", async function(req, res){
    const d1 = await Detail.findOne({"_id" : "643c23e48a1c4038ec97bdac"});
    const s = await Slider.find();
    const q = await Contact.find();
    console.log(d1);
    console.log(q[0].phone);
    res.render("contribute",{
        details : d1,
        sliders : s,
        queries : q
    });
})

routes.post("/getResources", async function(req, res){
    let payload  = req.body.payload.trim();
    console.log(payload)
    let search = await Resource.find({"Name": {$regex: new RegExp('^' + payload + '.*','i')}}).exec();
    search = search.slice(0, 10);
    res.send({payload : search})
})

routes.post("/add-resource", async function(req, res){
    // console.log("Hello World!");
    console.log(req.body);
    
    try{
        const data2 = new Resource(req.body);
        data2.save();
        console.log(data2);
        res.redirect("/");
    }
    catch(e){
        console.log(e);
        res.redirect("/");
    }
})

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