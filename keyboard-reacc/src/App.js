import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Button(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class KeyBoard extends Component{
  constructor(props) {
    super(props);
    this.state = {
        buttons: Array(63).fill(null)
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

  renderButton(i) {
    return (
      <Button 
        value={this.state.buttons[i]}
        onClick={() => this.handleClick(i)} 
        />
    )
  }

  render() {
    this.keyInit();

    return (
      <div>
        <div className="board-row">
          {this.renderButton(0)}
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderButton(7)}
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderButton(10)}
          {this.renderButton(11)}
          {this.renderButton(12)}
          {this.renderButton(13)}
        </div>
        <div className="board-row">
          {this.renderButton(14)}
          {this.renderButton(15)}
          {this.renderButton(16)}
          {this.renderButton(17)}
          {this.renderButton(18)}
          {this.renderButton(19)}
          {this.renderButton(20)}
          {this.renderButton(21)}
          {this.renderButton(22)}
          {this.renderButton(23)}
          {this.renderButton(24)}
          {this.renderButton(25)}
          {this.renderButton(26)}
          {this.renderButton(27)}
        </div>
        <div className="board-row">
          {this.renderButton(28)}
          {this.renderButton(29)}
          {this.renderButton(30)}
          {this.renderButton(31)}
          {this.renderButton(32)}
          {this.renderButton(33)}
          {this.renderButton(34)}
          {this.renderButton(35)}
          {this.renderButton(36)}
          {this.renderButton(37)}
          {this.renderButton(38)}
          {this.renderButton(39)}
          {this.renderButton(40)}
        </div>
        <div className="board-row">
          {this.renderButton(41)}
          {this.renderButton(42)}
          {this.renderButton(43)}
          {this.renderButton(44)}
          {this.renderButton(45)}
          {this.renderButton(46)}
          {this.renderButton(47)}
          {this.renderButton(48)}
          {this.renderButton(49)}
          {this.renderButton(50)}
          {this.renderButton(51)}
          {this.renderButton(52)}
        </div>
        <div className="board-row">
          {this.renderButton(53)}
          {this.renderButton(54)}
          {this.renderButton(55)}
          {this.renderButton(56)}
          {this.renderButton(57)}
          {this.renderButton(58)}
          {this.renderButton(59)}
          <div className="board-column">
            {this.renderButton(60)}
            {this.renderButton(61)}
          </div>
          {this.renderButton(62)}
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




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>ok</code> and wtf to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default Project;
