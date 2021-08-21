import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

    search = ()=>{
        // 获取到搜索的关键字
        const {keyWrodNode:{value: search_keyWord}} = this
        console.log(search_keyWord);

        PubSub.publish('mingyu', {isFirst: false, isLoading: true})

        // 发送网络请求   https://api.github.com/search/users?q=xxxx
        axios.get(`https://api.github.com/search/users?q=${search_keyWord}`).then(
            response => {
                console.log('成功了', response.data);
                PubSub.publish('mingyu', {isLoading: false, users: response.data.items})
        },
            error => {
                console.log('失败了', error)
                PubSub.publish('mingyu', {isLoading: false, err: error.message})
        },
        )
       
    }

    render() {

        return (
            <section class="jumbotron">
                <h3 class="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={(c)=> this.keyWrodNode = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
