const Mutation = {
  async createPlayer(parent, args, ctx, info) {
    //TODO: Check if they are logged in

    const player = await ctx.db.mutation.createPlayer(
      {
        ...args
      },
      info
    )
    console.log(player)
    return player
  },

  async createDeck(parent, args, ctx, info) {
    //TODO: Check if they are logged in

    const deck = await ctx.db.mutation.createDeck(
      {
        ...args
      },
      info
    )
    console.log(deck)
    return deck
  }
}

module.exports = Mutation
