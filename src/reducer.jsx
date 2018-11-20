const initialState = {
  language: ["english", "japanese", "chinese"],
  selectedLanguage: undefined,
  compliments: [],
  selectedCompliment: undefined,
  phoneNO: undefined
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CALL_NOW":
      return {
        selectedLanguage: action.language,
        selectedCompliment: action.compliment,
        phoneNO: action.phone
      };
    default:
      return state;
  }
}
