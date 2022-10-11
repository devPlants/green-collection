require("dotenv/config");
const express = require("express");
const app = express();
const routes = require("./src/routes/routes.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
 
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`);
});
