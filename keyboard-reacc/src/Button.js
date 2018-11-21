import React from 'react';

export default class Button extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			width: 80,
			height: 160,
		}
		const { width, height } = this.props;

		if (width) {
			this.state.width = width;
		}
		if (height) {
			this.state.height = height;
		}
	}
	render() {
		const { value, onClick } = this.props;
	   return (
	    <button className="button" onClick={onClick}>
	      {value}
	    </button>
  		);
	}
}