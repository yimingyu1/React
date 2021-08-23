import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

    state = {
        messages: [
            {id: 1, title: 'message001'},
            {id: 2, title: 'message002'},
            {id: 3, title: 'message003'}
        ]
    }

    show = (id, title)=>{
        return ()=>{
            // replaec + param参数
            this.props.history.replace(`/mingyu/home/messages/detail/${id}/${title}`)
        }
    }

    show1 = (id, title)=>{
        return ()=>{
            // push + param参数
            this.props.history.push(`/mingyu/home/messages/detail/${id}/${title}`)
        }
    }

    render() {
        return (
            <div>
               <ul>
                   {
                       this.state.messages.map((message)=>{
                           return (
                            <li key= {message.id}>
                            <Link to={`/mingyu/home/messages/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp;
                            {/* <Link to={`/mingyu/home/messages/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}
                            {/* <Link to={{pathname:'/mingyu/home/messages/detail', state:{id:message.id, title: message.title}}}>{message.title}</Link>&nbsp;&nbsp; */}
                            <button onClick={this.show1(message.id, message.title)}>push</button>
                            <button onClick={this.show(message.id, message.title)}>replace</button>
                          </li>
                           )
                       })
                   }
                  </ul>
                  <hr />
                  <Route path='/mingyu/home/messages/detail/:id/:title' component={Detail}/>
                  {/* <Route path='/mingyu/home/messages/detail' component={Detail}/> */}

            </div>
        )
    }
}
