import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "redux/actions/types";

const BASE_URL = "http://jsonplaceholder.typicode.com/comments";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = async () => {
  const response = await axios.get(BASE_URL);

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};
