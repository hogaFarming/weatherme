const apikey = 'e15ca3f81cc741aab78b9c039543a783';

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export function requestWeacher(cityId) {
  return {
    type: REQUEST_WEATHER,
    cityId: cityId
  };
}

export const GOT_WEATHER = 'GOT_WEATHER';
export function gotWeather(weather) {
  return {
    type: GOT_WEATHER,
    weather: weather
  };
}

export const GOT_WEATHER_ERROR = 'GOT_WEATHER_ERROR';
export function gotWeatherError(error) {
  return {
    type: GOT_WEATHER_ERROR,
    error: error
  };
}

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(cityId) {
  return function(dispatch) {
    dispatch(requestWeacher(cityId));

    const url = `https://api.heweather.com/x3/weather?cityid=${cityId}&key=${apikey}`;
    return fetch(url)
      .then(response => response.json())
      .then((json) => {
        try {
          const now = json['HeWeather data service 3.0'][0].now;
          const weatherParsed = {
            tmp: now.tmp,
            cond: now.cond.txt,
            wind: now.wind.dir,
            hum: now.hum
          };
          dispatch(gotWeather(weatherParsed));
        } catch(e) {
          console.error(e);
          dispatch(gotWeatherError(e));
        }
        
      });
  };
}
