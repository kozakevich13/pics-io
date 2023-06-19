import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, []);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className="comments-container">
      <CommentForm onAddComment={handleAddComment} />
      <h2>Comments:</h2>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p className="user-name">{comment.user?.username || comment.name}</p>
          <div className="user-logo">
            <span className="initials">
              {comment.user?.username.charAt(0).toUpperCase() ||
                comment.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <p className="comment-body">{comment.body}</p>
          <button onClick={() => handleDeleteComment(index)}>Delete</button>
          <hr className="comment-divider" />
        </div>
      ))}
    </div>
  );
};

export default Comments;
