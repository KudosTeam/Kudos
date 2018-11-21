const initialState = {
  language: ["english", "japanese", "chinese"],
  selectedLanguage: undefined,
  compliments: [],
  selectedCompliment: "",
  phoneNO: undefined,
  selectedGiphy: undefined
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_COMPLIMENTS":
      return {
        ...state,
        language: state.language,
        compliments: action.compliments
      };
    case "SET_SELECTED_COMPLIMENT":
      return {
        ...state,
        selectedCompliment: action.selectedCompliment
      };
    case "SET_PHONE":
      return { ...state, phoneNO: action.phoneNO };

    case "SET_SELECTED_GIPHY":
      console.log("REDUCER", action.selectedGiphy);
      return {
        ...state,
        selectedGiphy: action.selectedGiphy
      };
    default:
      return state;
  }
}
