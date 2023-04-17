const express = require("express");
const hbs = require("hbs")
const app = express()
const path = require("path")
const bodyparser = require("body-parser")
const mongoose  = require("mongoose")
const Detail = require("./models/detail")
const Slider = require("./models/sliders")

// async function main() {
app.set('view engine', 'hbs');
app.set("views", './src/views');
hbs.registerPartials("./src/views/partials");

app.use('/static', express.static('./src/public'));

app.use(bodyparser.urlencoded({extended : true}));

app.set('view engine', 'hbs'); 

const routes = require("./routes/main");

mongoose.connect('mongodb://0.0.0.0:27017/new_webDB');

// const s1 = new Slider({
//     title: "Utilising the online domain",
//     subTitle: "Great opportunities open via the new boon of humanity.",
//     image: "/static/images/compare-fibre-Y8TiLvKnLeg-unsplash.jpg"
// })

// const s2 = new Slider({
//     title: "Enjoy the scent of books",
//     subTitle: "The best source of knowledge. Learn to harness its true potential.",
//     image: "/static/images/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg"
// })

// const s3 = new Slider({
//     title: "Not a luxury, A right",
//     subTitle: "We vow to spread the light of education through out the globe.",
//     image: "/static/images/ismail-salad-osman-hajji-dirir-v7FT5ngIEfA-unsplash.jpg"
// })

// Slider.insertMany([s1, s2, s3]);
// const d1 = new Detail({
//     BrandName: "Free Education For All",
//     brandIcon: "/static/images/download.jpeg",
//     links: [
//         {
//             label : "Home",
//             url : "/"
//         },
//         {
//             label: "Services",
//             url : "/services"
//         },
//         {
//             label : "Gallery",
//             url : "/gallery"
//         },
//         {
//             label : "About",
//             url : "/about"
//         },
//         {
//             label : "Contact us",
//             url : "/contact-us"
//         }
//     ]
// })

// d1.save();
app.use('', routes);

app.listen(3000, function(){
    console.log("Started at 3000")
})

// }
