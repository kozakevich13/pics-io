import React, { useState, useEffect } from "react";

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState(() => {
    const storedComment = localStorage.getItem("newComment");
    return storedComment ? JSON.parse(storedComment) : { name: "", body: "" };
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(newComment);
    setNewComment({ name: "", body: "" });
  };

  useEffect(() => {
    localStorage.setItem("newComment", JSON.stringify(newComment));
  }, [newComment]);

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
