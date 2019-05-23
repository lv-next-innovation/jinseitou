import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DebugComponent from "../../components/local/debug";
import * as DebugModule from "../../modules/local/debug";

const mapStateToProps = (state: any) => {
  return {
    debug: state.debug
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(DebugModule, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DebugComponent);
