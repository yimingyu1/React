import React, { Component } from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default class App extends Component {

    state = {
        todos: [
            {id: 1, name: '吃饭', done: true},
            {id: 2, name: '睡觉', done: true},
            {id: 3, name: '打豆豆', done: false},
        ]
    }

    addTodo = (data)=>{
        const {todos} = this.state
        const newItem = {id: nanoid, name: data, done: false}
        this.setState({todos: [...todos, newItem]})
    }

    changeTodo = (id, flag)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if (todoObj.id === id){
                return {...todoObj, done: flag}
            }
            return todoObj
        }
        )
        this.setState({todos: newTodos})
    }

    delTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos: newTodos})
    }

    changeAllTodo = (flag)=>{
        const {todos} = this.state
        console.log(flag)
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj, done: flag}
        })
        this.setState({todos: newTodos})
    }

    clearAllOverTodo = (todos)=>{
        this.setState({todos: todos})
    }

    render() {

        const {todos} = this.state
        console.log(todos)
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} changeTodo={this.changeTodo} delTodo={this.delTodo}/>
                    <Footer todos={todos} changeAllTodo={this.changeAllTodo} clearAllOverTodo={this.clearAllOverTodo}/>
                </div>
          </div>
        )
    }
}