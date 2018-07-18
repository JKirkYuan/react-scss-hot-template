import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
  }

  _handleClick() {
    window.alert("WOW so cool");
  }

  render() {
    return (
      <button className="button" onClick={this._handleClick}>{this.props.text}</button>
    );
  }
}

export default Button;
