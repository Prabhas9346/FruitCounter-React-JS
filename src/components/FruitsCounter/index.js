import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  mango = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes + 1,
      bananas: prevState.bananas,
    }))
  }

  banana = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes,
      bananas: prevState.bananas + 1,
    }))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="boxMain">
        <div className="containerBox">
          <h1>
            Bob ate <span>{mangoes}</span> mangoes <span>{bananas}</span>{' '}
            bananas
          </h1>
          <div className="fruitsBox">
            <div className="fruitsBox1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.mango}>
                Eat Mango
              </button>
            </div>
            <div className="fruitsBox1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.banana}>
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
