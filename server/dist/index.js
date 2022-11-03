import express from "express";
var PORT = process.env.PORT || 3000;
var app = express();
app.get("/", function(req, res) {
    res.status(200).send("Hello World 1234");
});
app.listen(PORT, function() {
    // eslint-disable-next-line no-console
    console.log("Server running on port ".concat(PORT));
});
