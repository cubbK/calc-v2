import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.module.styl'

class NrBtn extends Component {
    render () {
        return (
            <FlatButton className={styles.btn}>
                {this.props.number}
            </FlatButton>
        )
    }
}

export default NrBtn