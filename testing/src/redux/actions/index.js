import { SAVE_COMMENTS } from "redux/actions/types";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENTS,
    payload: comment,
  };
};
