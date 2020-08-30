import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        const { count ,incerementCount}=this.props
        return (
            
                <h2 onMouseOver={incerementCount}>hover {count} times</h2>
        )
    }
}

export default withCounter(HoverCounter,5)
