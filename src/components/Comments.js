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

      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
};

export default Comments;