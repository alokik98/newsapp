import React, { useState } from "react";
import Navbar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  let pageSize = 15;
  let apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);
  setProgress(progress);

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar color="#fff" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              key="business"
              pageSize={this.pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              key="entertainment"
              pageSize={this.pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              key="health"
              pageSize={this.pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              key="science"
              pageSize={this.pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              key="sports"
              pageSize={this.pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              key="technology"
              pageSize={this.pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
