import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <h1><span id="p1Display">0</span> to <span id="p2Display">0</span></h1>
          <p>Playing to: <span id="winningScore">5</span></p>
          <input type="number"></input>
          <button id="p1">Player One</button>
          <button id="p2">Player Two</button>
          <button id="reset">Reset</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
