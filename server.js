const express = require("express");
const app = express();
const routes = require("./src/routes/routes.js");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static("public"));

app.listen("8000", () => {
    console.log("Server running on port 8000!");
});
