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
      firstNr: '',
      secondNr: '',
      operator: '',
      result: ''
    }
  }
  
  addToExp = val => {
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

  addOperator = operator => {
    this.setState({
      operator
    })
  }

  evalExp = () => {
    const firstNr = Number(this.state.firstNr)
    const secondNr = Number(this.state.secondNr)
    let result
    switch(this.state.operator) {
      case '+' :
        result = firstNr + secondNr
        break
      case '-' :
        result = firstNr - secondNr
        break
      case '*' : 
        result = firstNr * secondNr
        break
      case '/' :
        result = firstNr / secondNr
        break
      case '%': 
        result = firstNr % secondNr
        break
      case '^x' :
        result = Math.pow(firstNr, secondNr)
        break
      default :
        break
    }
    this.setState({
      firstNr: result.toString(),
      operator: '',
      secondNr: '',
    })
  }

  reset = () => {
    this.setState({
      firstNr: '',
      secondNr: '',
      operator: '',
      result: ''
    })
  }

  backspace = () => {
    if (this.state.firstNr !== ''  && this.state.operator === '') {
      this.setState({
        firstNr: this.state.firstNr.slice(0, -1)
      })
    } else if (this.state.secondNr !== '') {
      this.setState({
        secondNr: this.state.secondNr.slice(0, -1)
      })
    }
  }

  sin = () => {
    const result = Math.sin(this.state.firstNr).toString()
    this.setState({
      firstNr: result,
      operator: '',
      secondNr: '',
    })
  }

  cos = () => {
    const result = Math.cos(this.state.firstNr).toString()
    this.setState({
      firstNr: result,
      operator: '',
      secondNr: '',
    })
  }

  bin = (base) => {
    //console.log(base)
    let result = ''
    for (const val of this.state.firstNr) {
     result += val.charCodeAt(0).toString(base)
    }
    this.setState({
      firstNr: result,
      operator: '',
      secondNr: '',
    })
  }

  render () {
    return (
      <Paper className={styles.container}>
        <div >
          <Output firstNr={this.state.firstNr}  secondNr={this.state.secondNr} operator={this.state.operator} result={this.props.result} />
          <NrBtn number={7} handleClick={this.addToExp} />
          <NrBtn number={8} handleClick={this.addToExp} />
          <NrBtn number={9} handleClick={this.addToExp} />
          <Operator number={'/'} handleClick={this.addOperator} />
          <Operator number={'%'} handleClick={this.addOperator} />
          <NrBtn number={4} handleClick={this.addToExp} />
          <NrBtn number={5} handleClick={this.addToExp} />
          <NrBtn number={6} handleClick={this.addToExp} />
          <Operator number={'*'} handleClick={this.addOperator} />
          <Operator number={'^x'} handleClick={this.addOperator} />
          <NrBtn number={1} handleClick={this.addToExp} />
          <NrBtn number={2} handleClick={this.addToExp} />
          <NrBtn number={3} handleClick={this.addToExp} />
          <Operator number={'-'} handleClick={this.addOperator} />
          <Operator number={'+'} handleClick={this.addOperator} />
          <Operator number={'.'} handleClick={this.addToExp} />
          <NrBtn number={'0'} handleClick={this.addToExp} />
          <Operator number={'='} handleClick={this.evalExp}/>
          <Operator number={'Reset'} handleClick={this.reset} />
          <Operator number={'<-'} handleClick={this.backspace} />
          <Operator number={'sin'} handleClick={this.sin} />
          <Operator number={'cos'} handleClick={this.cos} />
          <Operator number={'bin'} handleClick={() => this.bin(2)} />
          <Operator number={'hex'} handleClick={() => this.bin(4)} />
          <Operator number={'oct'} handleClick={() => this.bin(3)} />
        </div>
      </Paper>
    )
  }
}

export default Calc
