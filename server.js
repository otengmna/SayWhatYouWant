
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
//npm install concurrently

const noteRouter = require("./routes/note-router");

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(bodyParser.json())


mongoose.connect("mongodb+srv://admin-noel:" + process.env.SERVER_MONGO_ATLAS_PASSWORD + "@cluster0.lfyls.mongodb.net/notesDB",
{useNewUrlParser: true,
useUnifiedTopology: true});

app.use("/api", noteRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
