require("dotenv").config();

const apiKey = process.env.REACT_APP_RAKUTEN_API_KEY;
const auth = process.env.REACT_APP_RAKUTEN_AUTH_KEY;
const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
const twillioToken = process.env.REACT_APP_ACC_TOKEN;
const twillioSID = process.env.REACT_APP_ACC_SID;
const twillioPhoneNumber = process.env.REACT_APP_KUDOS_PHONE;
const twillioDefaultUrl = process.env.REACT_APP_DEFAULT_URL;
const twillioEnTWIML = process.env.REACT_APP_EN_TWIML;

module.exports = {
  apiKey,
  auth,
  giphyApiKey,
  twillioToken,
  twillioSID,
  twillioPhoneNumber,
  twillioDefaultUrl,
  twillioEnTWIML
};
