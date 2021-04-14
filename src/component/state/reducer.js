import { GET_GDP_SUCCESS, GET_POPULATION_SUCCESS } from "./actions";

export const initialState = {
  populationData: [],
  gdpData: [],
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case GET_GDP_SUCCESS:
      return { ...state, gdpData: action.payload };
    case GET_POPULATION_SUCCESS:
      return { ...state, populationData: action.payload };
    default:
      return state;
  }
};

export default search;
