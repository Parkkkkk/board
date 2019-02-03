import React , { Component } from 'react'
import {View_post} from './function'
import { Link } from 'react-router-dom'

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
                        {this.state.data.map(datas => 
                        <div>
                            <Link to={`/${datas.id}`}>{datas.title}</Link>
                        </div>
                        )}
            </div>
        )
    }
}


export default PostList
