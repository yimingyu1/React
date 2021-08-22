import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
import { Redirect, Route, Switch } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                            <MyNavLink to='/mingyu/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            {/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
                            <MyNavLink to='/mingyu/home/messages'>Message</MyNavLink>
                        </li>

                    </ul>
                    <Switch>
                        <Route path='/mingyu/home/news' component={News}></Route>
                        <Route path='/mingyu/home/messages' component={Message}></Route>
                        <Redirect to='/mingyu/home/news'></Redirect>
                    </Switch>
                
                </div>
            </div>

        )
    }
}
