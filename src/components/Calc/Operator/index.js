import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import styles from './styles.module.styl'

class Operator extends Component {
    render () {
        return (
            <FlatButton
                className={styles.btn}
                primary
                label={this.props.number}
            />            
        )
    }
}

export default Operator
