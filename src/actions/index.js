import axios from "axios";
import {
  setCompliments,
  setSelectedCompliment,
  setPhone,
  setSelectedGiphy,
  setIsCalled,
  setTime
} from "./creators";
const RapidAPI = new require("rapidapi-connect");
const rapid = new RapidAPI(
  "kudos_5bf3b826e4b08725af2b0540",
  "f037f202-2970-4780-a0b4-c09dab94c19a"
);
const ACC_TOKEN = "026afe4e6277f705c866d62f3a36b52f";
const ACC_SID = "ACd055c0233ebb1a8e70d9fc8d06b26686";
const KUDOS_PHONE = "+19093231273";
const defaultURL =
  "https://handler.twilio.com/twiml/EH7ff97ebfb1842687d2c0931761a62423";
const EN_TWIML =
  "https://handler.twilio.com/twiml/EH7ff97ebfb1842687d2c0931761a62423?compliment=You+have+a+nice+butt";
// const JP_TWIML = 'https://handler.twilio.com/twiml/EH05cdd386c865f0b752cd525f1c362029?compliment=あなたは素敵な顔をしています';
// const CH_TWIML = 'https://handler.twilio.com/twiml/EHa28b6c79d7f510a6deace6369ccf4106?compliment=你很帅';

let twilioObj = {
  accountSid: ACC_SID,
  accountToken: ACC_TOKEN,
  from: KUDOS_PHONE,
  to: "+19095252566",
  url: EN_TWIML
};

export function fetchCompliments() {
  return function(dispatch, getState) {
    return axios.get("/compliments").then(data => {
      const compliments = data.data.map(obj => obj.compliments);
      console.log("compliments", compliments);
      dispatch(setCompliments(compliments));
    });
  };
}

export function selectCompliment(event) {
  return function(dispatch, getState) {
    return (async () => {
      const input = event;
      let compliment;
      if (!input.target.outerText) {
        compliment = event.target.value;
      } else {
        console.log(event.target.outerText);
        compliment = event.target.outerText;
      }
      dispatch(setSelectedCompliment(compliment));
    })();
  };
}

export function makeCall(isCalled) {
  return function(dispatch, getState) {
    return (async () => {
      if (
        !getState().selectedCompliment ||
        getState().selectedCompliment === "Enter a compliment."
      )
        console.error("error: no compliment selected.");
      else if (!getState().phoneNO)
        console.error("error: no phone number entered.");
      else {
        console.log("Making call...");
        twilioObj.to = getState().phoneNO;
        twilioObj.url =
          defaultURL +
          "?compliment=" +
          getState().selectedCompliment.replace(/\s+/g, "+");

        const schedule = getState().schedule;
        if (schedule) {
          const delay = timeDiff(schedule);
          const twilioClone = { ...twilioObj };
          dispatch(setIsCalled(!isCalled));
          setTimeout(() => {
            rapid
              .call("Twilio", "makeCall", twilioClone)
              .on("success", payload => {
                console.log("call success");
              })
              .on("error", payload => {
                console.error("error: call did not go through");
              });
          }, delay);
        } else {
          rapid
            .call("Twilio", "makeCall", twilioObj)
            .on("success", payload => {
              dispatch(setIsCalled(!isCalled));
              console.log("call success");
            })
            .on("error", payload => {
              console.error("error: call did not go through");
            });
        }
      }
    })();
  };
}

export function saveCompliment() {
  return function(dispatch, getState) {
    const compliments = getState()
      .selectedCompliment.split("+")
      .join(" ");
    if (!compliments)
      console.error("Please enter a compliment in the type field.");
    else {
      const toSend = { compliments };
      return axios.post("/compliments", toSend, {
        headers: { "Content-Type": "application/json" }
      });
    }
  };
}
function timeDiff(schedule) {
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
}

export function storePhone(event) {
  return function(dispatch, getState) {
    const phoneNO = event.target.value;
    dispatch(setPhone(phoneNO));
  };
}

export function getGiphy() {
  return function(dispatch, getState) {
    return axios.get("/giphy").then(data => {
      const giphyURL = data.data;
      dispatch(setSelectedGiphy(giphyURL));
    });
  };
}

export function setSchedule(schedule) {
  return function(dispatch, getState) {
    const date = {
      year: Number(schedule.substr(0, 4)),
      month: Number(schedule.substr(5, 2)),
      day: Number(schedule.substr(8, 2)),
      hour: Number(schedule.substr(11, 2)),
      min: Number(schedule.substr(14, 2))
    };
    dispatch(setTime(date));
  };
}
