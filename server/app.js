const express = require("express");
const morgan = require("morgan");
const path = require("path");
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);
// Loading Static file
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/compliments", (req, res) => {
  console.log("HI EXPRESS");
  res.send("HI Express");
});

// Loading the first HTML
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
