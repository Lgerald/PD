import React from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
import {updateUserInfo} from '../../../store'


const UserInfoForm = (props) => {
    const { handleSubmit } = props
    return (<div>
        <form onSubmit={handleSubmit}>
          <input placeholder="user name" name="username" type="text" />
          <input placeholder="one liner" name="oneliner" type="text" />
          <input placeholder="queustion 1" name="questionOne" type="text" />
          <input placeholder="question 2" name="questionTwo" type="text" />
        </form>
      </div>)
}


// const mapState = (state) => {
//     return {
//         user: state.user
//     }
// }

const mapDispatch = (dispatch) => {
    return {
        handleSubmit(evt) {
            evt.preventDefault()
            const {username, oneliner, questionOne, questionTwo} = evt.target
            dispatch(updateUserInfo(this.props.user.id, {username, oneliner, questionOne, questionTwo}))
        }
    }

}

const Userform = connect(null, mapDispatch)(UserInfoForm)
export default Userform

// UserInfoForm.propTypes = {
//     username: PropTypes.string.isRequired,
//     oneliner: PropTypes.string.isRequired,
//     questionOne: PropTypes.string.isRequired,
//     questionTwo: PropTypes.string.isRequired,
//     handleSubmit: PropTypes.func.isRequired
// }
