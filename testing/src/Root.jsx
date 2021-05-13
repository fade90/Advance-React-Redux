import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxPromise from "redux-promise";
import rootReducer from "./redux/rootReducer";

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(reduxPromise))
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
