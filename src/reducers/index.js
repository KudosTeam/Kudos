const initialState = {
  language: ["english", "japanese", "chinese"],
  selectedLanguage: undefined,
  compliments: [],
  selectedCompliment: "",
  phoneNO: undefined,
  selectedGiphy: undefined,
  isCalled: true,
  schedule: undefined
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
      return {
        ...state,
        selectedGiphy: action.selectedGiphy
      };
    case "SET_IS_CALLED":
      return {
        ...state,
        isCalled: action.isCalled
      };
    case "GO_HOME":
      return {
        ...state,
        isCalled: action.isCalled
      };
    case "SET_TIME":
      return {
        ...state,
        schedule: action.schedule
      };
    default:
      return state;
  }
}
