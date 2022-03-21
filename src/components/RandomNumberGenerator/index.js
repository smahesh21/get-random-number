import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  isClickedOnGenerateBtn = () =>
    this.setState(() => ({randomNumber: Math.ceil(Math.random() * 100)}))

  render() {
    const {randomNumber} = this.state
    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              onClick={this.isClickedOnGenerateBtn}
              className="generate-button"
            >
              Generate
            </button>
          </div>
          <p className="generated-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
