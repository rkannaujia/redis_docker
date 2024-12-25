const express = require("express");
const dotenv = require("dotenv");
const config = require('./config/data/config.json');
const connectDb = require("./utils/MongoDB/db");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

connectDb();