import React, { useState } from "react";

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState({ name: "", body: "" });

  const handleInputChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(newComment);
    setNewComment({ name: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <h3>Add a Comment</h3>
      <input
        type="text"
        name="name"
        value={newComment.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        required
      />
      <textarea
        name="body"
        value={newComment.body}
        onChange={handleInputChange}
        placeholder="Your Comment"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
