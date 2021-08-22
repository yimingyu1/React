import React, { Component } from 'react'
import qs from 'querystring'


const contents = [
    {id: '1', content: 'hello java'},
    {id: '2', content: 'hello react'},
    {id: '3', content: 'hello c++'}
]

export default class Detail extends Component {
    render() {
        console.log(this.props);
        const {search} = this.props.location
        console.log(search);
        const {id, title} = qs.parse(search.slice(1))
        console.log(id, title);
        console.log(typeof id);
        
        const findReault = contents.find((contentObj)=>{
            console.log(typeof contentObj.id);
            return id === contentObj.id
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
