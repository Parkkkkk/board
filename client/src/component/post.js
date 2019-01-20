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
        this.onSubmit_post = this.onSubmit_post.bind(this);
    }

    Change (e) {
        this.setState({ [e.target.name] : e.target.value});
    }

    onSubmit_post (event) {
        event.preventDefault()

        var post_info = {
            title : this.state.title,
            content : this.state.content,
            img : this.state.img
        }

        Create_post(post_info)
        .then(res => this.history.props.push('/'))
    }


    render() {
        return (
            <div></div>
        )
    }
}

export default Post