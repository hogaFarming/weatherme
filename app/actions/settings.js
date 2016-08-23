export const ADD_CITY = 'ADD_CITY';
export function addCity(name) {
  const city = getCity(name);
  return {
    type: ADD_CITY,
    city: city
  };
}

export const SET_CITY = 'SET_CITY';
export function setCity(id) {
  return {
    type: SET_CITY,
    cityId: id
  };
}

function getCity(name) {
  const matched = require('../city_info.json')['city_info'].find((item) => {
    return item.city === name;
  });
  return matched ? { id: matched.id, name: matched.city } : null;
}
