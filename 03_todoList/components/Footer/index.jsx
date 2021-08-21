import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {




    getallTodoFlag = (event)=>{
        const {changeAllTodo} = this.props
        changeAllTodo(event.target.checked)
    }


    render() {

        const {todos, changeAllTodo} = this.props

        const overTodos = todos.filter((todoObj)=>{
            return todoObj.done
        })

        const unOverTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })

        
        return (
            <div className="todo-footer">
            <label>
              <input type="checkbox" checked={overTodos.length === todos.length} onChange={this.getallTodoFlag}/>
            </label>
            <span>
              <span>已完成{overTodos.length}</span> / 全部{todos.length}
            </span>
            <button onClick={()=> this.props.clearAllOverTodo(unOverTodos)} className="btn btn-danger">清除已完成任务</button>
          </div>
        )
    }
}
