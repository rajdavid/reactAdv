import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
     
    
    render() {
        const { count ,incerementCount}=this.props
        return <button onClick={incerementCount}>clicked {this.props.name} {count}  times</button>
    }
}

export default  withCounter(ClickCounter,10)
