import * as weatherActions from '../actions/weather';

export default function weather(state, action) {
  switch (action.type)
  {
  case weatherActions.REQUEST_WEATHER:
    var result = require('../mock/weather')[action.cityId];
    return {
      cond: result.cond.txt,
      tmp: result.tmp,
      wind: result.dir,
      hum: result.hum
    };
  default:
    return state;
  }
}
