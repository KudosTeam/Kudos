const express = require("express");
const morgan = require("morgan");
const path = require("path");
const knex = require("../db/index");

const envConfig = require("./envConfig");
const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(envConfig.apiKey, envConfig.auth);
const bodyParser = require('body-parser')

const app = express();

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/compliments", (req, res) => {
  try {
    knex.select().table("compliments").then(compliments => {
      res.json(compliments);
    })
  } catch (err) {
    console.error("Error loading compliments!", err);
    res.sendStatus(500);
  }
})

app.post("/compliments", (req, res) => {
  try {
    const newItem = req.body;
    console.log(newItem);
    knex("compliments").insert(newItem)
      .then(function (result) {
        res.json({ success: true, message: 'ok' });     // respond back to request
      });
    knex.select().table("compliments").then(compliments => {
      console.log(compliments);
    })
    res.sendStatus(200);
  } catch (err) {
    console.error("Error saving compliment", err);
    res.sendStatus(500);
  }
})

app.get("/giphy", (req, res) => {
  rapid
    .call("Giphy", "getRandomGif", {
      tag: "flower",
      apiKey: envConfig.giphyApiKey
    })
    .on("success", payload => {
      const photos = payload.data.images.original.url;
      res.json(photos);
    })
    .on("error", payload => {
      console.log("Can't access giphy", payload);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
