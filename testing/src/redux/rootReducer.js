import { combineReducers } from "redux";
import commentsReducer from "../redux/reducers/commentsReducer";

export default combineReducers({
  comments: commentsReducer,
});
