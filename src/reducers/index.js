export const initialState = {
  language: ["english", "japanese", "chinese"],
  selectedLanguage: undefined,
  compliments: [],
  selectedCompliment: "",
  phoneNO: undefined,
  selectedGiphy: undefined,
  isCalled: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COMPLIMENTS":
      return {
        ...state,
        compliments: action.compliments
      }
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
    default:
      return state;
  }
}
