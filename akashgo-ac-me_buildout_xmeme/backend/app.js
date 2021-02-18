const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
app.use(cors());

let port = process.env.PORT || 8081;
// import routes

const postsRoute = require("./routes/posts");
const memeRoute = require("./routes/memes");

//middleware use

app.use(bodyParser.json());

app.use('/posts', postsRoute); // this is for testing
app.use('/memes', memeRoute);


//Routes//

app.get("/", (req, res) => {
    res.send("good to go ");
});

// connecting to DB
mongoose.connect(
    'mongodb://localhost:27017/myapp',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to local Db")
);
// PORT 3000
app.listen(port);
