import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, hashHistory }  from 'react-router';

// store
import configureStore from './store/configureStore';

// containers
import WeatherPage from './containers/WeatherPage';
import SettingsPage from './containers/SettingsPage';
import App from './containers/App';

// action
import { fetchWeather } from './actions/weather';

// import css
import './css/main.css';

const defaultState = {
  weather: {},
  settings: {
    currentCity: 'CN101280101',
    cities: [
      { id: 'CN101280101', name: '广州' }
    ]
  }
};

const store = configureStore(defaultState);

const history = syncHistoryWithStore(hashHistory, store);

store.dispatch(fetchWeather('CN101280101'));

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
