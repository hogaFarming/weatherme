export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export function requestWeacher(cityId) {
  return {
    type: REQUEST_WEATHER,
    cityId: cityId
  };
}
