const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/bankingSys");

const historySchema = mongoose.Schema({
    day: Number,
    month: Number,
    year: Number,
    hour: Number,
    minute: Number,
    From: String,
    To: String,
    status: String,
    amountExchange: Number
});

const History = mongoose.model("History", historySchema);

const userSchema = mongoose.Schema({
    name: String,
    accountNumber: Number,
    balance: Number,
    phone: Number,
    email: String,
    address: String,
    history: [historySchema]
});

const User = mongoose.model("User", userSchema);
const defaultUsers = [];

app.get("/",function(req, res){
    res.sendFile(__dirname + "\\index.html");
});

app.listen(3000,function(){
    console.log("Our server is running at port 3000!");
});
