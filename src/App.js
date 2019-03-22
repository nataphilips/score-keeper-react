import React, { Component } from 'react';
import logo from './BallLogo.png';
import styled from 'styled-components';
import ScoreButton from './ScoreButton'

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

  changeWinningScore(event) {
    const manualScore = Number(event.target.value);
    this.setState({ winningScore: manualScore });
    this.reset();
  }

  increasePlayerScore(whichPlayer) {
    if (!this.state.gameOver) {
      const player = whichPlayer === 1 ? 'scorePlayer1' : 'scorePlayer2';

      const nextScore = this.state[player] + 1;
      const newState = {}
      newState[player] = nextScore
      this.setState(newState)

      if (nextScore === this.state.winningScore) {
        this.setState({ gameOver: true })
      }
    }
  }

  reset() {
    this.setState({
      scorePlayer1: 0,
      scorePlayer2: 0,
      gameOver: false,
    });
  }

  render() {
    return (
      <AppBody>
        <AppHeader>
          <Logo src={logo}/>
          <div>
            <ScoreContainer>
              <Score displayWinningColor={this.state.scorePlayer1 === this.state.winningScore}>
                {this.state.scorePlayer1}
              </Score>
              &nbsp; to &nbsp;
              <Score displayWinningColor={this.state.scorePlayer2 === this.state.winningScore}>
                {this.state.scorePlayer2}
              </Score>
            </ScoreContainer>

            <ScoreShower>
              Playing to:&nbsp;
              <ScoreInput
                type="number"
                value={this.state.winningScore}
                onChange={(e) => this.changeWinningScore(e)}
              />
            </ScoreShower>


            <ScoreButton onClick={() => this.increasePlayerScore(1)}>
              PLAYER ONE SCORES
            </ScoreButton>

            <ScoreButton onClick={() => this.increasePlayerScore(2)}>
              PLAYER TWO SCORES
            </ScoreButton>

            <ScoreButton onClick={() => this.reset()}>
              RESET
            </ScoreButton>
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
  background-color: #3c1a5b;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 2vmin);
  color: white;
`
const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`
const ScoreInput = styled.input`
  height: 20px;
  width: 30px;
  margin: 3px;
  padding-left: 14px;
  border: 22px solid #fff748;
  font-size: 26px;
  text-align: center;
  border-radius: 15px;
  background-color: #fff748;
  color: #3c1a5b;
  outline:0;
`
const ScoreShower = styled.div`
  margin: 40px;
`
const ScoreContainer = styled.div`
  font-size: 2em;
  margin: 0.67em 0;
  font-weight: bold;
`

export default App;
