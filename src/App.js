import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scorePlayer1: 0,
      scorePlayer2: 0,
      winningScore: 5,
      gameOver: false
    }
  }

  handleChange(event) {
    this.setState({winningScore: event.target.value});
  }

  selectPlayer1() {
    debugger
    if (!this.state.gameOver) {
      const nextScore = this.state.scorePlayer1 + 1;
      this.setState((state) => {
        return {scorePlayer1: nextScore}
      });
      if (nextScore === this.state.winningScore) {
          this.setState((state) => {
            return {gameOver: true}
          });
      }
    }
  }

  selectPlayer2() {
    if (!this.state.gameOver) {
      const nextScore = this.state.scorePlayer2 + 1;
      this.setState((state) => {
        return {scorePlayer2: nextScore}
      });
      if (nextScore === this.state.winningScore) {
          this.setState((state) => {
            return {gameOver: true}
          });
      }
    }
  }

  clickReset() {
    this.setState((state) => {
      return {
        scorePlayer1: 0,
        scorePlayer2: 0,
        gameOver: false
      }
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <h1><span id="p1Display">{this.state.scorePlayer1}</span> to <span id="p2Display">{this.state.scorePlayer2}</span></h1>
          <p>Playing to: <span id="winningScore">{this.state.winningScore}</span></p>
          <input type="number" value={this.state.winningScore} onChange={(e) => this.handleChange(e)}></input>
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
