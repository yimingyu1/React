import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {

    back = ()=>{
        this.props.history.goBack()
    }

    go = ()=>{
        this.props.history.goForward()
    }
    render() {
        return (
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.back}>back</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}
export default withRouter(Header)