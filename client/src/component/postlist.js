import React , { Component } from 'react'
import {View_post} from './function'
import { Link } from 'react-router-dom'

class PostList extends Component {
    state = {
        data : []
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
                    <Link to={`/postlist/${datas.id}`}>{datas.title}</Link>
                </div>
                )}               
                <button><Link to="/newpost">작성</Link></button> 
            </div>
        )
    }
}


export default PostList
