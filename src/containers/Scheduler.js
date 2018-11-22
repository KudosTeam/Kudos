import { connect } from "react-redux";
import Scheduler from "../components/Scheduler";
import { setSchedule } from "../actions/index";

const mapStateToProps = state => ({
  schedule: state.schedule
});

const mapDispatchToProps = dispatch => {
  return {
    setSchedule: e => {
      const schedule = e.target.value;
      console.log("Schedule", schedule, e);
      const res = setSchedule(schedule);
      dispatch(res);
    }
  };
};

export const SchedulerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
