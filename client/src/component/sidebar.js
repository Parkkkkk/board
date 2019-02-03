import React , { Component } from 'react'
import { NavLink , withRouter } from 'react-router-dom'
import './sidebar.css'

class Sidebar extends Component {
    logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('useremail')
        localStorage.removeItem('nick')
        this.props.history.push('/')
    }

    render() {
        const  Notlogin= (
            <div className="sidebar">
                <NavLink exact to ="/postlist" className="home">Home</NavLink>
                <NavLink to ="/login" className="login">Login</NavLink>
                <NavLink to="/join" className="join">Join</NavLink>     
            </div>
        )
        const login = (
            <div className="sidebar"> 
                <NavLink exact to ="/postlist" className="home">Home</NavLink>
                <NavLink to ="/profile" className="profile">Profile</NavLink>
                <NavLink to="/logout" className="logout" onClick={this.logOut}>logout</NavLink>     
            </div>
        )
        return (
            <div className="nav-container">
                { localStorage.useremail ? login : Notlogin}
            </div>
        )
    }
}

export default withRouter(Sidebar)