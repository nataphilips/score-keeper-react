import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scorePlayer1: 0,
      scorePlayer2: 0,
      winningScore: 5,
      gameOver: false,
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
      }
    });
  }

  render() {
    return (
      <AppBody>
        <AppHeader>
          <Logo src={logo}/>
          <div>
            <h1>
              <Score displayWinningColor={this.state.scorePlayer1 === this.state.winningScore}>
                {this.state.scorePlayer1}
              </Score>
              &nbsp; to &nbsp;
              <Score displayWinningColor={this.state.scorePlayer2 === this.state.winningScore}>
                {this.state.scorePlayer2}
              </Score>
            </h1>

            <div>
              Playing to:&nbsp;
              <span>
                {this.state.winningScore}
              </span>
            </div>

            <input
              type="number"
              value={this.state.winningScore}
              onChange={(e) => this.handleChange(e)}
            />

            <button onClick={() => this.selectPlayer1()}>
              Player One
            </button>

            <button onClick={() => this.selectPlayer2()}>
              Player Two
            </button>

            <button onClick={() => this.clickReset()}>
              Reset
            </button>
          </div>
        </AppHeader>
      </AppBody>
    );
  }
}
const Score = styled.span`
  color: ${props => props.displayWinningColor ? 'green' : 'white'};
`
const AppBody = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`
export default App;
