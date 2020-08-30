import React from 'react'

const withCounter = (WrappedComponent ,incrementNumber)=> {
    
    class WithCounter extends React.Component {
        
        constructor(props) {
            super(props)
        
            this.state = {
                count:0
            }
        }
        incerementCount = () => {
            this.setState(prevState => {
                return {
                    count:prevState.count+incrementNumber
                }
            })
        }
    

        render() {
            console.log(this.props.name)
            return (
                <WrappedComponent count={this.state.count}
                    incerementCount={this.incerementCount}
                    {...this.props}
                    />
            )
         }
    }
    return WithCounter
    
}
export default withCounter