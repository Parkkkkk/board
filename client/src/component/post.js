import React , {Component} from 'react'
import { Create_post } from './function'
import Image from './upload'

//Create Post 

class Post extends Component {
    constructor() {
        super();
        this.state ={
            title : "",
            content : "",
            url : ""
        }
        this.Change = this.Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    Change (e) {
        this.setState({ [e.target.name] : e.target.value});
    }

    onSubmit (e) {
        e.preventDefault()


        var post_info = {
            title : this.state.title,
            content : this.state.content,
            url : ""
        }

        Create_post(post_info)
        .then(res=>console.log(res))
    }


    render() {
        return (
            <div>
                <form className="post-form" onSubmit={this.onSubmit}>
                    <div className="post-group">
                        <label>제목 : </label>
                        <input className="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.Change}
                        placeholder="제목을 입력하세요"
                        type="text">                            
                        </input>
                    </div>

                    <div className="post-group">
                        <label>내용 : </label>
                        <textarea className="content"
                        name='content'
                        value={this.state.content}
                        onChange={this.Change}
                        placeholder="내용을 입력하세요"
                        maxLength='140'></textarea>
                    </div>
                    <Image />
                <button type="submit">게시</button>
                </form>
            </div>
        )
    }
}

export default Post