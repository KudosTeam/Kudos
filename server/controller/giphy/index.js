const RapidAPI = require("rapidapi-connect");
const envConfig = require("../../envConfig");
const rapid = new RapidAPI(envConfig.apiKey, envConfig.auth);

exports.list = async (req, res) => {
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
};
