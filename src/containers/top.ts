import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as TopModule from "../modules/top";
import TopComponent from "../components/top";

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
