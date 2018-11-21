import React, { Component } from "react";
import { connect } from "react-redux";
import { SelectField } from "material-ui";
import rakutenConfig from "./rakutenConfig";
import { dispatch } from "rxjs/internal/observable/range";

const RapidAPI = new require("rapidapi-connect");
const rapid = new RapidAPI(rakutenConfig.apiKey, rakutenConfig.auth);

class SlackButton extends Component {
  render() {
    return (
      <div className="slack-button">
        <h1>Slack!</h1>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   compliments: state.compliments
// });
// const mapDispatchToProps = dispatch => {
//   return {
//     getLocations: () => {
//       const res = getLocations();
//       dispatch(res);
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SlackButton);
