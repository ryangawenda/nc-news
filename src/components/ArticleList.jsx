import { Link } from "react-router-dom"; 
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from 'react'
import getArticles from "../api";

export default function ArticleList() {
    const [articleList, setArticleList] = useState([])
    const [loading, setLoading] = useState(true)
  useEffect(() => {
    getArticles().then((articles) => {
      setArticleList(articles);
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading){
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ul className="article-list">
        {articleList.map((article) => {
          return (
            <li key={article.article_id} className="article"> 
{             
}              <Link to={`/articles/${article.article_id}`}
              state={{article}} > 
                <ArticleCard article={article} /> 
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}