const mongoose = require("mongoose")

const slider = mongoose.Schema({
    title : String,
    subTitle: String,
    image : String,
    class : String
});

module.exports = mongoose.model('Slider', slider);