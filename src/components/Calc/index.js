import React, {Component} from 'react'
import NrBtn from './NrBtn'
import styles from './styles.module.styl'

class Calc extends Component {
  render () {
    return (
      <div className={styles.container}>
        <NrBtn number={0} />
        <NrBtn number={1} />
        <NrBtn number={2} />
      </div>
    )
  }
}

export default Calc