import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import Home from 'material-ui/svg-icons/action/home'
import Logout from 'material-ui/svg-icons/content/remove-circle'
import Login from 'material-ui/svg-icons/content/add-circle'
import Signup from 'material-ui/svg-icons/action/check-circle'

const homeButton = <Home color="black" />
const logoutButton = <Logout color="black" />
const loginButton = <Login color="black" />
const signupButton = <Signup color="black" />

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">{homeButton}</Link>
          <a href="#" onClick={handleClick}>
            {logoutButton}
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">{loginButton}</Link>
          <Link to="/signup">{signupButton}</Link>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
