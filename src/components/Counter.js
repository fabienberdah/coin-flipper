import React from "react";

class Counter extends React.Component {
  render() {
    const { totalFlips, totalHeads, totalTails } = this.props;
    return (
      <div className="Counter">
        <div className="Counter-container container">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>-</th>
                <th>Overall</th>
                <th>Heads</th>
                <th>Tails</th>
              </tr>
              <tr>
                <th>
                  <td>Total # of flips</td>
                </th>
                <td>{totalFlips}</td>
                <td>{totalHeads}</td>
                <td>{totalTails}</td>
              </tr>
              <tr>
                <th>
                  <td>Distribution</td>
                </th>
                <td>
                  {totalFlips !== 0 &&
                    `${Math.round((totalFlips / totalFlips) * 100)}%`}
                </td>
                <td>
                  {totalFlips !== 0 &&
                    `${Math.round((totalHeads / totalFlips) * 100)}%`}
                </td>
                <td>
                  {totalFlips !== 0 &&
                    `${Math.round((totalTails / totalFlips) * 100)}% `}
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default Counter;
