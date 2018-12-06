module.exports = {
        typeDefs: /* GraphQL */ `type AggregateDeck {
  count: Int!
}

type AggregatePlayer {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Deck {
  id: ID!
  alias: String!
  description: String
  commander: String!
  player: Player!
  active: Boolean!
  games: Int!
  wins: Int!
  winPercentage: Float!
  elo: Float!
  eloDelta: Float!
}

type DeckConnection {
  pageInfo: PageInfo!
  edges: [DeckEdge]!
  aggregate: AggregateDeck!
}

input DeckCreateInput {
  alias: String!
  description: String
  commander: String!
  player: PlayerCreateOneWithoutDecksInput!
  active: Boolean!
  games: Int!
  wins: Int!
  winPercentage: Float!
  elo: Float!
  eloDelta: Float!
}

input DeckCreateManyWithoutPlayerInput {
  create: [DeckCreateWithoutPlayerInput!]
  connect: [DeckWhereUniqueInput!]
}

input DeckCreateWithoutPlayerInput {
  alias: String!
  description: String
  commander: String!
  active: Boolean!
  games: Int!
  wins: Int!
  winPercentage: Float!
  elo: Float!
  eloDelta: Float!
}

type DeckEdge {
  node: Deck!
  cursor: String!
}

enum DeckOrderByInput {
  id_ASC
  id_DESC
  alias_ASC
  alias_DESC
  description_ASC
  description_DESC
  commander_ASC
  commander_DESC
  active_ASC
  active_DESC
  games_ASC
  games_DESC
  wins_ASC
  wins_DESC
  winPercentage_ASC
  winPercentage_DESC
  elo_ASC
  elo_DESC
  eloDelta_ASC
  eloDelta_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DeckPreviousValues {
  id: ID!
  alias: String!
  description: String
  commander: String!
  active: Boolean!
  games: Int!
  wins: Int!
  winPercentage: Float!
  elo: Float!
  eloDelta: Float!
}

type DeckSubscriptionPayload {
  mutation: MutationType!
  node: Deck
  updatedFields: [String!]
  previousValues: DeckPreviousValues
}

input DeckSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DeckWhereInput
  AND: [DeckSubscriptionWhereInput!]
  OR: [DeckSubscriptionWhereInput!]
  NOT: [DeckSubscriptionWhereInput!]
}

input DeckUpdateInput {
  alias: String
  description: String
  commander: String
  player: PlayerUpdateOneRequiredWithoutDecksInput
  active: Boolean
  games: Int
  wins: Int
  winPercentage: Float
  elo: Float
  eloDelta: Float
}

input DeckUpdateManyMutationInput {
  alias: String
  description: String
  commander: String
  active: Boolean
  games: Int
  wins: Int
  winPercentage: Float
  elo: Float
  eloDelta: Float
}

input DeckUpdateManyWithoutPlayerInput {
  create: [DeckCreateWithoutPlayerInput!]
  delete: [DeckWhereUniqueInput!]
  connect: [DeckWhereUniqueInput!]
  disconnect: [DeckWhereUniqueInput!]
  update: [DeckUpdateWithWhereUniqueWithoutPlayerInput!]
  upsert: [DeckUpsertWithWhereUniqueWithoutPlayerInput!]
}

input DeckUpdateWithoutPlayerDataInput {
  alias: String
  description: String
  commander: String
  active: Boolean
  games: Int
  wins: Int
  winPercentage: Float
  elo: Float
  eloDelta: Float
}

input DeckUpdateWithWhereUniqueWithoutPlayerInput {
  where: DeckWhereUniqueInput!
  data: DeckUpdateWithoutPlayerDataInput!
}

input DeckUpsertWithWhereUniqueWithoutPlayerInput {
  where: DeckWhereUniqueInput!
  update: DeckUpdateWithoutPlayerDataInput!
  create: DeckCreateWithoutPlayerInput!
}

input DeckWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  alias: String
  alias_not: String
  alias_in: [String!]
  alias_not_in: [String!]
  alias_lt: String
  alias_lte: String
  alias_gt: String
  alias_gte: String
  alias_contains: String
  alias_not_contains: String
  alias_starts_with: String
  alias_not_starts_with: String
  alias_ends_with: String
  alias_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  commander: String
  commander_not: String
  commander_in: [String!]
  commander_not_in: [String!]
  commander_lt: String
  commander_lte: String
  commander_gt: String
  commander_gte: String
  commander_contains: String
  commander_not_contains: String
  commander_starts_with: String
  commander_not_starts_with: String
  commander_ends_with: String
  commander_not_ends_with: String
  player: PlayerWhereInput
  active: Boolean
  active_not: Boolean
  games: Int
  games_not: Int
  games_in: [Int!]
  games_not_in: [Int!]
  games_lt: Int
  games_lte: Int
  games_gt: Int
  games_gte: Int
  wins: Int
  wins_not: Int
  wins_in: [Int!]
  wins_not_in: [Int!]
  wins_lt: Int
  wins_lte: Int
  wins_gt: Int
  wins_gte: Int
  winPercentage: Float
  winPercentage_not: Float
  winPercentage_in: [Float!]
  winPercentage_not_in: [Float!]
  winPercentage_lt: Float
  winPercentage_lte: Float
  winPercentage_gt: Float
  winPercentage_gte: Float
  elo: Float
  elo_not: Float
  elo_in: [Float!]
  elo_not_in: [Float!]
  elo_lt: Float
  elo_lte: Float
  elo_gt: Float
  elo_gte: Float
  eloDelta: Float
  eloDelta_not: Float
  eloDelta_in: [Float!]
  eloDelta_not_in: [Float!]
  eloDelta_lt: Float
  eloDelta_lte: Float
  eloDelta_gt: Float
  eloDelta_gte: Float
  AND: [DeckWhereInput!]
  OR: [DeckWhereInput!]
  NOT: [DeckWhereInput!]
}

input DeckWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDeck(data: DeckCreateInput!): Deck!
  updateDeck(data: DeckUpdateInput!, where: DeckWhereUniqueInput!): Deck
  updateManyDecks(data: DeckUpdateManyMutationInput!, where: DeckWhereInput): BatchPayload!
  upsertDeck(where: DeckWhereUniqueInput!, create: DeckCreateInput!, update: DeckUpdateInput!): Deck!
  deleteDeck(where: DeckWhereUniqueInput!): Deck
  deleteManyDecks(where: DeckWhereInput): BatchPayload!
  createPlayer(data: PlayerCreateInput!): Player!
  updatePlayer(data: PlayerUpdateInput!, where: PlayerWhereUniqueInput!): Player
  updateManyPlayers(data: PlayerUpdateManyMutationInput!, where: PlayerWhereInput): BatchPayload!
  upsertPlayer(where: PlayerWhereUniqueInput!, create: PlayerCreateInput!, update: PlayerUpdateInput!): Player!
  deletePlayer(where: PlayerWhereUniqueInput!): Player
  deleteManyPlayers(where: PlayerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Player {
  id: ID!
  alias: String!
  decks(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Deck!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PlayerConnection {
  pageInfo: PageInfo!
  edges: [PlayerEdge]!
  aggregate: AggregatePlayer!
}

input PlayerCreateInput {
  alias: String!
  decks: DeckCreateManyWithoutPlayerInput
}

input PlayerCreateOneWithoutDecksInput {
  create: PlayerCreateWithoutDecksInput
  connect: PlayerWhereUniqueInput
}

input PlayerCreateWithoutDecksInput {
  alias: String!
}

type PlayerEdge {
  node: Player!
  cursor: String!
}

enum PlayerOrderByInput {
  id_ASC
  id_DESC
  alias_ASC
  alias_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlayerPreviousValues {
  id: ID!
  alias: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PlayerSubscriptionPayload {
  mutation: MutationType!
  node: Player
  updatedFields: [String!]
  previousValues: PlayerPreviousValues
}

input PlayerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlayerWhereInput
  AND: [PlayerSubscriptionWhereInput!]
  OR: [PlayerSubscriptionWhereInput!]
  NOT: [PlayerSubscriptionWhereInput!]
}

input PlayerUpdateInput {
  alias: String
  decks: DeckUpdateManyWithoutPlayerInput
}

input PlayerUpdateManyMutationInput {
  alias: String
}

input PlayerUpdateOneRequiredWithoutDecksInput {
  create: PlayerCreateWithoutDecksInput
  update: PlayerUpdateWithoutDecksDataInput
  upsert: PlayerUpsertWithoutDecksInput
  connect: PlayerWhereUniqueInput
}

input PlayerUpdateWithoutDecksDataInput {
  alias: String
}

input PlayerUpsertWithoutDecksInput {
  update: PlayerUpdateWithoutDecksDataInput!
  create: PlayerCreateWithoutDecksInput!
}

input PlayerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  alias: String
  alias_not: String
  alias_in: [String!]
  alias_not_in: [String!]
  alias_lt: String
  alias_lte: String
  alias_gt: String
  alias_gte: String
  alias_contains: String
  alias_not_contains: String
  alias_starts_with: String
  alias_not_starts_with: String
  alias_ends_with: String
  alias_not_ends_with: String
  decks_every: DeckWhereInput
  decks_some: DeckWhereInput
  decks_none: DeckWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PlayerWhereInput!]
  OR: [PlayerWhereInput!]
  NOT: [PlayerWhereInput!]
}

input PlayerWhereUniqueInput {
  id: ID
  alias: String
}

type Query {
  deck(where: DeckWhereUniqueInput!): Deck
  decks(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Deck]!
  decksConnection(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DeckConnection!
  player(where: PlayerWhereUniqueInput!): Player
  players(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Player]!
  playersConnection(where: PlayerWhereInput, orderBy: PlayerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlayerConnection!
  node(id: ID!): Node
}

type Subscription {
  deck(where: DeckSubscriptionWhereInput): DeckSubscriptionPayload
  player(where: PlayerSubscriptionWhereInput): PlayerSubscriptionPayload
}
`
      }
    