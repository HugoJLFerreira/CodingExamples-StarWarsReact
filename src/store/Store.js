// @flow
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../redux/Reducer";

let logger = ({ getState }) => {
  return (next) => (action) => {
    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
};

let store;

if (process.env.NODE_ENV === "test") {
  store = createStore(reducer, applyMiddleware(thunk));
} else {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducer, composeEnhancer(applyMiddleware(thunk, logger)));
}

export default store;
