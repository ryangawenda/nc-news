import { Link, useLocation, useParams } from "react-router";
import { getArticle, upVote } from "../api";
import React, { useEffect, useState } from "react";

export default function ArticleCard({ article : passedArticle }) {
  let { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(passedArticle)
  const [articlePage, setArticlePage] = useState(false)
  article_id = article_id * 1;


  useEffect(() => {
    if (passedArticle && passedArticle.title) { 
        setLoading(false)
        return;
    }

    if (!article_id) {
      setLoading(false);
      return;
    }

    
    getArticle(article_id)
      .then((article) => {
        setArticlePage(true)
        setLoading(true)
        setArticle(article.data.article);
      })
      .finally(() => {
        setLoading(false);
      });
}
, [article_id, passedArticle]);
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleUpvote = () => {
    upVote(article_id).then(() => {
      setArticle((prevArticle) => ({
        ...prevArticle,
        votes: prevArticle.votes + 1, 
      }));
    });
  };
  return (
    
    <div className="article-list">
      <h2 className="article-author">{article.author}</h2>
      <img src={article.article_img_url}></img>
      {articlePage && (
  <button className="article-votes" onClick= {handleUpvote}>{article.votes}</button>
)}
      <p className="article-title">{article.title}</p>
      <p className="article-body">{articlePage ? article.body : "" }</p>
      <p className="article-topic">{article.topic}</p>
      <p className="article-date">
        {article.created_at.substring(11, 16)} -{" "}
        {article.created_at.substring(0, 10)}
      </p>

    </div>
  );
}
