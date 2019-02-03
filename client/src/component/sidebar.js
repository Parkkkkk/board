import React , { Component } from 'react'
import { cookie } from './function'
import { NavLink , withRouter } from 'react-router-dom'
import './sidebar.css'

class Sidebar extends Component {

    state = { auth : ""}


    _CallApi = () => {
        cookie()
        .then(res => this.setState({ auth : res.data }))
    }

    componentDidUpdate () {
        this._CallApi()
    }

    render() {
        const  Notlogin= (
            <div className="sidebar">
                <NavLink exact to ="/" className="home">Home</NavLink>
                <NavLink to ="/login" className="login">Login</NavLink>
                <NavLink to="/join" className="join">Join</NavLink>     
            </div>
        )
        const login = (
            <div className="sidebar"> 
                <NavLink exact to ="/" className="home">Home</NavLink>
                <NavLink to ="/profile" className="profile">Profile</NavLink>
                <NavLink to="/logout" className="logout">logout</NavLink>     
            </div>
        )
        return (
            <div className="nav-container">
                { this.state.auth ? login : Notlogin}
            </div>
        )
    }
}

export default withRouter(Sidebar)