import React, { Component } from 'react';
import {BrowserRouter as  Router , Route  } from 'react-router-dom'
import {
profile,
PostList,
Login,
Join,
SPOST,
Post,
Sidebar} from './component/index'

class App extends Component {
  render() {
    return (
      <Router >
                <div className="App">
                    <div className="container">
                      <Sidebar />
                      <Route exact path="/postlist" component={PostList}></Route>
                      <Route path="/postlist/:id" component={SPOST}></Route>
                      <Route path="/newpost" component={Post}></Route>
                      <Route path="/profile" component={profile}></Route>
                      <Route path="/login" component={Login}></Route>
                      <Route path="/join" component={Join}></Route>
                    </div> 
                </div>
      </Router>
      
    );
  }
}

export default App;
