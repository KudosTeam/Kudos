import { connect } from "react-redux";
import Form from "../components/Form";
import {
  fetchCompliments,
  makeCall,
  selectCompliment,
  storePhone
} from "../actions/index";

const mapStateToProps = state => ({
  compliments: state.compliments,
  selectedCompliment: state.selectedCompliment
});

const mapDispatchToProps = dispatch => {
  return {
    makeCall: () => {
      const res = makeCall();
      dispatch(res);
    },
    fetchCompliments: () => {
      const res = fetchCompliments();
      dispatch(res);
    },
    selectCompliment: event => {
      const res = selectCompliment(event);
      dispatch(res);
    },
    storePhone: event => {
      const res = storePhone(event);
      dispatch(res);
    }
  };
};

export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
