import { connect } from "react-redux";
import Form from '../components/Form';
import { fetchCompliments, makeCall, storeCompliment } from '../actions/index';

const mapStateToProps = state => ({
    compliments: state.compliments,
    selectedCompliment: state.selectedCompliment
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
        storeCompliment: (event) => {
            const res = storeCompliment(event);
            dispatch(res);
        },
    };
};

export const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
