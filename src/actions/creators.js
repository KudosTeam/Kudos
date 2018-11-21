export function setCompliments(compliments) {
  return {
    type: "SET_COMPLIMENTS",
    compliments
  };
}

export function setSelectedCompliment(selectedCompliment) {
  return {
    type: "SET_SELECTED_COMPLIMENT",
    selectedCompliment
  };
}

export function setSelectedGiphy(giphyURL) {
  console.log("IN ACtion Cre", giphyURL);
  return {
    type: "SET_SELECTED_GIPHY",
    selectedGiphy: giphyURL
  };
}
