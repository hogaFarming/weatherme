import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';

import * as settingsActions from './actions/settings';
import * as weatherActions from './actions/weather';
import configureStore from './store/configureStore';
import Appcontainer from './components/Appcontainer';

// import css
import css from './css/main.css';

const defaultState = {
  weather: {},
  settings: {
    currentCity: '',
    cities: []
  }
};
const store = configureStore(defaultState);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(settingsActions.addCity('CN101280101'));
store.dispatch(settingsActions.setCity('CN101280101'));
store.dispatch(weatherActions.requestWeacher('CN101280101'));

render(
  <Provider store={store}>
    <Appcontainer />
  </Provider>,
  document.getElementById('root')
);

