import express from "express";
var PORT = 3000;
var app = express();
app.get("/test", function(req, res) {
    res.status(200).send("Hello World 1234");
});
app.listen(PORT, function() {
    console.log("Server running on port ".concat(PORT));
});
