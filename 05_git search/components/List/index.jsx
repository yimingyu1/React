import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {

        const {sta} = this.props
        return (
            <div className="row">
              
                {
                    sta.isFirst ? <h2>请输入用户名搜索</h2> :
                    sta.isLoading ? <h2>loading 。。。</h2> :
                    sta.err ? <h2>{sta.err}</h2> :
                    sta.users.map((user) => {
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
