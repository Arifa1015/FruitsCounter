// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onEatingBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  onEatingMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span>{mangoes}</span> mangoes <span>{bananas}</span>{' '}
            bananas
          </h1>
          <div className="img-container">
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="logo"
              />
              <button type="button" onClick={this.onEatingMango}>
                Eat Mango
              </button>
            </div>
            <div className="banana">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="logo"
              />
              <button type="button" onClick={this.onEatingBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
