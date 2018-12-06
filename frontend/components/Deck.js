import React, { Component } from 'react'

class Deck extends Component {
  render() {
    const { deck } = this.props
    return (
      <div>
        {deck.alias} | Wins: {deck.wins}
      </div>
    )
  }
}

export default Deck
