const path = require("path");
const express = require("express");

// console.log(__dirname+ "/../public");
// console.log(path.join(__dirname, '/../public'));

const publicPath = path.join(__dirname, '/../public');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

// app.listen(3000, () => {
app.listen(port, () => {
    console.log(`Server is up on port 3000`);
})