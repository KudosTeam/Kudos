import { connect } from "react-redux";
import Form from '../components/Form';
import { fetchCompliments, sendCompliment, } from '../actions/index';
import { makeCall } from '../utils/index';

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
        sendCompliment: () => {
            const res = sendCompliment();
            dispatch(res);
        },
    };
};

export const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
