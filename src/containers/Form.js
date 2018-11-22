import { connect } from "react-redux";
import Form from "../components/Form";
import {
  fetchCompliments,
  makeCall,
  selectCompliment,
  storePhone,
  saveCompliment
} from "../actions/index";

const mapStateToProps = state => ({
  compliments: state.compliments,
  selectedCompliment: state.selectedCompliment,
  isCalled: state.isCalled
});

const mapDispatchToProps = dispatch => {
  return {
    makeCall: isCalled => {
      const res = makeCall(isCalled);
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
    },
    saveCompliment: () => {
      const res = saveCompliment();
      dispatch(res);
    }
  };
};

export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
