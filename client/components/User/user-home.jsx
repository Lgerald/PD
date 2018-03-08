import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'



import Settings from './settings.jsx'
import Preference from './preference.jsx'
import Profile from './profile.jsx'
/**
 * COMPONENT
 */
export const UserHome = (props) => {
  //const { name, userName } = props.user
  return (
    <div>
      <h3>Welcome</h3>
      <Profile />
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
// UserHome.propTypes = {
//   user: PropTypes.string
// }
