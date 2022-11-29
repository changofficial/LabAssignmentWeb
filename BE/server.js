const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const Videos = require("./dbVideos")

//App Config
const app = express();
const port = process.env.PORT || 9000;
const connection_url = 'mongodb+srv://thuytrang:trang123@cluster0.eqrr5wa.mongodb.net/lab5'
//Middleware
app.use(express.json());
app.use(cors());

//DB Config
mongoose.connect(connection_url)
//API Endpoint
app.get("/", (req,res) => {
    res.status(200).send("He so lo, ho so ly ly")
})


app.post('/v2/posts', (req,res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
} )

app.get('/v2/posts', (req,res) => {
    Videos.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
} )
//Listener
app.listen(port, ()=>
 console.log(`Listening on localhost: ${port}`))