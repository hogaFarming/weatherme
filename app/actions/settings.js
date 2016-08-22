export const ADD_CITY = 'ADD_CITY';
export function addCity(id) {
  return {
    type: ADD_CITY,
    cityId: id
  };
}

export const SET_CITY = 'SET_CITY';
export function setCity(id) {
  return {
    type: SET_CITY,
    cityId: id
  };
}
