import React from 'react';

export default class Button extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			width: 87,
			height: 160,
			x: 0,
			y: 0,
		}
		const { width, height, x, y } = this.props;

		if (width) {
			this.state.width = width;
		}
		if (height) {
			this.state.height = height;
		} 
		if (x) {
			this.state.x = x;
		}
		if (y) {
			this.state.y = y;
		}
	}

	getCoords() {
		let fullCoords = Array(8).fill(0);
		fullCoords[0] = this.state.x;
		fullCoords[1] = this.state.x + this.state.width;
		fullCoords[2] = this.state.x;
		fullCoords[3] = this.state.x + this.state.width;
		fullCoords[4] = this.state.y;
		fullCoords[5] = this.state.y;
		fullCoords[6] = this.state.y - this.state.height;
		fullCoords[7] = this.state.y - this.state.height;
		return fullCoords;
	}

	render() {
		const { value, onClick } = this.props;
		let buttonStyle = {
			width: this.state.width,
			height: this.state.height
		}
	   return (
	    <button className="button" onClick={onClick} style={buttonStyle}>
	      {value}
	    </button>
  		);
	}
}