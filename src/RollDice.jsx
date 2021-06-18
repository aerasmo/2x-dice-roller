import React, { Component } from 'react';
import Dice from './Dice'
import './RollDice.css'


const randomDice = () => Math.floor(Math.random() * 6) + 1 
  

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: randomDice(),
      dice2: randomDice(),
    }
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    console.log('Rolling Dice...')
    this.setState( {
      dice1: randomDice(),
      dice2: randomDice(),
    })
  }
  render() {
    let { dice1, dice2} = this.state
    return (
      <div className="RollDice">
        <div className="dice-area">
          <Dice spots={dice1} />
          <Dice spots={dice2} />
        </div>
        <button onClick={this.rollDice}> Roll Dice! </button>
      </div>
    );
  }
}


export default RollDice