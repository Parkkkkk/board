import React,{ Component } from 'react'
import { User_login } from './function'


class Login extends Component {
        state = {
            email : "",
            password : ""
        }
    

    Change = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        var Login_info = {
            email : this.state.email,
            password : this.state.password
        }
        
        User_login(Login_info) 
        .then(res => {this.props.history.push('/')})
    }


    render () {
        return (
            <div className='login_form'>
                <form className='form_sign' onSubmit ={this.onSubmit}>
                    <div className='login_header'>
                        <h2>Hiiiiiiiiiiii</h2>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input className="email"
                        type="email"
                        name="email"
                        placeholder="username"
                        value={this.state.email}
                        onChange={this.Change}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input className="password"
                        type="password"
                        name="password"
                        placeholder="userpassword"
                        value={this.state.password}
                        onChange={this.Change}>
                        </input>
                    </div>

                    <button className="not yet" type="submit">Sign in</button>

                </form>
            </div>
        );
    }
}


export default Login;