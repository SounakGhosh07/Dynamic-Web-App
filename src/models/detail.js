const mongoose = require("mongoose")

const Detail = new mongoose.Schema({
    BrandName : String,
    brandIcon : String,
    links:[{
        label: String,
        url: String
    }]
})

module.exports = mongoose.model("Detail", Detail)