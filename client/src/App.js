import React, { Component } from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import { 
PostList,
Login,
Join,
Post_info,
Sidebar} from './component/index'

class App extends Component {
  render() {
    return (
      <Router >
                <div className="App">
                  <Sidebar />
                    <div className="container">
                      <Route exact path="/" component={PostList}></Route>
                      <Route exact path="/:id" component={Post_info}></Route>
                      <Route path="/login" component={Login}></Route>
                      <Route path="/join" component={Join}></Route>
                    </div> 
                </div>
      </Router>
      
    );
  }
}

export default App;
