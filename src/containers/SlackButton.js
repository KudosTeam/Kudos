import { connect } from "react-redux";
import SlackButton from "../components/SlackButton";
import { makeCall } from "../utils/index";

const mapStateToProps = state => ({
  compliments: state.compliments
});

const mapDispatchToProps = dispatch => {
  return {
    makeCall: () => {
      const res = makeCall();
      dispatch(res);
    }
  };
};

export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
