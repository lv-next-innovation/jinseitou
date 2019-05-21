import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EventsFormComponent from "../../components/events/form";
import * as EventsForm from "../../modules/events/form";

const mapStateToProps = (state: any) => {
  return {
    form: state.EventsForm
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(EventsFormComponent, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsFormComponent);
