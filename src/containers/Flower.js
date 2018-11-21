import { connect } from "react-redux";
import Flower from "../components/Flower";
import { getGiphy } from "../actions/";
import { goHome } from "../actions/creators";

const mapStateToProps = state => ({
  selectedGiphy: state.selectedGiphy,
  isCalled: state.isCalled
});

const mapDispatchToProps = dispatch => {
  return {
    getGiphy: () => {
      const res = getGiphy();
      dispatch(res);
    },
    goHome: () => {
      dispatch(goHome());
    }
  };
};

export const FlowerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flower);
