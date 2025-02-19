import axios from "axios";

const ncNews = axios.create({
    baseURL: "https://gawendas-gossip.onrender.com/api/",
  });

  export default function getArticles(){
    return ncNews.get("articles")
    .then((response) => {
        return response.data.articles
    })
  }

  export function getArticle(article_id){

    return ncNews.get(`articles/${article_id}`)
    .then((response) => {
        return response
    })

  }