import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ItosFormComponent from "../../components/itos/form";
import * as ItosFormModule from "../../modules/itos/form";

const mapStateToProps = (state: any) => {
  return {
    itosForm: state.itosForm
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(ItosFormModule, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItosFormComponent);
