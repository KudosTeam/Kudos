const express = require("express");
const morgan = require("morgan");
const path = require("path");
const VoiceResponse = require("twilio").twiml.VoiceResponse;

const envConfig = require("./envConfig");
const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(envConfig.apiKey, envConfig.auth);

const app = express();

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);
app.use(express.static(path.resolve(__dirname, "..", "build")));

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
