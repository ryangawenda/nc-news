import { Link, useLocation, useParams } from "react-router";
import { getComments, postComment, deleteComment } from "../api";
import React, { useEffect, useState } from "react";

export default function Comments({ article_id, comments, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setdeleteLoading] = useState(false);

  function submitComment() {
    const commentDraft = newComment
    setNewComment("")
    if (commentDraft.length === 0) {
      return;
    }
    setLoading(true);
    postComment(article_id, commentDraft)
      .then((response) => {
        setComments((prevComments) => {
          return [response.data.comment, ...prevComments];
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleComment(comment_id) {
    setdeleteLoading(true);
    deleteComment(comment_id)
      .then((response) => {
        setComments((prevComments) => {
          return prevComments.filter((comment) => {
            return comment.comment_id !== comment_id;
          });
        });
      })
      .finally(() => {
        setdeleteLoading(false);
      });
  }
  useEffect(() => {}, [comments]);

  return (
    <div>
      <h2>Comments</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitComment();
        }}
        className="comment-form"
      >
        <p>Want to post a comment?</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="comment-input"
          />
          <button type="submit" className="submit-button">
            Post Comment
          </button>
          {loading && <div className="loader"></div>}
        </div>
      </form>
      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.comment_id} className="comment">
            <p className="comment-author">
              <strong>{comment.author}</strong>
            </p>
            <p className="comment-body">{comment.body}</p>
            <p className="comment-date"></p>
            <p className="comment-votes">Votes: {comment.votes}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleComment(comment.comment_id);
              }}
            >
              <button type="submit" className="submit-button">
                Delete Comment
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
