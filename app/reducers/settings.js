import * as settingsActions from '../actions/settings';
import assign from 'object-assign';

export default function settings(state, action) {
  var city;
  switch (action.type)
  {
  case settingsActions.ADD_CITY:
    city = getCity(action.cityId);
    return assign({}, state, {
      cities: [
        ...state.cities,
        {
          id: city.id,
          name: city.name
        }
      ]
    });
  case settingsActions.SET_CITY:
    city = state.cities.find((item) => {
      return item.id === action.cityId;
    });
    return assign({}, state, {
      currentCity: city.id
    });
  default:
    return state;
  }
}

function getCity(id) {
  var matched = require('../city_info.json')['city_info'].find((item) => {
    return item.id === id;
  });
  return { id: matched.id, name: matched.name };
}
