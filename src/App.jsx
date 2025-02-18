import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList"
import { Link } from "react-router";
import getArticles from './api';

function App() {
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
    <>
      
      <Routes>
        <Route
          path="/"
          element={<ArticleList articleList={articleList} setArticleList={setArticleList} />}
        ></Route>
      </Routes>
    </>
  )
}

export default App