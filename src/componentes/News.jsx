import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import "./News.css"

const News = ({ category }) => {
    const [articles, setArticles] = useState([])
    var article;

    const fetchNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_NEWS_KEY}`

        const response = await fetch(url);
        const data = await response.json()
        article = data.articles
        setArticles(article)
    }

    useEffect(() => {
        fetchNews(category)
        // eslint-disable-next-line
    }, [category])

    const capitializeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className='news__details'>
            <div className="news__heading">
                News - {capitializeFirstLetter(category)} Top Headlines
            </div>
            <div className="news__card">
                {
                    articles.map((article, index) => (
                        <NewsItem title={article.title}
                            description={article.description ? article.description : ""}
                            imageUrl={article.urlToImage}
                            newsUrl={article.url}
                            author={article.author ? article.author : "Anonymous"}
                            publishedAt={article.publishedAt}
                            source={article.source.name} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default News