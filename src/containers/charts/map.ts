import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ChartMapComponent from "../../components/charts/map";
import * as ChartMapModule from "../../modules/charts/map";

const mapStateToProps = (state: any) => {
  return {
    chartsMap: state.chartsMap
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(ChartMapModule, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartMapComponent);
