import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {

    state = {
        users: [], 
        isFirst: true,
        isLoading: false,
        err: ''
    }


    componentDidMount = ()=>{
        PubSub.subscribe('mingyu', (_, data)=>{
            console.log(data);
            this.setState(data)
        })
    }
    

    render() {

        return (
            <div className="row">
              
                {
                    this.state.isFirst ? <h2>请输入用户名搜索</h2> :
                    this.state.isLoading ? <h2>loading 。。。</h2> :
                    this.state.err ? <h2>{this.state.err}</h2> :
                    this.state.users.map((user) => {
                        return (
                            
                            <div className="card" key={user.id}>
                                <a rel="noreferrer" href={user.html_url} target="_blank">
                                    <img alt="header_img" src={user.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>

                        )
                    })
                }
                

            </div>
        )
    }
}
