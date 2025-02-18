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