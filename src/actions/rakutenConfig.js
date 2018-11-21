require("dotenv").config();

const apiKey = process.env.REACT_APP_RAPID_API_KEY;
const auth = process.env.REACT_APP_RAKUTEN_AUTH;

module.exports = {
  apiKey,
  auth
};
