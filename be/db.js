const mongoose = require("mongoose")

const messagingSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})
const messagingmessage = mongoose.model("messagingmessages", messagingSchema)
module.exports=messagingmessage;