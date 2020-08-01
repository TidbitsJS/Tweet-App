import React from 'react'
import { Consumer } from 'AnotherContext.js'
import FormGroup from 'tweetComponents/design/Form.js'
import { v1 as uuid } from 'uuid'

class AddTweet extends React.Component {
  state = {
    name: '',
    username: '',
    fileName: 'Choose File',
    profile: null,
    tweet: '',
    errors: {}
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault()
    const { name, username, profile, tweet} = this.state

    console.log(profile);

    if(name === '') {
      this.setState({
        errors: {name: 'Name is Required'}
      })
      return
    }

    if(username === '') {
      this.setState({
        errors: {username: 'Username is Required'}
      })
      return
    }

    const newTweet = {
      id: uuid(),
      name,
      username,
      profile,
      tweet
    }

    dispatch({type:"ADD_TWEET", payload:newTweet})

    this.setState({
      name:'',
      username:'',
      profile: null,
      objectURL: null,
      tweet:'',
      errors: {}
    })

    this.props.history.push('/')
  }

  onFieldChange = e => this.setState({ [e.target.name]: e.target.value})

  fileChangedHandler = async (event) => {
    const file = event.target.files[0]
    console.log(file, event.target)
    let dataUrl = await new Promise(resolve => {
      let reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });

    console.log('dataUrl', dataUrl)
    this.setState({
      fileName: file.name,
      profile: dataUrl
    })
  }


  render() {
    const { name, username, fileName, tweet, errors } = this.state

    return(
      <Consumer>
        {value => {
          const { dispatch } = value
          return(
            <div className="card mb-3">
              <div className="card-header">Add Tweet</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                  <FormGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onFieldChange}
                    error={errors.name}
                  />

                  <FormGroup
                    label="Username"
                    name="username"
                    placeholder="Enter Username"
                    value={username}
                    onChange={this.onFieldChange}
                    error={errors.username}
                  />


                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div className="custom-file">
                      <input type="file" onChange={this.fileChangedHandler} className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                      <label className="custom-file-label" htmlFor="inputGroupFile01">{fileName}</label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="tweet">Lets Tweet</label>
                    <textarea
                      className="form-control"
                      name="tweet"
                      id="exampleFormControlTextarea1" rows="5"
                      value={tweet}
                      onChange={this.onFieldChange} required></textarea>
                  </div>

                  <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <input
                      type="submit"
                      value="Tweet"
                      className="btn btn-outline-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddTweet
