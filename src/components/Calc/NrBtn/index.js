import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton';

class NrBtn extends Component {
    render () {
        return (
            <FlatButton>
                {this.props.number}
            </FlatButton>
        )
    }
}

export default NrBtn