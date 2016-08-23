import * as weatherActions from '../actions/weather';

export default function weather(state, action) {
  switch (action.type)
  {
  case weatherActions.REQUEST_WEATHER:
    return Object.assign({}, state, {
      isFetching: true
    });
  case weatherActions.GOT_WEATHER:
    return Object.assign({
      isFetching: false,
      error: ''
    }, state, action.weather);
  case weatherActions.GOT_WEATHER_ERROR:
    return {
      isFetching: false,
      error: action.error || '数据无效'
    };
  default:
    return state;
  }
}
