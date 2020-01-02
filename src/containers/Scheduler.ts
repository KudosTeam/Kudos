import { connect } from "react-redux";
import { KudoThunkDispatch, KudoThunkAction } from "../actions/thunks/types";
import { State } from "../reducers";
import Scheduler from "../components/Scheduler";
import { setTime } from "../actions/creators";

const setSchedule = (schedule: any): KudoThunkAction<void> => dispatch => {
  const date = {
    year: Number(schedule.substr(0, 4)),
    month: Number(schedule.substr(5, 2)),
    day: Number(schedule.substr(8, 2)),
    hour: Number(schedule.substr(11, 2)),
    min: Number(schedule.substr(14, 2))
  };
  dispatch(setTime(date));
};

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
