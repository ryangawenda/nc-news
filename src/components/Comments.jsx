import { Link, useLocation, useParams } from "react-router";
import { getComments } from "../api";
import React, { useEffect, useState } from "react";


export default function Comments({article_id,comments,setComments}){

      return (
        <div>
        <h2>Comments</h2>
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.comment_id} className="comment">
              <p className="comment-author">
                <strong>{comment.author}</strong>
              </p>
              <p className="comment-body">{comment.body}</p>
              <p className="comment-date">
                
              </p>
              <p className='comment-votes'>
                  Votes: {comment.votes}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
      
