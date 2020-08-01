import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Head from 'tweetComponents/design/Head.js'
import Tweets from 'tweetComponents/tweet/Tweets.js'
import AddTweet from 'tweetComponents/tweet/AddTweet.js'
import About from 'tweetComponents/pages/About.js'
import NotFound from 'tweetComponents/pages/NotFound.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'AnotherContext.js'

class App extends React.Component {
  render() {
    return(
      <Provider>
        <Router>
          <div className="App">
            <Head branding='Tweet App'/>
            <div className="container">
              <Switch>
                <Route exact path ='/' component={Tweets} />
                <Route exact path ='/tweet' component={AddTweet} />
                <Route exact path ='/about' component={About} />
                <Route component = {NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
