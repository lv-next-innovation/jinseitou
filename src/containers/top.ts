import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TopComponent from "../components/top";
import * as TopModule from "../modules/top";

const mapStateToProps = (state: any) => {
  return {
    top: state.top
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(TopModule, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopComponent);
