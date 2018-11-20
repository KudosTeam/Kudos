export default {
  callnow: (language, compliment, phone) => {
    return {
      type: "CALL_NOW",
      language: language,
      compliment: compliment,
      phone: phone
    };
  }
};
