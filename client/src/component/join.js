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
        .then(res => {this.props.history.push('/login')})
    }



    render() {
        return (
            <div className="join_form">
                <form className="form-join" onSubmit={this.onSubmit}>
                <div>
                    <h2>Join Form</h2>
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.Change}>
                    </input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.Change}>
                    </input>
                </div>

                <div className="form-group">
                    <label htmlFor="nick">Nick name</label>
                    <input className="nick"
                    type="text"
                    name="nick"
                    placeholder="Nick name"
                    value={this.state.nick}
                    onChange={this.Change}>
                    </input>
                </div>
                <button className="not yet" type="submit">Sign up</button>

                </form>
            </div>
        )
    }
}


export default Join