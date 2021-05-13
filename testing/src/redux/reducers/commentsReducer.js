import { SAVE_COMMENT } from "redux/actions/types";

const initialState = [];

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentsReducer;
