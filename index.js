const express = require('express');
const bodyParser = require('body-parser');
const InitiateMongoServer = require('./config/db.js');
const user = require("./routes/user");

InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use("/user", user);

app.get('/', (req, res) => {
    console.log('hello');
    console.log("rijal");
    console.log("andi");
    console.log("muti");
    res.json({message: "API Working"});
});

app.listen(PORT, (req, res) => {
    console.log(`Server started at port ${PORT}`);
})