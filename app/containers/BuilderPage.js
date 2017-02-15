import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Builder from '../components/Builder';
import ModuleBuilder from '../components/ModuleBuilder';
import * as BuilderActions from '../actions/builder';

function mapStateToProps(state) {
  return {
    builder: state.builder,
    modules: state.modules
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BuilderActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleBuilder);
