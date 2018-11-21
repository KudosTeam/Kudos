import { connect } from "react-redux";
import Form from '../components/Form';
import { fetchCompliments, makeCall, storeCompliment } from '../actions/index';
// import { makeCall } from '../utils/index';

const mapStateToProps = state => ({
    compliments: state.compliments
});

const mapDispatchToProps = (dispatch) => {
    return {
        makeCall: () => {
            const res = makeCall();
            dispatch(res);
        },
        fetchCompliments: () => {
            const res = fetchCompliments();
            dispatch(res);
        },
        storeCompliment: () => {
            const res = storeCompliment();
            dispatch(res);
        },
    };
};

export const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
