import React , { Component }from 'react'
import { select_post } from './function'


class Post_info extends Component {
    state = {
        title : "",
        content : "",
        img : ""
    }

    componentDidMount () {
        select_post(this.props.match.params.id)
        .then( res => {this.setState({ title : res.data.title , content : res.data.content , img : res.data.img})}) 
    }
    
    render() {
        return (
            <div>
                <div>title : {this.state.title}</div>                
                <div>content : {this.state.content}</div>
                <img src={this.state.img} ></img>
            </div>
        )
    }


}

export default Post_info