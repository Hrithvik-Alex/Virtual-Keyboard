import React, { Component } from 'react';
import './App.css';
import Button from './Button'; 

class KeyBoard extends Component{
  constructor(props) {
    super(props);
    this.state = {
        buttons: Array(63).fill(null),
        grid: Array(63).fill(0).map(() => Array(8).fill(0))
    }
  }
  

  /* This portion of the code will be used to initialized the keyboard UI, set button values, and initialize
  the coordinate grid.*/

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

  buttonWidth(i) {
    //SETTING WIDTHS OF BUTTON
    let width = 87;
    switch(i) {
      case 13: case 14:  
        width = 149;
        break;
      case 28:
        width = 175;
        break;
      case 40:
        width = 148;
        break;
      case 41: case 52:
        width = 205;
        break;
      case 56:
        width = 365;
        break;
      case 53: case 54: case 55: case 57: case 58: case 60: case 61:case 59: case 62:
        width = 114;
        break;
    }
    return width;
  }

  buttonX(i) {
    let x = 0;
    let widthcounter = 0;
    for(let j = 0; j < 63; j++){
      if(j == 14 || j == 28 || j== 41 || j==52){
        widthcounter = 0;
      }
      widthcounter += this.buttonWidth(j);
      if(j==i){
        x = widthcounter;
        break;
      }
    }
    return x;
  }

  buttonY(i) {
    let y = 0;
    if(i>13){
      y = 160;
    } else if(i>27){
      y = 320;
    } else if(i>40){
      y = 480;
    } else if(i>52){
      y = 640;
    }
    return y;
  }


  renderButton(i) {
    let x = this.buttonX(i);
    let y = this.buttonY(i);
    let width = this.buttonWidth(i);
    let height = 160;
    if(i == 60 || i == 61) {
      height = 80;
    }
    
    //GRID INIT
    let fullCoords = Array(8).fill(0);
		fullCoords[0] = x;
		fullCoords[1] = x + width;
		fullCoords[2] = x;
		fullCoords[3] = x + width;
		fullCoords[4] = y;
		fullCoords[5] = y;
		fullCoords[6] = y - height;
		fullCoords[7] = y - height;
    this.state.grid[i] = fullCoords;

      return (
        <Button 
        value={this.state.buttons[i]}
        onClick={() => this.handleClick(i)}
        width={width}
        height={height}
        x={x}
        y={y}
        />
      )
    }

  renderStuff() {
    return this.state.buttons.map((item, i) => {
      let flag = false;
      if (i == 13 || i == 27 || i == 40 || i == 52) {
        flag = true;
      }
      
      if(flag) {
        return (
          <div className="board-row"> {this.renderButton(i)} </div>
        )
      } else if(i == 60) {
        return (
          <div className="grid">
            <div className="board-column"> 
              {this.renderButton(i)}
              {this.renderButton(i+2)}
            </div>
            <div id="downButton"className="board-column">
              {this.renderButton(i+1)}
            </div>
          </div>
          
        )
      }
      else if(i == 61 || i==62){
        return(
          <div></div>
        )
      }
        else {
          return (
            <div>{this.renderButton(i)}</div> 
          )
        }
      
    })
  }


/* This portion of the code will handle the logic behind handling normal keyboard and swipe functionality. */


/* _onMouseMove(e) {
  const { screenX, screenY } = e;
  console.log(`x: ${screenX} y: ${screenY}`);
   } */
  


   handleClick(i) {
    console.log("YEET U CLICKED " + this.state.buttons[i]);
  }





  
  render() {
    this.keyInit();

    return (
      <div className="container" /*onMouseMove={this._onMouseMove.bind(this)}*/>
        <div className="board-row">
          {this.renderStuff()}
      </div>
      </div>
    )
    
}
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
