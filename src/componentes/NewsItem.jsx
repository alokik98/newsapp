import React from 'react'
import "./NewsItem.css"

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, publishedAt } = props;
    return (
        <div className="newsItem__card">
            <div className="newsItem__info">
                <h1>{title}</h1>
                <p className="newsItem__information">{description.length > 150 ? description.substr(0, 150) : description}</p>
                <div className="control">
                    <button className="btn"><span className="read__more">
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer">Read More</a>
                    </span></button>
                </div>
            </div>
            <div className="newsItem__image">
                <img src={imageUrl ? imageUrl : require('../images/newsImage.jpg')} alt="" />
                <div className="newsItem__extra">
                    <h2>Extra Information</h2>
                    <ul>
                        <li><strong>Author :</strong>{author}</li>
                        <li><strong>Source :</strong>{publishedAt}</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default NewsItem
