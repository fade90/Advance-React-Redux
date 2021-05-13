import React from "react";
import { useSelector } from "react-redux";

const CommentList = () => {
  const { comments } = useSelector((store) => store);

  const renderComments = () => {
    return comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  };

  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
};

export default CommentList;
