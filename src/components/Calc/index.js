import React, { Component } from 'react'
import NrBtn from './NrBtn'
import Output from './Output'
import Paper from 'material-ui/Paper'
import styles from './styles.module.styl'

class Calc extends Component {
  constructor () {
    super()
    this.state = {
      exp: ''
    }
  }
  
  addToExp (val) {
    
  }

  render () {
    return (
      <Paper className={styles.container}>
        <div >
          <Output />
          <NrBtn number={7} />
          <NrBtn number={8} />
          <NrBtn number={9} />
          <NrBtn number={'/'} />
          <NrBtn number={'%'} />
          <NrBtn number={4} />
          <NrBtn number={5} />
          <NrBtn number={6} />
          <NrBtn number={'*'} />
          <NrBtn number={'1/x'} />
          <NrBtn number={1} />
          <NrBtn number={2} />
          <NrBtn number={3} />
          <NrBtn number={'-'} />
          <NrBtn number={'+'} />
          <NrBtn number={','} />
          <NrBtn number={0} />
          <NrBtn number={'='} />
        </div>
      </Paper>
    )
  }
}

export default Calc
