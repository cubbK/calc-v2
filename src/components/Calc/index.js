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
    this.setState({
      exp: this.state.exp + val
    })
  }

  render () {
    return (
      <Paper className={styles.container}>
        <div >
          <Output exp={this.state.exp} />
          <NrBtn number={7} handleClick={this.addToExp.bind(this)} />
          <NrBtn number={8} handleClick={this.addToExp.bind(this)}/>
          <NrBtn number={9} handleClick={this.addToExp.bind(this)}/>
          <NrBtn number={'/'} />
          <NrBtn number={'%'} />
          <NrBtn number={4} handleClick={this.addToExp.bind(this)}/>
          <NrBtn number={5} handleClick={this.addToExp.bind(this)}/>
          <NrBtn number={6} handleClick={this.addToExp.bind(this)}/>
          <NrBtn number={'*'} />
          <NrBtn number={'1/x'} />
          <NrBtn number={1} handleClick={this.addToExp.bind(this)}/>
          <NrBtn number={2} handleClick={this.addToExp.bind(this)} />
          <NrBtn number={3} handleClick={this.addToExp.bind(this)}/>
          <NrBtn number={'-'} />
          <NrBtn number={'+'} />
          <NrBtn number={','} />
          <NrBtn number={'0'} handleClick={this.addToExp.bind(this)}/>
          <NrBtn number={'='} />
        </div>
      </Paper>
    )
  }
}

export default Calc
