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
      gameOver: false,
      changeClassOne: "playerScore",
      changeClassTwo: "playerScore"
    }
  }

  handleChange(event) {
    const manualScore = Number(event.target.value);
    this.setState({winningScore: manualScore});
  }

  selectPlayer1() {
    if (!this.state.gameOver) {
      const nextScore = this.state.scorePlayer1 + 1;
      this.setState((state) => {
        return {scorePlayer1: nextScore}
      });
      if (nextScore === this.state.winningScore) {
          this.setState((state) => {
            return {gameOver: true}
          });
          this.setState((state) => {
            return {changeClassOne: "winner"}
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
          this.setState((state) => {
            return {changeClassTwo: "winner"}
          });
      }
    }
  }

  clickReset() {
    this.setState((state) => {
      return {
        scorePlayer1: 0,
        scorePlayer2: 0,
        gameOver: false,
        changeClassOne: "playerScore",
        changeClassTwo: "playerScore"
      }
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <h1><span id="p1Display" className={this.state.changeClassOne}>{this.state.scorePlayer1}</span> to <span id="p2Display" className={this.state.changeClassTwo}>{this.state.scorePlayer2}</span></h1>
          <div>Playing to: <span id="winningScore">{this.state.winningScore}</span></div>
          <input type="number" value={this.state.winningScore} onChange={(e) => this.handleChange(e)}></input>
          <button onClick={() => this.selectPlayer1()}>Player One</button>
          <button onClick={() => this.selectPlayer2()}>Player Two</button>
          <button onClick={() => this.clickReset()}>Reset</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
