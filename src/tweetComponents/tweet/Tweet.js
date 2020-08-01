import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from 'AnotherContext.js'
import 'tweetComponents/stylesheets/Style.css'

class Tweet extends Component {

  state = {
    likes : 500,
    ...this.props.tweet
  }

  like = () => {
    this.setState({
      likes: this.state.liked ? this.state.likes : (this.state.likes + 1),
      liked: !this.state.liked
    })
  }

  onDeleteClick = async (index, dispatch) => {
   dispatch({type: 'DELETE_TWEET', payload: index})
  }

  render() {

    const { name, username, profile, tweet } = this.props.tweet
    const { index } = this.props
    const { likes, liked } = this.state

    return(
      <Consumer>

        { value => {
          const { dispatch } = value

          return (

            <div className="card">
              <div className="card-body">
              <i className="fa fa-times fa-2x"
                 style={{cursor:'pointer', display:'flex', justifyContent:'flex-end', alignItems:'flex-end' , float:'right', color:'black', marginTop: 0}}
                 onClick={this.onDeleteClick.bind(this, index, dispatch)}></i>
              <div className="info">
                <div className="imageBox">
                  <img src= {profile === null ? "https://images.unsplash.com/photo-1527646736858-63d6105cf796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" : profile} className="rounded float-left" alt="..." />
                   <div className="sub">
                      <h4> {name} </h4>
                      <p> {username} </p>
                   </div>
                 </div>
                </div>
                <div className="text">
                  <p className="card-text">{tweet}</p>
                </div>
                <div className="share">
                  <i className="fa fa-share-square fa-2x" aria-hidden="true"></i>
                  <i className="fa fa-retweet fa-2x" aria-hidden="true"></i>
                  <div className="like"><i style={{color: liked ? 'red' : 'black'}} onClick={this.like} className="fa fa-heart fa-2x" aria-hidden="true"></i><p>{ likes }</p></div>
                </div>
              </div>
            </div>

          )

        } }

      </Consumer>

    )
  }
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired
}

export default Tweet
