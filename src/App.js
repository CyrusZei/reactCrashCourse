import React, { Component } from 'react';
import Dumb from './Components/Dumb';
import Smart from './Components/Smart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smart />
      </div>
    );
  }
}

export default App;
