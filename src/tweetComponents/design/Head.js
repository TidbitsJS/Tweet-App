import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Head = props => {
  const { branding } = props
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-10">
      <div className="container">
        <a href="/" className="navbar-brand">{ branding }</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                HOME <i className="fa fa-home" style={{color:'yellow', marginLeft:5}}></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tweet" className="nav-link text-dark">
                TWEET <i className="fas fa fa-twitter" style={{color:'white', marginLeft:5}}></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark" >
                ABOUT <i className="fa fa-heart" style={{color:'red', marginLeft:5}}></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Head.defaultProps = {
  branding : ' My Tweet '
}

Head.propTypes = {
  branding : PropTypes.string.isRequired
}

export default Head
