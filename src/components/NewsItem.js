import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  return (
    <div>
      <div className="card">
        <img
          src={imageUrl ? imageUrl : "https://source.unsplash.com/500x500?news"}
          className="card-img-top"
          alt="news"
          style={{ height: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <span className="badge bg-secondary">{source}</span> <br />
            <small className="text-muted">
              By {author} on {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            rel="noopener noreferrer external"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More ...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
