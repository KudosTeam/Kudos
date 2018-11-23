import { connect } from "react-redux";
import TypeSave from "../components/TypeSave";
import {
    fetchCompliments,
    selectCompliment,
    saveCompliment
} from "../actions/index";

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
        selectCompliment: event => {
            const res = selectCompliment(event);
            dispatch(res);
        },
        saveCompliment: () => {
            const res = saveCompliment();
            dispatch(res);
        }
    };
};

export const TypeSaveContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TypeSave);
