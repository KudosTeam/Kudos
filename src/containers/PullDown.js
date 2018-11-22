import { connect } from "react-redux";
import PullDown from "../components/PullDown";
import { selectCompliment } from "../actions/index";

const mapStateToProps = state => ({
    compliments: state.compliments,
    selectedCompliment: state.selectedCompliment,
});

const mapDispatchToProps = dispatch => {
    return {
        selectCompliment: event => {
            const res = selectCompliment(event);
            dispatch(res);
        },
    };
};

export const PullDownContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PullDown);
