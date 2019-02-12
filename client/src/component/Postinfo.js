import React , { Component }from 'react'
import { Link } from 'react-router-dom'
import { select_post ,Delete_post } from './function'


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

    _depost = (e) => {
        e.preventDefault();


        Delete_post(this.props.match.params.id)
        .then( res => {this.props.history.push('/postlist')})
    }


    render() {
        return ( 
            <div>
                <div>제목 : {this.state.title}</div>                
                <div>내용 : {this.state.content}</div>
                <img src={this.state.img} ></img>
                <button onClick={this._depost}>삭제</button>
                <button><Link to={`/post/edit`}>수정</Link></button>
            </div>
            )
    }


}

export default Post_info