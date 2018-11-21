const express = require("express");
const morgan = require("morgan");
const path = require("path");
const VoiceResponse = require("twilio").twiml.VoiceResponse;

const rakutenConfig = require("./rakutenConfig");
const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(rakutenConfig.apiKey, rakutenConfig.auth);

const app = express();

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);
// Loading Static file
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/giphy", (req, res) => {
  try {
    rapid
      .call("Giphy", "getRandomGif", {
        tag: "flower",
        apiKey: "H6MPhTnX3r1Rdzye5a83DKMDAD4tzuAq"
      })
      .on("success", payload => {
        const photos = payload.data.images.original_still.url;
        res.json(photos);
      })
      .on("error", payload => {
        res.send("HELLO");
      });
  } catch (e) {
    res.send("HELLO");
  }
});

// Loading the first HTML
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
