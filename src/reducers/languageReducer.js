export default function languageReducer(state = { language: "EN" }, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, language: action.language }

    default:
      return state
  }
}
