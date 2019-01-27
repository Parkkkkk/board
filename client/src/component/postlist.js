import React , { Component } from 'react'
import {View_post} from './function'
import { Link ,withRouter } from 'react-router-dom'

class PostList extends Component {
    constructor() {
        super();
        this.state = {
            data : []
        }
       }
    componentDidMount () {
        View_post()
       .then(res => {this.setState({ data : res.data })})
    }

   
    render () {
        return (
            <div className="post-list">
                <table border="1">
                    <tbody> 
                            {this.state.data.map(datas => 
                            <tr align="center">
                            <td width="50">{datas.id}</td>
                            <td width="300">{datas.title}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default PostList
