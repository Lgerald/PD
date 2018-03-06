import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'



import Settings from './settings.jsx'
import Preference from './preference.jsx'
/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { user } = props
  return (
    <div>
      <h3>Welcome, {user.name || user.userName}</h3>   
      <Settings />
      <Preference />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
