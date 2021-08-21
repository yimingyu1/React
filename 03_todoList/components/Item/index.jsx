import React, { Component } from 'react'

import './index.css'

export default class Item extends Component {
    
    state = {mouse: false}

    mouseHandle = (flag)=>{
        return ()=>{
            this.setState({mouse: flag})
        }
    }

    changeFlay = (id)=>{
        const {changeTodo} = this.props
        return (event)=>{
            changeTodo(id, event.target.checked)
        }
    }

    getDelTodoId = (id)=>{
        return ()=>{
            if (window.confirm('确定删除吗？')){
                this.props.delTodo(id)
            }
        }
    }


    render() {

        const {item1} = this.props

        const {mouse} = this.state

        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.mouseHandle(true)} onMouseLeave={this.mouseHandle(false)}>
                <label>
                <input type="checkbox" checked={item1.done} onChange={this.changeFlay(item1.id)}/>
                <span>{item1.name}</span>
                </label>
                <button className="btn btn-danger" 
                style={{display:mouse ? "block" : "none"}} onClick={this.getDelTodoId(item1.id)}>删除</button>
            </li>
        )
    }
}
