import React, {Component} from 'react'
import styles from './styles.module.styl'

class Output extends Component {
    render() {
        return (
            <div className={styles.output}>
                {this.props.exp ==='' ? '0' : this.props.exp}
            </div>
        )
    }
}

export default Output