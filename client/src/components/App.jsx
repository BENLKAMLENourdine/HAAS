import React from 'react'
import api from '../services/api'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dummyHash: null
        }
    }
    async componentDidMount(){
        try {
            const { hash } = await api.call('get', `generateDummyHash`);
        this.setState({dummyHash: hash})
        } catch (error) {
            
        }
    }
    render(){
        return(
            <div>App works {this.state.dummyHash}</div>
        )
    }
}

export default App