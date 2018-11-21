import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'; 

class KeyBoard extends Component{
  constructor(props) {
    super(props);
    this.state = {
        buttons: Array(63).fill(null),
    }
  }
  
  keyInit() {
    //INITIALIZING EACH KEY
    const everyKey = "`1234567890-=__qwertyuiop[]\\_asdfghjkl;'__zxcvbnm,./__"
    this.state.buttons = this.state.buttons.map((button, i) => button = everyKey[i]);
    //SPECIAL KEYS
    this.state.buttons[13] = "bksp";
    this.state.buttons[14] = "tab";
    this.state.buttons[28] = "caps";
    this.state.buttons[40] = "enter";
    this.state.buttons[41] = "shift";
    this.state.buttons[52] = "shift";
    this.state.buttons[53] = "ctrl";
    this.state.buttons[54] = "option";
    this.state.buttons[55] = "cmd";
    this.state.buttons[56] = "space";
    this.state.buttons[57] = "cmd";
    this.state.buttons[58] = "option";
    this.state.buttons[59] = "left";
    this.state.buttons[60] = "up";
    this.state.buttons[61] = "down";
    this.state.buttons[62] = "right";
  }

  handleClick(i) {
    console.log("YEET U CLICKED " + this.state.buttons[i]);
  }

  renderStuff() {
    return array.map((item, i) => {
      let flag = false;
      if (i == 14 || i == 28 || i == 41 || i == 53) {
        flag = true;
      }
      return (
        flag ? </div><div className="board-row"> {this.renderButton(i)}
        :
        {this.renderButton(i)};
      )
    })
  }

_onMouseMove(e) {
  const { screenX, screenY } = e;
  console.log(`x: ${screenX} y: ${screenY}`);
  }
  

  renderButton(i) {
    let width = null;
    let height = null;
    switch(i) {
      case 13: case 14: case 28: case 41: case 52:
        width = 160;
        break;
    }
      return (
        <Button 
        value={this.state.buttons[i]}
        onClick={() => this.handleClick(i)}
        width={width}
        height={height}
        />
      
      )
    }
  

  render() {
    this.keyInit();

    return (
      <div className="container" onMouseMove={this._onMouseMove.bind(this)}>
        <div className="board-row">
          {renderStuff()};
      </div>
    )}
    

}

class Project extends Component{
  render() {
    return(
      <div className="project">
        <div className="keyboard">
          <KeyBoard />
        </div>
      </div>
    )
  }
}

export default Project;
