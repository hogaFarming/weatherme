import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as settingsAcitons from '../actions/settings';
import Settings from '../components/Settings';

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(settingsAcitons, dispatch);
}

const SettingsPage = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsPage;
