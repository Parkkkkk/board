import React, { Component } from 'react';
import './App.css';
import Post from '../src/component/post'

class App extends Component {
  render() {
    return (
      <div className="App">    
          <Post />
      </div>
    );
  }
}

export default App;
