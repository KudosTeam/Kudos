
const initialState = {
  language: ["english", "japanese", "chinese"],
  selectedLanguage: undefined,
  compliments: [],
  selectedCompliment: undefined,
  phoneNO: undefined
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_COMPLIMENTS":
      return { ...state, language: state.language, compliments: action.compliments };
    case "SET_SELECTED_COMPLIMENT":
      return {
        ...state,
        selectedCompliment: action.selectedCompliment
      }
    default:
      return state;
  }
}

