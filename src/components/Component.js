import React, { useState, useEffect } from "react";

const Component = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", body: "" });

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, []);

  const handleInputChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment({ name: "", body: "" });
  };

  return (
    <div className="comments-container">
      <h2>Comments:</h2>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p className="comment-name">
            {comment.user?.username || comment.name}
          </p>
          <p className="comment-body">{comment.body}</p>
          <hr className="comment-divider" />
        </div>
      ))}

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
    </div>
  );
};

export default Component;
