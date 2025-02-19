import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList"
import ArticleCard from "./components/ArticleCard"
import { Link } from "react-router";
import getArticles from './api';

function App() {



  return (
    <>
      
      <Routes>
        <Route
          path="/"
          element={<ArticleList/>}
        ></Route>

        <Route
        path='/articles/:article_id'
        element={<ArticleCard/>}>
      </Route>
        </Routes>
    </>
  )
}

export default App