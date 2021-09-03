import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false,
            page: 1,
            totalResults : 0
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80824168f5114660808171b0723618e8&page=1&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await  fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false
        })
    }

    handlePrevClick = async () => {
        console.log("Previous button is clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80824168f5114660808171b0723618e8&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await  fetch(url);
        let parsedData = await data.json()
        this.setState({
          page: this.state.page - 1,
          articles : parsedData.articles,
          loading : false
        })
    }

    handleNextClick = async () => {
        console.log("Next Button is Clicked");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80824168f5114660808171b0723618e8&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await  fetch(url);
            let parsedData = await data.json()
            this.setState({
              page: this.state.page + 1,
              articles : parsedData.articles,
              loading: false
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">News - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=> {
                        return <div key={element.url} className="col-md-4 g-3">
                            <NewsItem title={element.title?element.title: ""} description={element.description?element.description: ""} imageUrl={element.urlToImage} 
                            newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
