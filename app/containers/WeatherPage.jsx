import assign from 'object-assign';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions/weather';
import * as settingsAcitons from '../actions/settings';
import Weather from '../components/Weather';

function mapStateToProps(state) {
  return assign({}, state);
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(assign({}, weatherActions, settingsAcitons), dispatch);
}

const WeatherPage = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default WeatherPage;
