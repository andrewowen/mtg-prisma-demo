import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Deck from './Deck'

const ALL_DECKS_QUERY = gql`
  query ALL_DECKS_QUERY {
    decks {
      id
      alias
      commander
      wins
    }
  }
`

const Center = styled.div`
  text-align: center;
`

const DecksList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
`

class Decks extends Component {
  render() {
    return (
      <Center>
        <p>Decks</p>
        <Query query={ALL_DECKS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error: {error.message}</p>
            return (
              <DecksList>
                {data.decks.map(deck => (
                  <Deck key={deck.id} deck={deck} />
                ))}
              </DecksList>
            )
          }}
        </Query>
      </Center>
    )
  }
}

export default Decks
