import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.module.styl'

class NrBtn extends Component {
    render () {
        return (
            <FlatButton 
                className={styles.btn}
                label={this.props.number} 
                onClick={() => this.props.handleClick && this.props.handleClick(this.props.number)}
            />
        )
    }
}

export default NrBtn