import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EventsFormComponent from "../../components/events/form";
import * as EventsFormModule from "../../modules/events/form";

const mapStateToProps = (state: any) => {
  return {
    eventsForm: state.eventsForm
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(EventsFormModule, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsFormComponent);
