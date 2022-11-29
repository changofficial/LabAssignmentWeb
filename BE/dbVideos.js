const mongoose = require("mongoose");


const shortVideoSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String
})
const Videos = mongoose.model("video", shortVideoSchema)
module.exports = Videos;