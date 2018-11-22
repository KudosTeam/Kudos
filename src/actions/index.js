import axios from "axios";
import {
  setCompliments,
  setSelectedCompliment,
  setPhone,
  setSelectedGiphy,
  setIsCalled
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
  return function (dispatch, getState) {
    return axios.get("/compliments").then(data => {
      const compliments = data.data.map(obj => obj.compliments);
      dispatch(setCompliments(compliments));
    });
  }
}

export function selectCompliment(event) {
  return function (dispatch, getState) {
    return (async () => {
      const input = event;
      let compliment;
      if (!input.target.outerText) {
        compliment = event.target.value;
      } else {
        console.log(event.target.outerText);
        compliment = event.target.outerText;
      }
      dispatch(setSelectedCompliment(compliment.replace(/\s+/g, "+")));
    })();
  };
}

export function makeCall(isCalled) {
  return function (dispatch, getState) {
    return (async () => {
      if (!getState().selectedCompliment)
        console.error("error: no compliment selected.");
      else if (!getState().phoneNO)
        console.error("error: no phone number entered.");
      else {
        console.log("Making call...");
        twilioObj.to = getState().phoneNO;
        twilioObj.url =
          defaultURL + "?compliment=" + getState().selectedCompliment;
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
    })();
  };
}

export function saveCompliment() {
  return function (dispatch, getState) {
    const compliments = getState().selectedCompliment.split("+").join(" ");
    if (!compliments) console.error("Please enter a compliment in the type field.")
    else {
      const toSend = { compliments };
      return axios.post("/compliments", toSend,
        { headers: { 'Content-Type': 'application/json' } });
    }
  }
}

export function storePhone(event) {
  return function (dispatch, getState) {
    return (async () => {
      const phoneNO = event.target.value;
      dispatch(setPhone(phoneNO));
    })();
  };
}

export function getGiphy() {
  return function (dispatch, getState) {
    return axios.get("/giphy").then(data => {
      const giphyURL = data.data;
      dispatch(setSelectedGiphy(giphyURL));
    });
  };
}
