import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import assign from 'object-assign';

import * as settingsActions from '../actions/settings';
import * as weatherActions from '../actions/weather';
import App from './App';

const actions = assign({}, settingsActions, weatherActions);

function mapStateToProps(state) {
  return {
    weather: state.weather,
    settings: state.settings
  };
}

function mapDispatchToProps(dipatch) {
  return bindActionCreators(actions, dipatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
