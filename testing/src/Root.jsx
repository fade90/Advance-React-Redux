import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

const Root = (props) => {
  return (
    <div>
      <Provider store={store}>{props.children}</Provider>
    </div>
  );
};

export default Root;
