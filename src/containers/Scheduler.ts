import { connect } from "react-redux";
import { KudoThunkDispatch } from "../actions/thunks/types";
import { State } from "../reducers";
import Scheduler from "../components/Scheduler";
import { setSchedule } from "../actions/index";

const mapStateToProps = (state: State) => ({
  schedule: state.schedule
});

const mapDispatchToProps = (dispatch: KudoThunkDispatch) => ({
  setSchedule: (event: GenericChangeEvent<string>) =>
    dispatch(setSchedule(event.target.value))
});

export type SchedulerPropsMappedFromState = ReturnType<typeof mapStateToProps>;
export type SchedulerPropsMappedFromDispatch = ReturnType<
  typeof mapDispatchToProps
>;

export const SchedulerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
