import express from "express";
import cors from "cors";
import fs from "fs";
var PORT = process.env.PORT || 3000;
var app = express();

app.use(cors());
app.use(express.static("data"));
app.use(express.json());
app.get("/products", function(req, res) {
    var phonesData = fs.readFileSync("./data/phones.json", "utf-8");
    res.statusCode = 200;
    res.send(JSON.parse(phonesData));
});
app.get("/products/:productId", function(req, res) {
    var data = JSON.parse(fs.readFileSync("./data/phones.json", "utf-8"));
    var name = data.find(function(phone) {
        return phone.id === req.params.productId;
    }).name;
    var phonePath = name.split(" ").join("-");
    var foundPhone = fs.readFileSync("./data/phones/".concat(phonePath.toLowerCase(), ".json"), "utf-8");
    res.send(JSON.parse(foundPhone));
});
app.get("/", function(req, res) {
    res.status(200).send("Hello World");

app.get("/", function(req, res) {
    res.status(200).send("Hello World 1234");

});
app.listen(PORT, function() {
    // eslint-disable-next-line no-console
    console.log("Server running on port ".concat(PORT));
});
