export default function ArticleList({articleList, setArticleList}) {
    return (
        <div>
            <ul className="article-list">
                {articleList.map((article) => {
                    return (
                        <li key={article} className="article">
                            <h2 className="article-author">{article.author}</h2>
                            <img src={article.article_img_url} ></img>
                            <button className="article-votes">{article.votes}</button>
                            <p className="article-title">{article.title}</p>
                            <p className="article-topic">{article.topic}</p>                           
                             <p className="article-date">{(article.created_at).substring(11,16)} - {(article.created_at).substring(0,10)}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}