import React, { Component } from "react";
import Coin from "./Coin";
import Counter from "./Counter";
import "../styles/CoinFlipper.css";

export class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFace: "",
      totalFlips: 0,
      totalHeads: 0,
      totalTails: 0,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin = () => {
    const faces = ["heads", "tails"];
    const flipValue = faces[Math.floor(Math.random() * 2)];
    console.log(flipValue);
    this.setState((currentState) => ({
      currentFace: flipValue,
      totalFlips: currentState.totalFlips + 1,
    }));
    if (flipValue === "heads") {
      this.setState((currentState) => ({
        totalHeads: currentState.totalHeads + 1,
      }));
    } else if (flipValue === "tails") {
      this.setState((currentState) => ({
        totalTails: currentState.totalTails + 1,
      }));
    }
  };

  render() {
    const { totalTails, totalFlips, totalHeads } = this.state;
    const renderCoin =
      this.state.currentFace === "heads" ? (
        <Coin
          src="https://upload.wikimedia.org/wikipedia/commons/f/fb/2019-canadian-2-dollar-polar-bear-toonie-coin-2-800x800.jpg"
          alt="Heads"
        />
      ) : (
        <Coin
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/2019-canadian-2-dollar-polar-bear-toonie-coin-1-800x800.jpg"
          alt="Tails"
        />
      );
    return (
      <div className="CoinFlipper">
        <div className="CoinFlipper-container">
          <div className="CoinFlipper-main">
            <h1>Let's flip a coin!</h1>
            {renderCoin}
            <button onClick={this.flipCoin} className="CoinFlipper-button">
              Flip!!!
            </button>
          </div>
        </div>
        <Counter
          totalFlips={totalFlips}
          totalTails={totalTails}
          totalHeads={totalHeads}
        />
      </div>
    );
  }
}

export default CoinFlipper;
