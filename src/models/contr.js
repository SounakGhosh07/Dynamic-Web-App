const mongoose = require("mongoose")

const Resource = mongoose.Schema({
    Name : String,
    Desc : String
});

module.exports = mongoose.model("Resource", Resource)