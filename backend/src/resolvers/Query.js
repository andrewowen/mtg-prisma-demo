const { forwardTo } = require('prisma-binding')

const Query = {
  players: forwardTo('db'),
  decks: forwardTo('db')
}

module.exports = Query
