import { FETCH_COMPLIMENTS, SEND_COMPLIMENT } from "./types";

export function fetchCompliments() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(compliments =>
        dispatch({
          type: FETCH_COMPLIMENTS,
          compliments: compliments
        })
      );
  };
}

export function sendCompliment() {
  return function(dispatch) {
    return dispatch({
      type: SEND_COMPLIMENT
    });
  };
}
