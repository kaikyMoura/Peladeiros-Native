const cors = require("cors");
const express = require("express");
const router = require("./routers/userRouter");

const app = express();

// 1) MIDDLEWARES
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toDateString();
    next();
});

app.use("/", router);

module.exports = app;