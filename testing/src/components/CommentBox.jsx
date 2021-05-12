import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //TODO - call action creator and save comment
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

export default CommentBox;
