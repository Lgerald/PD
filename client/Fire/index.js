const firebase = require('firebase')
require('firebase/firestore')
require('firebase/auth')

var config = {
  apiKey: 'AIzaSyBkw13Vwu59s2w9wKV3iPXAuLmY56UUKT0',
  authDomain: 'playdate-8ffc8.firebaseapp.com',
  databaseURL: 'https://playdate-8ffc8.firebaseio.com',
  projectId: 'playdate-8ffc8',
  storageBucket: 'playdate-8ffc8.appspot.com',
  messagingSenderId: '617244937459'
}

firebase.initializeApp(config)
const db = firebase.firestore()
export default db
