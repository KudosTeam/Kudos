
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('kudos_5bf3b826e4b08725af2b0540', 'f037f202-2970-4780-a0b4-c09dab94c19a');
const ACC_TOKEN = '026afe4e6277f705c866d62f3a36b52f';
const ACC_SID = 'ACd055c0233ebb1a8e70d9fc8d06b26686';
const KUDOS_PHONE = '+19093231273';
const TWIML = 'https://handler.twilio.com/twiml/EH7ff97ebfb1842687d2c0931761a62423?compliment=Hello,+You+are+beautiful';
const twilioObj = {
    "accountSid": ACC_SID,
    "accountToken": ACC_TOKEN,
    "from": KUDOS_PHONE,
    "to": "+19095252566",
    "url": TWIML
}


function makeCall() {
    rapid.call('Twilio', 'makeCall', twilioObj).on('success', (payload) => {
        console.log('call success');
    }).on('error', (payload) => {
        console.error('error: call did not go through');
    });;
}

makeCall();