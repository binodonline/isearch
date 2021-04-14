import { RSAA } from "redux-api-middleware";

export const GET_GDP_REQUEST = "GET_GDP_REQUEST";
export const GET_GDP_SUCCESS = "GET_GDP_SUCCESS";
export const GET_GDP_FAILURE = "GET_GDP_FAILURE";

export const GET_POPULATION_REQUEST = "GET_POPULATION_REQUEST";
export const GET_POPULATION_SUCCESS = "GET_POPULATION_SUCCESS";
export const GET_POPULATION_FAILURE = "GET_POPULATION_FAILURE";

export const getGDP = (year) => (dispatch) => {
  const action = {
    [RSAA]: {
      endpoint: `http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&date=${year}`,
      method: "GET",
      types: [GET_GDP_REQUEST, GET_GDP_SUCCESS, GET_GDP_FAILURE],
    },
  };

  return dispatch(action);
};

export const getPopulation = (year) => (dispatch) => {
  const action = {
    [RSAA]: {
      endpoint: `http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&date=${year}`,
      method: "GET",
      types: [GET_POPULATION_REQUEST, GET_POPULATION_SUCCESS, GET_POPULATION_FAILURE],
    },
  };

  return dispatch(action);
};
