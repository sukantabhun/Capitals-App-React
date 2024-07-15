import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeStateId: countryAndCapitalsList[0].id}

  onChangeSelectElement = event =>
    this.setState({activeStateId: event.target.value})

  render() {
    const {activeStateId} = this.state
    const countryVal = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeStateId,
    ).country
    return (
      <div className="element-container">
        <div className="container">
          <h1>Countries And Capitals</h1>
          <div className="select-container">
            <select
              type="select"
              id="selectCapital"
              onChange={this.onChangeSelectElement}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option value={eachCapital.id} key={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="country"> {countryVal} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
