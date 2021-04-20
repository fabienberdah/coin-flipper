import React, { Component } from "react";
import "../styles/Coin.css";
export class Coin extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <div className="Coin">
        <img src={src} alt={alt} className="Coin-image" />
      </div>
    );
  }
}

export default Coin;
