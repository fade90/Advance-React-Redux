import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import * as actions from "redux/actions";
import { saveComment } from "redux/actions";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(comment);

    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a commment</h4>
      <textarea onChange={handleChange} value={comment} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, actions)(CommentBox);
