import { SAVE_COMMENTS } from "redux/actions/types";

const initialState = [];

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COMMENTS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentsReducer;
