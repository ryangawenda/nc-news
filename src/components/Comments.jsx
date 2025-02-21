import { Link, useLocation, useParams } from "react-router";
import { getComments, postComment } from "../api";
import React, { useEffect, useState } from "react";

export default function Comments({ article_id, comments, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  function submitComment() {
    if(newComment.length === 0){
        return;
    }
    setLoading(true);
    postComment(article_id, newComment)
    .then((response)=>{
        console.log(response.data.comment)
        console.log(comments)
        setComments((prevComments) => {
            console.log("Previous Comments:", prevComments);
            return [response.data.comment, ...prevComments];  
          });
    })
    .finally(() => {
        setLoading(false)

    });
  }

  function deleteComment(comment_id){
    
  }
  useEffect(() => {
    console.log("Updated Comments in Comments component:", comments);
  }, [comments]);  
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
        <div style={{display:"flex", alignItems:"center",justifyContent:"center" }}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          
          className="comment-input"
        />
        <button type="submit" className="submit-button">
          Post Comment
        </button>{loading &&(<div className="loader"></div>)}
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
          </li>
        ))}
      </ul>
    </div>
  );
}
