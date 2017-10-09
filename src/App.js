import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calc from './components/Calc'
import styles from './styles.module.styl'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className={styles.mainContainer}>
          <Calc />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App