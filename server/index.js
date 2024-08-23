const express = require("express");
const cors = require('cors');
const  mongoose  = require("mongoose");
const { User } = require("./model/user");
const router = require('./routes/userroutes')

const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/aaveg-doc').then(()=>{
    console.log("Db connected");
});

app.use("/api" , router);  



app.listen(PORT, () => {
    console.log('App listening on port 8000!');
});



