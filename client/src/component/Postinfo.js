import React , { Component }from 'react'
import { select_post } from './function'


class Post_info extends Component {
    state = {
        title : "",
        content : ""
    }

    componentWillReceiveProps(nextProps) {
        if (parseInt(nextProps.match.params.id, 10) !== parseInt(this.props.match.params.id, 10)) {
          select_post(nextProps.match.params.id)
          .then( res => {this.setState({ title : res.data.title , content : res.data.content})})
          }
      }

    render() {
        return (
            <div>
                <div>{this.state.title}</div>                
                <div>{this.state.content}</div>
            </div>
        )
    }


}

export default Post_info