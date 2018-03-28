import React from 'react'
import db from '../../Fire'
import firebase from 'firebase'
const docRef = firebase
  .firestore()
  .collection('users')
  .doc('beep')

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.unsubscribe = firebase.auth()
  }
  handleClick = () => {
    docRef
      .set({
        beep: 'merp'
      })
      .then(() => console.log(`it did a thing`))
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick()}>CLICK ME</button>
      </div>
    )
  }
}

export default Profile
