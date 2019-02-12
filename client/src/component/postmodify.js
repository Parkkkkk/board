import React , { Component } from 'react'
import { Delete_post } from './function'

class PostMo extends Component {

    state = {
        title : "",
        content : "",
        img : "",
    };


    _onChang = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }

    _onClick = (e) => {
        e.preventDefault()

        let data = {
            title : this.state.title,
            content : this.state.content,
            id : this.props.match.params.id
        }

        Delete_post(data)
        .then(res => {this.props.history.push('/postlist')})
    }

    backpage = () => {this.props.history.push('/postlist')}


    render() {
        return (
            <div>
                <div className="post-group">
                <label>제목 : </label>
                <input className="title"
                name="title"
                value={this.state.title}
                onChange={this._onChang}
                placeholder="제목을 입력하세요"
                type="text">{this.props.title}                            
                </input>
            </div>

            <div className="post-group">
                <label>내용 : </label>
                <textarea className="content"
                name='content'
                value={this.state.content}
                onChange={this._onChang}
                placeholder="내용을 입력하세요"
                maxLength='140'>{this.props.content}
                </textarea>
            </div>
            
            <div className="post-group">
                <input className="image" 
                type="file"
                onChange={this.Image_Change}
                accept="image/*">{this.props.img}
                </input>
            </div>
            <button onClick={this._onClick}>확인</button>
            <button onClick={this.backpage}>취소</button>
        </div>
        )
    }
}

export default PostMo