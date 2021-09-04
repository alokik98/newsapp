import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize : 10,
        category : 'general'
    }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false,
            page: 1,
            totalResults : 0
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80824168f5114660808171b0723618e8&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await  fetch(url);
        let parsedData = await data.json()
        this.setState({
          articles : parsedData.articles,
          loading : false
        })
    }

    async componentDidMount(){
        this.updateNews()
    }

    handlePrevClick = async () => {
        // console.log("Previous button is clicked");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80824168f5114660808171b0723618e8&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await  fetch(url);
        // let parsedData = await data.json()
        // this.setState({
        //   page: this.state.page - 1,
        //   articles : parsedData.articles,
        //   loading : false
        // })
        this.setState({
            page : this.state.page - 1
        })
        this.updateNews()
    }

    handleNextClick = async () => {
        console.log("Next Button is Clicked");
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80824168f5114660808171b0723618e8&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            // this.setState({loading: true});
            // let data = await  fetch(url);
            // let parsedData = await data.json()
            // this.setState({
            //   page: this.state.page + 1,
            //   articles : parsedData.articles,
            //   loading: false
            // })
        // }
        this.setState({
            page : this.state.page + 1
        })
        this.updateNews()
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin: "40px"}} >News - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=> {
                        return <div key={element.url} className="col-md-4 g-3">
                            <NewsItem title={element.title?element.title: ""} description={element.description?element.description: ""} imageUrl={element.urlToImage} 
                            newsUrl={element.url} author={element.author?element.author:"Unknown"} publishedAt={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
