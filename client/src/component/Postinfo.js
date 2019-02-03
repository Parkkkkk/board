import React , { Component }from 'react'
import { select_post } from './function'


class Post_info extends Component {
    state = {
        title : "",
        content : ""
    }

    componentDidMount () {
        select_post(this.props.match.params.id)
        .then( res => {this.setState({ title : res.data.title , content : res.data.content})}) 
    }
    
    render() {
        return (
            <div>
                <div>title : {this.state.title}</div>                
                <div>content : {this.state.content}</div>
            </div>
        )
    }


}

export default Post_info