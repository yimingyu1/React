import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    state = {users: [], 
        isFirst: true,
        isLoading: false,
        err: ''
    }

    updateState = (state)=>{
        console.log(state);
        this.setState(state)
    }

    render() {

        console.log(this.state);
        return (
            <div className="container">
                <Search updateState={this.updateState}/>
                <List sta={this.state}/>
            </div>
        )
    }
}
