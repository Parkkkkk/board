import React , {Component} from 'react'
import { Create_post } from './function'


//Create Post 

class Post extends Component {
    constructor() {
        super();
        this.state ={
            title : "",
            content : "",
            img : ""
        }
        this.Change = this.Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.Image_Change = this.Image_Change.bind(this);
      }

    Change (e) {
        this.setState({ [e.target.name] : e.target.value});
    }

    Image_Change (e) {
        this.setState({ img : e.target.files[0]});
    }

    onSubmit (e) {
        e.preventDefault()

        const fd = new FormData();
        fd.append('title' , this.state.title)
        fd.append('content' , this.state.content)
        fd.append('img', this.state.img , this.state.img.name)
      
        Create_post(fd)
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
                    
                    <div className="post-group">
                        <input className="image" 
                        type="file"
                        onChange={this.Image_Change}
                        accept="image/*">
                        </input>
                    </div>

                <button type="submit">게시</button>
                </form>
            </div>
        )
    }
}

export default Post