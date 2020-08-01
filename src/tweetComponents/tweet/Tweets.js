import React, { Component } from 'react'
import { Consumer } from 'AnotherContext.js'
import Tweet from 'tweetComponents/tweet/Tweet.js'

class Tweets extends Component {
  render() {

    return(
      <Consumer>
      { value => {
        const { tweets } = value
        return (
          <React.Fragment>
          {tweets.map((tweet, index) => <Tweet
            key={index}
            index={index}
            tweet={tweet} />
          )}
          </React.Fragment>
        )
      }}
      </Consumer>

    )

  }
}

export default Tweets
