import axios from "axios";

const ncNews = axios.create({
    baseURL: "https://gawendas-gossip.onrender.com/api/",
    timeout: 10000
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
    return ncNews.post(`articles/${article_id}/comments` ,   {
      username: 'cooljmessy',
      body : comment
    } )
    .then((response) => {
      return response
    })
  }

  export function deleteComment(comment_id){
    return ncNews.delete(`comments/${comment_id}`)
    .then(()=>{
      return "deleted"
    })
  }



