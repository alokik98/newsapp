import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
          "source": { "id": "fox-sports", "name": "Fox Sports" },
          "author": null,
          "title": "World Wrestling Entertainment  A Night Out with Eva Marie 'Out of Character' is on-location again, this time with WWE's Eva Marie at a fancy steakhouse in Las Vegas.",
          "description": "\"Out of Character\" is on-location again, this time with WWE's Eva Marie at a fancy steakhouse in Las Vegas.",
          "url": "http://www.foxsports.com/stories/wwe/eva-marie-on-wwe-return-relationship-with-fans-out-of-character-ryan-satin",
          "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/08/1408/814/evamarie.jpg?ve=1&tl=1",
          "publishedAt": "2021-09-01T05:52:27.8310427Z",
          "content": "By Ryan Satin FOX Sports Analyst \r\nWhat happens in Las Vegas usually stays there, but that doesn't apply to this weeks special \"Out of Character\" with guest Eva Marie.\r\nThe WWE star joined me for a n… [+6685 chars]"
        },
        {
          "source": { "id": "polygon", "name": "Polygon" },
          "author": "Owen S. Good",
          "title": "Apex Legends tap-strafing will be patched out, Respawn says",
          "description": "Respawn Entertainment said that “tap-strafing,” a technique Apex Legends players had developed allowing them to change direction in midair, would be patched out with the 10.1 update coming to the game soon.",
          "url": "https://www.polygon.com/22650910/apex-legends-tap-strafing-removed-patched-out-10-1-release-date",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/FsyNiPeTou_k40DoWuJSg1RcD38=/0x0:2048x1072/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/15969991/apex_legends_octane_kicking_mirage_2048.jpg",
          "publishedAt": "2021-08-31T19:54:45Z",
          "content": "Apex Legends developers will patch out tap strafing, a form of player movement used mainly by PC gamers that allows them to make sharp turns to evade or counterattack less mobile opponents. Respawn E… [+2571 chars]"
        },
        {
          "source": {
            "id": "the-washington-times",
            "name": "The Washington Times"
          },
          "author": "The Washington Times http://www.washingtontimes.com",
          "title": "Latest Quizzes",
          "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
          "url": "https://www.washingtontimes.com/quiz/",
          "urlToImage": null,
          "publishedAt": "2021-02-10T03:52:37.2719772Z",
          "content": "Featured Quizzes\r\nAttention all William Shakespeare experts. Pinpoint the prose's origin plucked from one of his many famous plays in this multiple-choice challenge.\r\n Shares \r\nName these legendary c… [+32652 chars]"
        },
        {
          "source": { "id": "the-lad-bible", "name": "The Lad Bible" },
          "author": null,
          "title": "Breaking Entertainment News - Celebrity & Showbiz News | LADbible",
          "description": "The latest entertainment news in the UK and worldwide on LADbible. We cover breaking celebrity news and showbiz stories. Check out our exclusives.",
          "url": "https://www.theladbible.com/entertainment",
          "urlToImage": null,
          "publishedAt": "2020-06-18T14:07:50.1068606Z",
          "content": "Netflix's new fantasy show, Cursed, will launch on 17 July"
        }
      ]

    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80824168f5114660808171b0723618e8&page=1";
        let data = await  fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles : parsedData.articles
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h1>News - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element)=> {
                        return <div key={element.url} className="col-md-4 g-3">
                            <NewsItem title={element.title?element.title: ""} description={element.description?element.description: ""} imageUrl={element.urlToImage} 
                            newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button className="btn btn-dark">Previous</button>
                    <button className="btn btn-dark">Next</button>
                </div>
            </div>
        )
    }
}

export default News
