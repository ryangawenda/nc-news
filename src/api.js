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


  export function upVote(article_id){
    
    return ncNews.patch(`articles/${article_id}`,{ inc_votes : 1 })
    .then((response) => {
      return response
    })
  }

  export function getComments(article_id){
    return ncNews.get(`articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments
    })
  }

  export function postComment(article_id,comment){
    console.log(typeof comment)
    console.log(article_id)
    return ncNews.post(`articles/${article_id}/comments` ,   {
      username: 'cooljmessy',
      body : comment
    } )
    .then((response) => {
      console.log(response)
      return response
    })
  }

