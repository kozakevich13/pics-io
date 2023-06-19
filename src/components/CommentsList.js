import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";

const CommentsList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, []);

  const handleAddComment = (newComment) => {
    setComments([newComment, ...comments]);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className="comments-container">
      <CommentForm onAddComment={handleAddComment} />
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <div className="user-info">
            <div className="user-logo">
              <span className="initials">
                {comment.user?.username.charAt(0).toUpperCase() ||
                  comment.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="user-name">
              {comment.user?.username || comment.name}
            </div>
          </div>

          <div className="comment-body">{comment.body}</div>
          <button
            className="btn-delete"
            onClick={() => handleDeleteComment(index)}
          >
            <span className="delete-icon">X</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
