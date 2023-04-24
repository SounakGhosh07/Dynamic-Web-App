const mongoose = require("mongoose")

const Resource = new mongoose.Schema({
    Name : String,
    Desc : String
})

module.exports = mongoose.model("Resource", Resource)