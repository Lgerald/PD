import axios from 'axios'
import history from '../history'

// ACTION TYPES
const GET_MESSAGES = 'GET_MESSAGE'
const GET_MESSAGE = 'GET_MESSAGE'
const REMOVE_MESSAGES = 'REMOVE_MESSAGES'

// INITIAL STATE
const defaultMessages = {}


// ACTION CREATORS
const getMessages = messages => ({type: GET_MESSAGES, messages})
const getMessage = message => ({type: GET_MESSAGE, message})
const removeMessages = () => ({type: REMOVE_MESSAGES})

// THUNK CREATORS


// REDUCER
export default function (state = defaultMessages, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return action.messages
        case GET_MESSAGE:
            return action.message
        case REMOVE_MESSAGES:
            return defaultMessages
        default:
            return state
    }
}
