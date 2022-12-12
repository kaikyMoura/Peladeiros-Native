const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 19001;
dotenv.config({path: './config.env'});

const app = require("./app");
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(db).then(() => console.log('Database connected!'));

app.listen(PORT, () => {
    console.log("Server listening port 19001");
});