import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MainComponent from "../components/main";
import * as MainModule from "../modules/main";

const mapStateToProps = (state: any) => {
  return {
    main: state.main
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(MainModule, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
