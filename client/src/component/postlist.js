import React , { Component } from 'react'
import {View_post} from './function'
import { Route , Link } from 'react-router-dom'
import Post_info from './Postinfo'

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
                        <Route path='/:id' component={Post_info} />
            </div>
        )
    }
}


export default PostList
