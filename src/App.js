import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scorePlayer1: 0,
      scorePlayer2: 0,
      winningScore: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }


  selectPlayer1() {
    this.setState((state) => {
      return {scorePlayer1: state.scorePlayer1 + 1}
    });
  }

  selectPlayer2() {
    this.setState((state) => {
      return {scorePlayer2: state.scorePlayer2 + 1}
    });
  }

  clickReset() {
    this.setState((state) => {
      return {
        scorePlayer1: 0,
        scorePlayer2: 0
      }
    });
  }

  handleChange(event) {
    this.setState({winningScore: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <h1><span id="p1Display">{this.state.scorePlayer1}</span> to <span id="p2Display">{this.state.scorePlayer2}</span></h1>
          <p>Playing to: <span id="winningScore">{this.state.winningScore}</span></p>
          <input type="number" value={this.state.winningScore} onChange={this.handleChange}></input>
          <button onClick={() => this.selectPlayer1()}>Player One</button>
          <button onClick={() => this.selectPlayer2()}>Player Two</button>
          <button onClick={() => this.clickReset()}>Reset</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
