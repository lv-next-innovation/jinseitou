import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BlogsFormComponent from "../../components/blogs/form";
import * as BlogsForm from "../../modules/blogs/form";

const mapStateToProps = (state: any) => {
  return {
    form: state.blogsForm
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(BlogsFormComponent, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogsFormComponent);
