const RapidAPI = require("rapidapi-connect");
const envConfig = require("../../envConfig");
const rapid = new RapidAPI(envConfig.apiKey, envConfig.auth);

let twilioObj = {
  accountSid: envConfig.twillioSID,
  accountToken: envConfig.twillioToken,
  from: envConfig.twillioPhoneNumber,
  to: "+19095252566",
  url: envConfig.twillioEnTWIML
};

const defaultURL = envConfig.twillioDefaultUrl;

exports.create = async (req, res) => {
  const { phoneNO, selectedCompliment, schedule } = req.body.params;

  twilioObj.to = phoneNO;
  twilioObj.url =
    defaultURL + "?compliment=" + selectedCompliment.replace(/\s+/g, "+");

  if (schedule) {
    const delay = timeDiff(schedule);
    const twilioClone = { ...twilioObj };
    setTimeout(() => {
      rapid
        .call("Twilio", "makeCall", twilioClone)
        .on("success", () => {
          console.log("call success");
          res.sendStatus(200);
        })
        .on("error", () => {
          console.error("error: call did not go through");
          res.sendStatus(500);
        });
    }, delay);
  } else {
    rapid
      .call("Twilio", "makeCall", twilioObj)
      .on("success", () => {
        console.log("call success");
        res.sendStatus(200);
      })
      .on("error", () => {
        console.error("error: call did not go through");
        res.sendStatus(500);
      });
  }
};

const timeDiff = schedule => {
  const now = new Date();
  const currentDate = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    hour: now.getHours(),
    min: now.getMinutes()
  };
  const delay =
    (schedule.min - currentDate.min) * 60000 +
    (schedule.hour - currentDate.hour) * 3600000 +
    (schedule.day - currentDate.day) * 86400000 +
    (schedule.month - currentDate.month) * 2592000000 +
    (schedule.year - currentDate.year) * 31104000000;
  return delay;
};
