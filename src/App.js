import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calc from './components/Calc'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Calc />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App