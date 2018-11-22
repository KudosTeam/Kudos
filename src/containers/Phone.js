import { connect } from "react-redux";
import Phone from "../components/Phone";
import {
    makeCall,
    storePhone,
} from "../actions/index";

const mapStateToProps = state => ({
    compliments: state.compliments,
    selectedCompliment: state.selectedCompliment,
    isCalled: state.isCalled,
    schedule: state.schedule
});

const mapDispatchToProps = dispatch => {
    return {
        makeCall: isCalled => {
            const res = makeCall(isCalled);
            dispatch(res);
        },
        storePhone: event => {
            const res = storePhone(event);
            dispatch(res);
        },
    };
};

export const PhoneContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Phone);
