import { connect } from "react-redux";
import Flower from "../components/Flower";
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

export const FlowerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flower);
