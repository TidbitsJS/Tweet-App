import React, {Component} from 'react'

class ImageLoad extends Component {
  state = {
    selectedFile: null,
    objectURL: null
  }

  fileChangedHandler = (event) => {
    var file = event.target.files[0]

    this.setState({
      objectURL: URL.createObjectURL(file)
    })
  }

  uploadHandler = () => {
    this.setState({
      selectedFile : this.state.objectURL
    })
    console.log(this.state.selectedFile);
  }

  render() {
    return(
      <div>
        Hello World
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload</button>

        <img src={this.state.selectedFile} alt="imgae load" />
      </div>
    )
  }
}

export default ImageLoad
