import { combineReducers } from 'redux';
import assign from 'object-assign';

import weather from './weather';
import settings from './settings';

// const rootReducer = combineReducers({
//   weather,
//   settings
// });

const rootReducer = function(state, action) {
  return assign({}, state, {
    weather: weather(state.weather, action),
    settings: settings(state.settings, action)
  });
};

export default rootReducer;
