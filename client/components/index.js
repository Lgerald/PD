/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './User/user-home.jsx'
export {Login, Signup} from './auth-form'
export {default as Footer} from './footer.jsx'
export {default as AllMessages} from './Messages/all-messages.jsx'
export {default as AllMatches} from './Match/all-matches.jsx'