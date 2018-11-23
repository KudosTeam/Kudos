import { connect } from "react-redux";
import Form from "../components/Form";
import { fetchCompliments } from "../actions/index";

const mapStateToProps = state => ({
  compliments: state.compliments,
  selectedCompliment: state.selectedCompliment,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCompliments: () => {
      const res = fetchCompliments();
      dispatch(res);
    },
  };
};

export const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
