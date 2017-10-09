import React, {Component} from 'react'
import NrBtn from './NrBtn'
import Output from './Output'
import styles from './styles.module.styl'

class Calc extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div className={styles.container}>
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
    )
  }
}

export default Calc