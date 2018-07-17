import React, { Component } from 'react';
import './Test.css';

class Test extends Component {

  _handleClick() {
    window.alert("WOW so cool");
  }

  render() {
    return (
      <button onClick={this._handleClick}></button>
    );
  }
}

export default Test;
