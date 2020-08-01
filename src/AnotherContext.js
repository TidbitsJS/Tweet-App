import React from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_TWEET' :
      let newTweets = JSON.parse(JSON.stringify(state.tweets))
      newTweets.splice(action.payload, 1)
      console.log('DELETE_TWEET', newTweets, action.payload);
      window.localStorage.setItem('tweets', JSON.stringify(newTweets))
      return {
        ...state,
        tweets: newTweets
      }

     case 'ADD_TWEET' :
       let tweets = [action.payload, ...state.tweets]
       window.localStorage.setItem('tweets', JSON.stringify(tweets))
       return {
          ...state,
          tweets : tweets
        }

     default :
       return state
  }
}

export class Provider extends React.Component {
  state = {
    tweets: [
      {
        id: 1,
        name:'Sujata Gunale',
        username: '@tidbitsjs',
        profile: null,
        tweet: 'I know its hard. It was hard yesterday. It is hard today. It will be hard tomorrow. But as you continue to do it, day-after-day, code-after-code, guess what? You will IMPROVE. It will get easier. So buckle up and start typing on your keyboard. What needs to be done, must be done'
      },
      {
        id: 2,
        name:'Judy Hopps',
        username: '@motivation',
        profile: null,
        tweet: 'When you think of your BIG goal, sometimes you start feeling overwhelmed. Why? Because big goals don’t get achieved right away. Instead, you need to create mini goals to help excite you along the way. Celebrating your small wins will help you stay motivated through your journey. Plus, celebrating is always super fun.'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  async componentDidMount() {
    let tweets = window.localStorage.getItem('tweets')
    if (tweets) tweets = JSON.parse(tweets)
    if (!tweets) tweets = []

    this.setState({tweets: tweets})
  }


  render() {
    return(
      <Context.Provider value = {this.state} >
          {this.props.children}
      </Context.Provider>
    )
  }

}

export const Consumer = Context.Consumer
