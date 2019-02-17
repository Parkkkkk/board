import React , { Component }from 'react'
import { select_post, Delete_post } from './function'
import UPOST from './postmodify'

class SPOST extends Component {
    state = {
        nav : true,
        title : "",
        content : "",
        img : "",
        id : `${this.props.match.params.id}`
    }

    componentDidMount () {
        select_post(this.state.id)
        .then( res => {this.setState({ 
                title : res.data.title,
                content : res.data.content,
                img : res.data.img,
                nav : true })}
        )
    }



    // nav true or false => true => render post list 
    //                      false => render updata post

    _depost = () => {
        Delete_post(this.state.id)
        .then( res => {this.props.history.push('/postlist')})
    }


    Post_nav = () => {
        this.setState({ nav : false })
    }

    U_POST = () => {
        return <UPOST 
        title = {this.state.title} 
        content = {this.state.content} 
        id = {this.state.id} />
    }

    S_POST = () => (
        <div>
            <div>제목 : {this.state.title}</div>                
            <div>내용 : {this.state.content}</div>
            <img src={this.state.img} ></img>
            <button onClick={this._depost}>삭제</button>
            <button onClick={this.Post_nav}>수정</button>
        </div>
)

    
    render() {
        return ( 
            <div>
                {this.state.nav ? this.S_POST() : this.U_POST() }
            </div>
            )
    }


}

export default SPOST



