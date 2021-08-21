import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

import './index.css'

export default class List extends Component {


    static propTypes = {
        todos:PropTypes.array.isRequired,
        changeTodo:PropTypes.func.isRequired
    }


    render() {

        const {todos} = this.props

        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map((item)=>{
                            return <Item key={item.id} item1={item}
                             changeTodo={this.props.changeTodo} delTodo={this.props.delTodo}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
