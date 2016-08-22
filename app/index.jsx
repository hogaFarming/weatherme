import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import * as settingsActions from './actions/settings';
import * as weatherActions from './actions/weather';
import configureStore from './store/configureStore';
import WeatherPage from './containers/WeatherPage';
import SettingsPage from './containers/SettingsPage';
import App from './containers/App';
import { Router, Route, IndexRoute, hashHistory }  from 'react-router';

import './css/main.css';

const defaultState = {
  weather: {},
  settings: {
    currentCity: '',
    cities: []
  }
};
const store = configureStore(defaultState);
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={WeatherPage} />
        <Route path="/settings" component={SettingsPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(settingsActions.addCity('CN101280101'));
store.dispatch(settingsActions.setCity('CN101280101'));
store.dispatch(weatherActions.requestWeacher('CN101280101'));
