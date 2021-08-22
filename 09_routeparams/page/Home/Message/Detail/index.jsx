import React, { Component } from 'react'

const contents = [
    {id: 1, content: 'hello java'},
    {id: 2, content: 'hello react'},
    {id: 3, content: 'hello c++'}
]

export default class Detail extends Component {
    render() {
        console.log(this.props);
        const {id, title} = this.props.match.params
        const findReault = contents.find((contentObj)=>{
            return id == contentObj.id
        })
        return (
            <div>
                <ul>
                    <li>id: {id}</li>
                    <li>title: {title}</li>
                    <li>content: {findReault.content}</li>
                </ul>
            </div>
        )
    }
}
