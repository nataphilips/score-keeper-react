import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

class ScoreButton extends Component {
  render() {
    return (
      <FancyButton onClick={this.props.onClick}>
        {this.props.children}
      </FancyButton>
    );
  }
}

const FancyButton = styled.button`
  background-color: #fff748;
  color: #3c1a5b;
  font-size: 16px;
  text-align: center;
  padding: 24px 78px;
  border: 4px solid #fff748;
  border-radius: 15px;
  margin: 3px;
  font-family: "Verdana";
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: #3c1a5b;
    color: #fff748;
    font-weight: 400;
  }
`

export default ScoreButton;
