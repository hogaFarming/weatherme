import * as settingsActions from '../actions/settings';
import assign from 'object-assign';

export default function settings(state, action) {
  let city;
  switch (action.type)
  {
  case settingsActions.ADD_CITY:
    return action.city ? assign({}, state, {
      cities: [
        ...state.cities,
        action.city
      ]
    }) : state;
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
