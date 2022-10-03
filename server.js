require("dotenv/config");
const express = require("express");
const app = express();
const routes = require("./src/routes/routes.js");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static("public"));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`);
});
