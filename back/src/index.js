"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userRoutes_1 = require("./routes/userRoutes");
var cors = require("cors");
var app = express();
app.get("/", function (req, res) {
    var data = {
        name: "Kainom",
        age: "21",
    };
    res.status(200).header("Access-Control-Allow-Origin", "*").json({
        data: data,
        enter: true,
    });
});
var options = {
    origin: "*",
    credentials: true,
};
app.use(express.json());
app.use(cors(options));
app.use(express.urlencoded({ extended: true }));
app.listen(3000, function () {
    return console.log("I'm running");
});
app.use("/users", userRoutes_1.default);
