// Modules
import React, { Component } from 'react';
import './App.css';

// Router
import MyRouter from '../../router/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyRouter />
      </div>
    );
  }
}

export default App;
