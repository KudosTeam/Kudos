import { connect } from "react-redux";
import Flower from "../components/Flower";
import { getGiphy } from "../actions/";

const mapStateToProps = state => ({
  selectedGiphy: state.selectedGiphy
});

const mapDispatchToProps = dispatch => {
  return {
    getGiphy: () => {
      const res = getGiphy();
      dispatch(res);
    }
  };
};

export const FlowerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flower);
