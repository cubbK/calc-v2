import React, { Component } from 'react'
import NrBtn from './NrBtn'
import Operator from './Operator'
import Output from './Output'
import Paper from 'material-ui/Paper'
import styles from './styles.module.styl'

class Calc extends Component {
  constructor () {
    super()
    this.state = {
      exp: '',
      firstNr: '',
      secondNr: '',
      operator: ''
    }
  }
  
  addToExp = (val) => {
    if (this.state.operator === '') {
      this.setState({
        firstNr: this.state.firstNr + val
      })
    } else {
      this.setState({
        secondNr: this.state.secondNr + val
      })
    }
  }

  render () {
    return (
      <Paper className={styles.container}>
        <div >
          <Output exp={this.state.firstNr} />
          <NrBtn number={7} handleClick={this.addToExp} />
          <NrBtn number={8} handleClick={this.addToExp} />
          <NrBtn number={9} handleClick={this.addToExp} />
          <Operator number={'/'} />
          <Operator number={'%'} />
          <NrBtn number={4} handleClick={this.addToExp} />
          <NrBtn number={5} handleClick={this.addToExp} />
          <NrBtn number={6} handleClick={this.addToExp} />
          <Operator number={'*'} />
          <Operator number={'1/x'} />
          <NrBtn number={1} handleClick={this.addToExp} />
          <NrBtn number={2} handleClick={this.addToExp} />
          <NrBtn number={3} handleClick={this.addToExp} />
          <Operator number={'-'} />
          <Operator number={'+'} />
          <Operator number={','} />
          <NrBtn number={'0'} handleClick={this.addToExp} />
          <Operator number={'='} />
        </div>
      </Paper>
    )
  }
}

export default Calc
