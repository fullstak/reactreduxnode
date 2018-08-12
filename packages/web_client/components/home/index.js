import React, { Component } from 'react'

class Home extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getUsers()
    }
    render() {
        return (
           <div>
                Testing
           </div>
        ) 
    }
}

export default Home
