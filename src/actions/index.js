// TODO: add and export your own actions
export const BASE_URL = "https://wagon-garage-api.herokuapp.com";
export const FETCH_CARS = "FETCH_CARS";
export const ADD_CAR = 'ADD_CAR';
export const FETCH_CAR = 'FETCH_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';

export function fetchCars(garage) {
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const url = `${BASE_URL}/cars/${id}`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function addCar(garage, car, callback) {
  const url = `${BASE_URL}/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then(r => r.json())
    .then(() => callback());

  return {
    type: ADD_CAR,
    payload: request
  };
}

export function removeCar(car, history) {
  const url = `${BASE_URL}/cars/${car.id}`;
  const request = fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(''));

  return {
    type: REMOVE_CAR,
    payload: request
  };
}
