import React,{Component} from 'react'
import {User_join} from './function'

class Join extends Component {
    constructor() {
        super();
        this.state = {
            email : "",
            password : "",
            nick : "",
        }
        this.Change = this.Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    Change(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit (event) {
        event.preventDefault()

        var join_info = {
            email : this.state.email,
            password : this.state.password,
            nick : this.state.nick
        }

        User_join(join_info)
        .then(res => this.history.porps.push('/'))

    }



    render() {
        return (
            <div></div>
        )
    }
}


export default Join