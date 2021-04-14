import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import thunk from "redux-thunk";

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialState) => createStore(rootReducer, initialState, applyMiddleware(apiMiddleware, thunk));
