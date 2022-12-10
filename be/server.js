const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const messagingmessage = require("./db")
const Pusher= require("pusher")

//App config
const app = express();
const port = process.env.PORT || 9000;
const connection_url = 'mongodb+srv://thuytrang:trang123@cluster0.eqrr5wa.mongodb.net/lab5'

const pusher = new Pusher({
    appId: "1521547",
    key: "217aed780f0b2fdd22c5",
    secret: "2e530e2ba95fa8a305ee",
    cluster: "ap2",
    useTLS: true
  });

//middleware
app.use(express.json());
app.use(cors());

//db config
mongoose.connect(connection_url)

//api endpoints
const db=mongoose.connection
db.once("open", () => {
    console.log("DB Connected")
    const msgCollection = db.collection("messagingmessages")
    const changeStream = msgCollection.watch()

    changeStream.on('change', change => {
        console.log(change)

        if(change.operationType ==="insert") {
            const messageDetails = change.fullDocument
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error trigerring Pusher')
        }
    })
})

app.get("/", (req,res) => res.status(200).send("Hello UIT guys"))

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

app.get('/messages/sync' , (req, res) => {
    Messages.find((err, data) => {
        if(err) {
            res.status(500). send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

//listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
