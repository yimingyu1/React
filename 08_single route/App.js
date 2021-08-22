import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item active" href="./home.html">Home</a> */}
                            {/* 在React中靠路由实现切换组件 */}
                            {/* 编写路由链接 */}
                            {/* <BrowserRouter> */}
                                {/* <NavLink className="list-group-item" to="/about">About</NavLink> */}
                                {/* <NavLink className="list-group-item" to="/home">Home</NavLink> */}
                            {/* </BrowserRouter> */}
                                <MyNavLink to="/mingyu/about">About</MyNavLink>
                                <MyNavLink to="/mingyu/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/* <BrowserRouter> */}
                                <Switch>
                                    <Route path='/mingyu/about' component={About}/>
                                    <Route path='/mingyu/home' component={Home}/>
                                    <Redirect to='/mingyu/about'></Redirect>
                                </Switch>
                                
                                {/* </BrowserRouter> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
