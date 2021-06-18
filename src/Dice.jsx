import React, { Component } from 'react';
import './Dice.css'


let diceToClass = {
  1: 'fa-dice-one',
  2: 'fa-dice-two',
  3: 'fa-dice-three',
  4: 'fa-dice-four',
  5: 'fa-dice-five',
  6: 'fa-dice-six',
}


class Dice extends Component {
  render() {
    let { spots } = this.props
    let className_ = `fas + ${diceToClass.[spots]}`

    return (
      <div className="Dice">
        <i className={className_}></i>
      </div>
     );
  }
}

export default Dice