import React, {Component} from 'react'
import styles from './styles.module.styl'

class Output extends Component {
    render() {
        return (
            <div className={styles.output}>
                {this.props.firstNr ==='' ? '0' : this.props.firstNr + ' '}
                {this.props.operator && this.props.operator + ' '}
                {this.props.secondNr && this.props.secondNr}
            </div>
        )
    }
}

export default Output