import React from 'react'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
  </MuiThemeProvider>
  );


export default App
