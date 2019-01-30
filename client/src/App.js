import React, { Component } from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import PostList from './component/postlist'
import Join from './component/join'
import Login from './component/login'
import Sidebar from './component/sidebar'

class App extends Component {
  render() {
    return (
      <Router >
                <div className="App">
                  <Sidebar />
                    <div className="container">
                      <Route path="/" component={PostList}></Route>
                      <Route path="/login" component={Login}></Route>
                      <Route path="/join" component={Join}></Route>
                    </div> 
                </div>
      </Router>
      
    );
  }
}

export default App;
