const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    avatar: String,
    name: String,
    email: String,
    dob: String,
    address: String,
    occupation: String,
})

module.exports = mongoose.model("Contact",contactSchema)