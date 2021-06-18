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
      rolling: false,
    }
    this.roll = this.roll.bind(this);
  }
  roll() {
    console.log('Rolling Dice...')
    this.setState( {
      rolling: true
    })

    let timesRun = 0;
    let limit = randomDice() * 2 + 2
    let interval = setInterval(() =>{
        timesRun += 1;
        this.setState( {
          dice1: randomDice(),
          dice2: randomDice(),
          rolling: true
        })
        
        if(timesRun === limit){
            this.setState( {
              rolling: false
            })
            clearInterval(interval);
            
        }
        //do whatever here..
    }, 70); 
  }

  render() {
    let { dice1, dice2} = this.state
    return (
      <div className="RollDice">
        <div className="dice-area">
          <Dice spots={dice1} rolling={this.state.rolling}/>
          <Dice spots={dice2} rolling={this.state.rolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}> 
          {this.state.rolling == false 
            ? "Roll Dice!"
            : "Rolling..."
          }
        </button>
      </div>
    );
  }
}


export default RollDice