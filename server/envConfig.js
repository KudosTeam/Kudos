require("dotenv").config();

const apiKey = process.env.REACT_APP_RAKUTEN_API_KEY;
const auth = process.env.REACT_APP_RAKUTEN_AUTH_KEY;
const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;

module.exports = {
  apiKey,
  auth,
  giphyApiKey
};
