import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    repositories: <T = Array<Repository | null>>(args: { where?: RepositoryWhereInput | null, orderBy?: RepositoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    appKeys: <T = Array<AppKey | null>>(args: { where?: AppKeyWhereInput | null, orderBy?: AppKeyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    repository: <T = Repository | null>(args: { where: RepositoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    appKey: <T = AppKey | null>(args: { where: AppKeyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    repositoriesConnection: <T = RepositoryConnection>(args: { where?: RepositoryWhereInput | null, orderBy?: RepositoryOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    appKeysConnection: <T = AppKeyConnection>(args: { where?: AppKeyWhereInput | null, orderBy?: AppKeyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRepository: <T = Repository>(args: { data: RepositoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAppKey: <T = AppKey>(args: { data: AppKeyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateRepository: <T = Repository | null>(args: { data: RepositoryUpdateInput, where: RepositoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAppKey: <T = AppKey | null>(args: { data: AppKeyUpdateInput, where: AppKeyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRepository: <T = Repository | null>(args: { where: RepositoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAppKey: <T = AppKey | null>(args: { where: AppKeyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRepository: <T = Repository>(args: { where: RepositoryWhereUniqueInput, create: RepositoryCreateInput, update: RepositoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAppKey: <T = AppKey>(args: { where: AppKeyWhereUniqueInput, create: AppKeyCreateInput, update: AppKeyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRepositories: <T = BatchPayload>(args: { data: RepositoryUpdateManyMutationInput, where?: RepositoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAppKeys: <T = BatchPayload>(args: { data: AppKeyUpdateManyMutationInput, where?: AppKeyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRepositories: <T = BatchPayload>(args: { where?: RepositoryWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAppKeys: <T = BatchPayload>(args: { where?: AppKeyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    repository: <T = RepositorySubscriptionPayload | null>(args: { where?: RepositorySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    appKey: <T = AppKeySubscriptionPayload | null>(args: { where?: AppKeySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Repository: (where?: RepositoryWhereInput) => Promise<boolean>
  AppKey: (where?: AppKeyWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAppKey {
  count: Int!
}

type AggregateRepository {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AppKey implements Node {
  id: ID!
  user: User!
  key: String!
  name: String
}

"""A connection to a list of items."""
type AppKeyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AppKeyEdge]!
  aggregate: AggregateAppKey!
}

input AppKeyCreateInput {
  id: ID
  key: String!
  name: String
  user: UserCreateOneWithoutKeysInput!
}

input AppKeyCreateManyWithoutUserInput {
  create: [AppKeyCreateWithoutUserInput!]
  connect: [AppKeyWhereUniqueInput!]
}

input AppKeyCreateOneInput {
  create: AppKeyCreateInput
  connect: AppKeyWhereUniqueInput
}

input AppKeyCreateWithoutUserInput {
  id: ID
  key: String!
  name: String
}

"""An edge in a connection."""
type AppKeyEdge {
  """The item at the end of the edge."""
  node: AppKey!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AppKeyOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  name_ASC
  name_DESC
}

type AppKeyPreviousValues {
  id: ID!
  key: String!
  name: String
}

input AppKeyScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [AppKeyScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppKeyScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppKeyScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type AppKeySubscriptionPayload {
  mutation: MutationType!
  node: AppKey
  updatedFields: [String!]
  previousValues: AppKeyPreviousValues
}

input AppKeySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AppKeySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppKeySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppKeySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AppKeyWhereInput
}

input AppKeyUpdateDataInput {
  key: String
  name: String
  user: UserUpdateOneRequiredWithoutKeysInput
}

input AppKeyUpdateInput {
  key: String
  name: String
  user: UserUpdateOneRequiredWithoutKeysInput
}

input AppKeyUpdateManyDataInput {
  key: String
  name: String
}

input AppKeyUpdateManyMutationInput {
  key: String
  name: String
}

input AppKeyUpdateManyWithoutUserInput {
  create: [AppKeyCreateWithoutUserInput!]
  connect: [AppKeyWhereUniqueInput!]
  set: [AppKeyWhereUniqueInput!]
  disconnect: [AppKeyWhereUniqueInput!]
  delete: [AppKeyWhereUniqueInput!]
  update: [AppKeyUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [AppKeyUpdateManyWithWhereNestedInput!]
  deleteMany: [AppKeyScalarWhereInput!]
  upsert: [AppKeyUpsertWithWhereUniqueWithoutUserInput!]
}

input AppKeyUpdateManyWithWhereNestedInput {
  where: AppKeyScalarWhereInput!
  data: AppKeyUpdateManyDataInput!
}

input AppKeyUpdateOneRequiredInput {
  create: AppKeyCreateInput
  connect: AppKeyWhereUniqueInput
  update: AppKeyUpdateDataInput
  upsert: AppKeyUpsertNestedInput
}

input AppKeyUpdateWithoutUserDataInput {
  key: String
  name: String
}

input AppKeyUpdateWithWhereUniqueWithoutUserInput {
  where: AppKeyWhereUniqueInput!
  data: AppKeyUpdateWithoutUserDataInput!
}

input AppKeyUpsertNestedInput {
  update: AppKeyUpdateDataInput!
  create: AppKeyCreateInput!
}

input AppKeyUpsertWithWhereUniqueWithoutUserInput {
  where: AppKeyWhereUniqueInput!
  update: AppKeyUpdateWithoutUserDataInput!
  create: AppKeyCreateWithoutUserInput!
}

input AppKeyWhereInput {
  """Logical AND on all given filters."""
  AND: [AppKeyWhereInput!]

  """Logical OR on all given filters."""
  OR: [AppKeyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AppKeyWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  user: UserWhereInput
}

input AppKeyWhereUniqueInput {
  id: ID
  key: String
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""Raw JSON value"""
scalar Json

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createRepository(data: RepositoryCreateInput!): Repository!
  createAppKey(data: AppKeyCreateInput!): AppKey!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateRepository(data: RepositoryUpdateInput!, where: RepositoryWhereUniqueInput!): Repository
  updateAppKey(data: AppKeyUpdateInput!, where: AppKeyWhereUniqueInput!): AppKey
  deleteUser(where: UserWhereUniqueInput!): User
  deleteRepository(where: RepositoryWhereUniqueInput!): Repository
  deleteAppKey(where: AppKeyWhereUniqueInput!): AppKey
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertRepository(where: RepositoryWhereUniqueInput!, create: RepositoryCreateInput!, update: RepositoryUpdateInput!): Repository!
  upsertAppKey(where: AppKeyWhereUniqueInput!, create: AppKeyCreateInput!, update: AppKeyUpdateInput!): AppKey!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyRepositories(data: RepositoryUpdateManyMutationInput!, where: RepositoryWhereInput): BatchPayload!
  updateManyAppKeys(data: AppKeyUpdateManyMutationInput!, where: AppKeyWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyRepositories(where: RepositoryWhereInput): BatchPayload!
  deleteManyAppKeys(where: AppKeyWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  repositories(where: RepositoryWhereInput, orderBy: RepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repository]!
  appKeys(where: AppKeyWhereInput, orderBy: AppKeyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppKey]!
  user(where: UserWhereUniqueInput!): User
  repository(where: RepositoryWhereUniqueInput!): Repository
  appKey(where: AppKeyWhereUniqueInput!): AppKey
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  repositoriesConnection(where: RepositoryWhereInput, orderBy: RepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RepositoryConnection!
  appKeysConnection(where: AppKeyWhereInput, orderBy: AppKeyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AppKeyConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Repository implements Node {
  id: ID!
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  owner: String!
  user: User!
  isTracked: Boolean!
  appKey: AppKey!
}

"""A connection to a list of items."""
type RepositoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RepositoryEdge]!
  aggregate: AggregateRepository!
}

input RepositoryCreateInput {
  id: ID
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  owner: String!
  isTracked: Boolean!
  user: UserCreateOneWithoutRepositoriesInput!
  appKey: AppKeyCreateOneInput!
}

input RepositoryCreateManyWithoutUserInput {
  create: [RepositoryCreateWithoutUserInput!]
  connect: [RepositoryWhereUniqueInput!]
}

input RepositoryCreateWithoutUserInput {
  id: ID
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  owner: String!
  isTracked: Boolean!
  appKey: AppKeyCreateOneInput!
}

"""An edge in a connection."""
type RepositoryEdge {
  """The item at the end of the edge."""
  node: Repository!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RepositoryOrderByInput {
  id_ASC
  id_DESC
  idExternal_ASC
  idExternal_DESC
  createdAtExternal_ASC
  createdAtExternal_DESC
  updatedAtExternal_ASC
  updatedAtExternal_DESC
  name_ASC
  name_DESC
  owner_ASC
  owner_DESC
  isTracked_ASC
  isTracked_DESC
}

type RepositoryPreviousValues {
  id: ID!
  idExternal: String!
  createdAtExternal: DateTime!
  updatedAtExternal: DateTime!
  name: String!
  owner: String!
  isTracked: Boolean!
}

input RepositoryScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [RepositoryScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [RepositoryScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RepositoryScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  idExternal: String

  """All values that are not equal to given value."""
  idExternal_not: String

  """All values that are contained in given list."""
  idExternal_in: [String!]

  """All values that are not contained in given list."""
  idExternal_not_in: [String!]

  """All values less than the given value."""
  idExternal_lt: String

  """All values less than or equal the given value."""
  idExternal_lte: String

  """All values greater than the given value."""
  idExternal_gt: String

  """All values greater than or equal the given value."""
  idExternal_gte: String

  """All values containing the given string."""
  idExternal_contains: String

  """All values not containing the given string."""
  idExternal_not_contains: String

  """All values starting with the given string."""
  idExternal_starts_with: String

  """All values not starting with the given string."""
  idExternal_not_starts_with: String

  """All values ending with the given string."""
  idExternal_ends_with: String

  """All values not ending with the given string."""
  idExternal_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  owner: String

  """All values that are not equal to given value."""
  owner_not: String

  """All values that are contained in given list."""
  owner_in: [String!]

  """All values that are not contained in given list."""
  owner_not_in: [String!]

  """All values less than the given value."""
  owner_lt: String

  """All values less than or equal the given value."""
  owner_lte: String

  """All values greater than the given value."""
  owner_gt: String

  """All values greater than or equal the given value."""
  owner_gte: String

  """All values containing the given string."""
  owner_contains: String

  """All values not containing the given string."""
  owner_not_contains: String

  """All values starting with the given string."""
  owner_starts_with: String

  """All values not starting with the given string."""
  owner_not_starts_with: String

  """All values ending with the given string."""
  owner_ends_with: String

  """All values not ending with the given string."""
  owner_not_ends_with: String
  isTracked: Boolean

  """All values that are not equal to given value."""
  isTracked_not: Boolean
}

type RepositorySubscriptionPayload {
  mutation: MutationType!
  node: Repository
  updatedFields: [String!]
  previousValues: RepositoryPreviousValues
}

input RepositorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RepositorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RepositorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RepositorySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RepositoryWhereInput
}

input RepositoryUpdateInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  owner: String
  isTracked: Boolean
  user: UserUpdateOneRequiredWithoutRepositoriesInput
  appKey: AppKeyUpdateOneRequiredInput
}

input RepositoryUpdateManyDataInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  owner: String
  isTracked: Boolean
}

input RepositoryUpdateManyMutationInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  owner: String
  isTracked: Boolean
}

input RepositoryUpdateManyWithoutUserInput {
  create: [RepositoryCreateWithoutUserInput!]
  connect: [RepositoryWhereUniqueInput!]
  set: [RepositoryWhereUniqueInput!]
  disconnect: [RepositoryWhereUniqueInput!]
  delete: [RepositoryWhereUniqueInput!]
  update: [RepositoryUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [RepositoryUpdateManyWithWhereNestedInput!]
  deleteMany: [RepositoryScalarWhereInput!]
  upsert: [RepositoryUpsertWithWhereUniqueWithoutUserInput!]
}

input RepositoryUpdateManyWithWhereNestedInput {
  where: RepositoryScalarWhereInput!
  data: RepositoryUpdateManyDataInput!
}

input RepositoryUpdateWithoutUserDataInput {
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  owner: String
  isTracked: Boolean
  appKey: AppKeyUpdateOneRequiredInput
}

input RepositoryUpdateWithWhereUniqueWithoutUserInput {
  where: RepositoryWhereUniqueInput!
  data: RepositoryUpdateWithoutUserDataInput!
}

input RepositoryUpsertWithWhereUniqueWithoutUserInput {
  where: RepositoryWhereUniqueInput!
  update: RepositoryUpdateWithoutUserDataInput!
  create: RepositoryCreateWithoutUserInput!
}

input RepositoryWhereInput {
  """Logical AND on all given filters."""
  AND: [RepositoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [RepositoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RepositoryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  idExternal: String

  """All values that are not equal to given value."""
  idExternal_not: String

  """All values that are contained in given list."""
  idExternal_in: [String!]

  """All values that are not contained in given list."""
  idExternal_not_in: [String!]

  """All values less than the given value."""
  idExternal_lt: String

  """All values less than or equal the given value."""
  idExternal_lte: String

  """All values greater than the given value."""
  idExternal_gt: String

  """All values greater than or equal the given value."""
  idExternal_gte: String

  """All values containing the given string."""
  idExternal_contains: String

  """All values not containing the given string."""
  idExternal_not_contains: String

  """All values starting with the given string."""
  idExternal_starts_with: String

  """All values not starting with the given string."""
  idExternal_not_starts_with: String

  """All values ending with the given string."""
  idExternal_ends_with: String

  """All values not ending with the given string."""
  idExternal_not_ends_with: String
  createdAtExternal: DateTime

  """All values that are not equal to given value."""
  createdAtExternal_not: DateTime

  """All values that are contained in given list."""
  createdAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  createdAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  createdAtExternal_lte: DateTime

  """All values greater than the given value."""
  createdAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  createdAtExternal_gte: DateTime
  updatedAtExternal: DateTime

  """All values that are not equal to given value."""
  updatedAtExternal_not: DateTime

  """All values that are contained in given list."""
  updatedAtExternal_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAtExternal_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAtExternal_lt: DateTime

  """All values less than or equal the given value."""
  updatedAtExternal_lte: DateTime

  """All values greater than the given value."""
  updatedAtExternal_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAtExternal_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  owner: String

  """All values that are not equal to given value."""
  owner_not: String

  """All values that are contained in given list."""
  owner_in: [String!]

  """All values that are not contained in given list."""
  owner_not_in: [String!]

  """All values less than the given value."""
  owner_lt: String

  """All values less than or equal the given value."""
  owner_lte: String

  """All values greater than the given value."""
  owner_gt: String

  """All values greater than or equal the given value."""
  owner_gte: String

  """All values containing the given string."""
  owner_contains: String

  """All values not containing the given string."""
  owner_not_contains: String

  """All values starting with the given string."""
  owner_starts_with: String

  """All values not starting with the given string."""
  owner_not_starts_with: String

  """All values ending with the given string."""
  owner_ends_with: String

  """All values not ending with the given string."""
  owner_not_ends_with: String
  isTracked: Boolean

  """All values that are not equal to given value."""
  isTracked_not: Boolean
  user: UserWhereInput
  appKey: AppKeyWhereInput
}

input RepositoryWhereUniqueInput {
  id: ID
  idExternal: String
  name: String
}

enum Role {
  USER
  ADMIN
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  repository(where: RepositorySubscriptionWhereInput): RepositorySubscriptionPayload
  appKey(where: AppKeySubscriptionWhereInput): AppKeySubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  hash: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  role: Role
  keys(where: AppKeyWhereInput, orderBy: AppKeyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AppKey!]
  repositories(where: RepositoryWhereInput, orderBy: RepositoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repository!]
  gitLogin: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  hash: String!
  name: String
  role: Role
  gitLogin: String!
  keys: AppKeyCreateManyWithoutUserInput
  repositories: RepositoryCreateManyWithoutUserInput
}

input UserCreateOneWithoutKeysInput {
  create: UserCreateWithoutKeysInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRepositoriesInput {
  create: UserCreateWithoutRepositoriesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutKeysInput {
  id: ID
  email: String!
  hash: String!
  name: String
  role: Role
  gitLogin: String!
  repositories: RepositoryCreateManyWithoutUserInput
}

input UserCreateWithoutRepositoriesInput {
  id: ID
  email: String!
  hash: String!
  name: String
  role: Role
  gitLogin: String!
  keys: AppKeyCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  hash_ASC
  hash_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
  gitLogin_ASC
  gitLogin_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  hash: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String
  role: Role
  gitLogin: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  hash: String
  name: String
  role: Role
  gitLogin: String
  keys: AppKeyUpdateManyWithoutUserInput
  repositories: RepositoryUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  hash: String
  name: String
  role: Role
  gitLogin: String
}

input UserUpdateOneRequiredWithoutKeysInput {
  create: UserCreateWithoutKeysInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutKeysDataInput
  upsert: UserUpsertWithoutKeysInput
}

input UserUpdateOneRequiredWithoutRepositoriesInput {
  create: UserCreateWithoutRepositoriesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutRepositoriesDataInput
  upsert: UserUpsertWithoutRepositoriesInput
}

input UserUpdateWithoutKeysDataInput {
  email: String
  hash: String
  name: String
  role: Role
  gitLogin: String
  repositories: RepositoryUpdateManyWithoutUserInput
}

input UserUpdateWithoutRepositoriesDataInput {
  email: String
  hash: String
  name: String
  role: Role
  gitLogin: String
  keys: AppKeyUpdateManyWithoutUserInput
}

input UserUpsertWithoutKeysInput {
  update: UserUpdateWithoutKeysDataInput!
  create: UserCreateWithoutKeysInput!
}

input UserUpsertWithoutRepositoriesInput {
  update: UserUpdateWithoutRepositoriesDataInput!
  create: UserCreateWithoutRepositoriesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  hash: String

  """All values that are not equal to given value."""
  hash_not: String

  """All values that are contained in given list."""
  hash_in: [String!]

  """All values that are not contained in given list."""
  hash_not_in: [String!]

  """All values less than the given value."""
  hash_lt: String

  """All values less than or equal the given value."""
  hash_lte: String

  """All values greater than the given value."""
  hash_gt: String

  """All values greater than or equal the given value."""
  hash_gte: String

  """All values containing the given string."""
  hash_contains: String

  """All values not containing the given string."""
  hash_not_contains: String

  """All values starting with the given string."""
  hash_starts_with: String

  """All values not starting with the given string."""
  hash_not_starts_with: String

  """All values ending with the given string."""
  hash_ends_with: String

  """All values not ending with the given string."""
  hash_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  gitLogin: String

  """All values that are not equal to given value."""
  gitLogin_not: String

  """All values that are contained in given list."""
  gitLogin_in: [String!]

  """All values that are not contained in given list."""
  gitLogin_not_in: [String!]

  """All values less than the given value."""
  gitLogin_lt: String

  """All values less than or equal the given value."""
  gitLogin_lte: String

  """All values greater than the given value."""
  gitLogin_gt: String

  """All values greater than or equal the given value."""
  gitLogin_gte: String

  """All values containing the given string."""
  gitLogin_contains: String

  """All values not containing the given string."""
  gitLogin_not_contains: String

  """All values starting with the given string."""
  gitLogin_starts_with: String

  """All values not starting with the given string."""
  gitLogin_not_starts_with: String

  """All values ending with the given string."""
  gitLogin_ends_with: String

  """All values not ending with the given string."""
  gitLogin_not_ends_with: String
  keys_every: AppKeyWhereInput
  keys_some: AppKeyWhereInput
  keys_none: AppKeyWhereInput
  repositories_every: RepositoryWhereInput
  repositories_some: RepositoryWhereInput
  repositories_none: RepositoryWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AppKeyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'key_ASC' |
  'key_DESC' |
  'name_ASC' |
  'name_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PrismaDatabase =   'default'

export type RepositoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'idExternal_ASC' |
  'idExternal_DESC' |
  'createdAtExternal_ASC' |
  'createdAtExternal_DESC' |
  'updatedAtExternal_ASC' |
  'updatedAtExternal_DESC' |
  'name_ASC' |
  'name_DESC' |
  'owner_ASC' |
  'owner_DESC' |
  'isTracked_ASC' |
  'isTracked_DESC'

export type Role =   'USER' |
  'ADMIN'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'hash_ASC' |
  'hash_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'role_ASC' |
  'role_DESC' |
  'gitLogin_ASC' |
  'gitLogin_DESC'

export interface AppKeyCreateInput {
  id?: ID_Input | null
  key: String
  name?: String | null
  user: UserCreateOneWithoutKeysInput
}

export interface AppKeyCreateManyWithoutUserInput {
  create?: AppKeyCreateWithoutUserInput[] | AppKeyCreateWithoutUserInput | null
  connect?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null
}

export interface AppKeyCreateOneInput {
  create?: AppKeyCreateInput | null
  connect?: AppKeyWhereUniqueInput | null
}

export interface AppKeyCreateWithoutUserInput {
  id?: ID_Input | null
  key: String
  name?: String | null
}

export interface AppKeyScalarWhereInput {
  AND?: AppKeyScalarWhereInput[] | AppKeyScalarWhereInput | null
  OR?: AppKeyScalarWhereInput[] | AppKeyScalarWhereInput | null
  NOT?: AppKeyScalarWhereInput[] | AppKeyScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  key?: String | null
  key_not?: String | null
  key_in?: String[] | String | null
  key_not_in?: String[] | String | null
  key_lt?: String | null
  key_lte?: String | null
  key_gt?: String | null
  key_gte?: String | null
  key_contains?: String | null
  key_not_contains?: String | null
  key_starts_with?: String | null
  key_not_starts_with?: String | null
  key_ends_with?: String | null
  key_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface AppKeySubscriptionWhereInput {
  AND?: AppKeySubscriptionWhereInput[] | AppKeySubscriptionWhereInput | null
  OR?: AppKeySubscriptionWhereInput[] | AppKeySubscriptionWhereInput | null
  NOT?: AppKeySubscriptionWhereInput[] | AppKeySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AppKeyWhereInput | null
}

export interface AppKeyUpdateDataInput {
  key?: String | null
  name?: String | null
  user?: UserUpdateOneRequiredWithoutKeysInput | null
}

export interface AppKeyUpdateInput {
  key?: String | null
  name?: String | null
  user?: UserUpdateOneRequiredWithoutKeysInput | null
}

export interface AppKeyUpdateManyDataInput {
  key?: String | null
  name?: String | null
}

export interface AppKeyUpdateManyMutationInput {
  key?: String | null
  name?: String | null
}

export interface AppKeyUpdateManyWithoutUserInput {
  create?: AppKeyCreateWithoutUserInput[] | AppKeyCreateWithoutUserInput | null
  connect?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null
  set?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null
  disconnect?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null
  delete?: AppKeyWhereUniqueInput[] | AppKeyWhereUniqueInput | null
  update?: AppKeyUpdateWithWhereUniqueWithoutUserInput[] | AppKeyUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: AppKeyUpdateManyWithWhereNestedInput[] | AppKeyUpdateManyWithWhereNestedInput | null
  deleteMany?: AppKeyScalarWhereInput[] | AppKeyScalarWhereInput | null
  upsert?: AppKeyUpsertWithWhereUniqueWithoutUserInput[] | AppKeyUpsertWithWhereUniqueWithoutUserInput | null
}

export interface AppKeyUpdateManyWithWhereNestedInput {
  where: AppKeyScalarWhereInput
  data: AppKeyUpdateManyDataInput
}

export interface AppKeyUpdateOneRequiredInput {
  create?: AppKeyCreateInput | null
  connect?: AppKeyWhereUniqueInput | null
  update?: AppKeyUpdateDataInput | null
  upsert?: AppKeyUpsertNestedInput | null
}

export interface AppKeyUpdateWithoutUserDataInput {
  key?: String | null
  name?: String | null
}

export interface AppKeyUpdateWithWhereUniqueWithoutUserInput {
  where: AppKeyWhereUniqueInput
  data: AppKeyUpdateWithoutUserDataInput
}

export interface AppKeyUpsertNestedInput {
  update: AppKeyUpdateDataInput
  create: AppKeyCreateInput
}

export interface AppKeyUpsertWithWhereUniqueWithoutUserInput {
  where: AppKeyWhereUniqueInput
  update: AppKeyUpdateWithoutUserDataInput
  create: AppKeyCreateWithoutUserInput
}

export interface AppKeyWhereInput {
  AND?: AppKeyWhereInput[] | AppKeyWhereInput | null
  OR?: AppKeyWhereInput[] | AppKeyWhereInput | null
  NOT?: AppKeyWhereInput[] | AppKeyWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  key?: String | null
  key_not?: String | null
  key_in?: String[] | String | null
  key_not_in?: String[] | String | null
  key_lt?: String | null
  key_lte?: String | null
  key_gt?: String | null
  key_gte?: String | null
  key_contains?: String | null
  key_not_contains?: String | null
  key_starts_with?: String | null
  key_not_starts_with?: String | null
  key_ends_with?: String | null
  key_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  user?: UserWhereInput | null
}

export interface AppKeyWhereUniqueInput {
  id?: ID_Input | null
  key?: String | null
}

export interface RepositoryCreateInput {
  id?: ID_Input | null
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  owner: String
  isTracked: Boolean
  user: UserCreateOneWithoutRepositoriesInput
  appKey: AppKeyCreateOneInput
}

export interface RepositoryCreateManyWithoutUserInput {
  create?: RepositoryCreateWithoutUserInput[] | RepositoryCreateWithoutUserInput | null
  connect?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null
}

export interface RepositoryCreateWithoutUserInput {
  id?: ID_Input | null
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  owner: String
  isTracked: Boolean
  appKey: AppKeyCreateOneInput
}

export interface RepositoryScalarWhereInput {
  AND?: RepositoryScalarWhereInput[] | RepositoryScalarWhereInput | null
  OR?: RepositoryScalarWhereInput[] | RepositoryScalarWhereInput | null
  NOT?: RepositoryScalarWhereInput[] | RepositoryScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  idExternal?: String | null
  idExternal_not?: String | null
  idExternal_in?: String[] | String | null
  idExternal_not_in?: String[] | String | null
  idExternal_lt?: String | null
  idExternal_lte?: String | null
  idExternal_gt?: String | null
  idExternal_gte?: String | null
  idExternal_contains?: String | null
  idExternal_not_contains?: String | null
  idExternal_starts_with?: String | null
  idExternal_not_starts_with?: String | null
  idExternal_ends_with?: String | null
  idExternal_not_ends_with?: String | null
  createdAtExternal?: DateTime | null
  createdAtExternal_not?: DateTime | null
  createdAtExternal_in?: DateTime[] | DateTime | null
  createdAtExternal_not_in?: DateTime[] | DateTime | null
  createdAtExternal_lt?: DateTime | null
  createdAtExternal_lte?: DateTime | null
  createdAtExternal_gt?: DateTime | null
  createdAtExternal_gte?: DateTime | null
  updatedAtExternal?: DateTime | null
  updatedAtExternal_not?: DateTime | null
  updatedAtExternal_in?: DateTime[] | DateTime | null
  updatedAtExternal_not_in?: DateTime[] | DateTime | null
  updatedAtExternal_lt?: DateTime | null
  updatedAtExternal_lte?: DateTime | null
  updatedAtExternal_gt?: DateTime | null
  updatedAtExternal_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  owner?: String | null
  owner_not?: String | null
  owner_in?: String[] | String | null
  owner_not_in?: String[] | String | null
  owner_lt?: String | null
  owner_lte?: String | null
  owner_gt?: String | null
  owner_gte?: String | null
  owner_contains?: String | null
  owner_not_contains?: String | null
  owner_starts_with?: String | null
  owner_not_starts_with?: String | null
  owner_ends_with?: String | null
  owner_not_ends_with?: String | null
  isTracked?: Boolean | null
  isTracked_not?: Boolean | null
}

export interface RepositorySubscriptionWhereInput {
  AND?: RepositorySubscriptionWhereInput[] | RepositorySubscriptionWhereInput | null
  OR?: RepositorySubscriptionWhereInput[] | RepositorySubscriptionWhereInput | null
  NOT?: RepositorySubscriptionWhereInput[] | RepositorySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RepositoryWhereInput | null
}

export interface RepositoryUpdateInput {
  idExternal?: String | null
  createdAtExternal?: DateTime | null
  updatedAtExternal?: DateTime | null
  name?: String | null
  owner?: String | null
  isTracked?: Boolean | null
  user?: UserUpdateOneRequiredWithoutRepositoriesInput | null
  appKey?: AppKeyUpdateOneRequiredInput | null
}

export interface RepositoryUpdateManyDataInput {
  idExternal?: String | null
  createdAtExternal?: DateTime | null
  updatedAtExternal?: DateTime | null
  name?: String | null
  owner?: String | null
  isTracked?: Boolean | null
}

export interface RepositoryUpdateManyMutationInput {
  idExternal?: String | null
  createdAtExternal?: DateTime | null
  updatedAtExternal?: DateTime | null
  name?: String | null
  owner?: String | null
  isTracked?: Boolean | null
}

export interface RepositoryUpdateManyWithoutUserInput {
  create?: RepositoryCreateWithoutUserInput[] | RepositoryCreateWithoutUserInput | null
  connect?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null
  set?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null
  disconnect?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null
  delete?: RepositoryWhereUniqueInput[] | RepositoryWhereUniqueInput | null
  update?: RepositoryUpdateWithWhereUniqueWithoutUserInput[] | RepositoryUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: RepositoryUpdateManyWithWhereNestedInput[] | RepositoryUpdateManyWithWhereNestedInput | null
  deleteMany?: RepositoryScalarWhereInput[] | RepositoryScalarWhereInput | null
  upsert?: RepositoryUpsertWithWhereUniqueWithoutUserInput[] | RepositoryUpsertWithWhereUniqueWithoutUserInput | null
}

export interface RepositoryUpdateManyWithWhereNestedInput {
  where: RepositoryScalarWhereInput
  data: RepositoryUpdateManyDataInput
}

export interface RepositoryUpdateWithoutUserDataInput {
  idExternal?: String | null
  createdAtExternal?: DateTime | null
  updatedAtExternal?: DateTime | null
  name?: String | null
  owner?: String | null
  isTracked?: Boolean | null
  appKey?: AppKeyUpdateOneRequiredInput | null
}

export interface RepositoryUpdateWithWhereUniqueWithoutUserInput {
  where: RepositoryWhereUniqueInput
  data: RepositoryUpdateWithoutUserDataInput
}

export interface RepositoryUpsertWithWhereUniqueWithoutUserInput {
  where: RepositoryWhereUniqueInput
  update: RepositoryUpdateWithoutUserDataInput
  create: RepositoryCreateWithoutUserInput
}

export interface RepositoryWhereInput {
  AND?: RepositoryWhereInput[] | RepositoryWhereInput | null
  OR?: RepositoryWhereInput[] | RepositoryWhereInput | null
  NOT?: RepositoryWhereInput[] | RepositoryWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  idExternal?: String | null
  idExternal_not?: String | null
  idExternal_in?: String[] | String | null
  idExternal_not_in?: String[] | String | null
  idExternal_lt?: String | null
  idExternal_lte?: String | null
  idExternal_gt?: String | null
  idExternal_gte?: String | null
  idExternal_contains?: String | null
  idExternal_not_contains?: String | null
  idExternal_starts_with?: String | null
  idExternal_not_starts_with?: String | null
  idExternal_ends_with?: String | null
  idExternal_not_ends_with?: String | null
  createdAtExternal?: DateTime | null
  createdAtExternal_not?: DateTime | null
  createdAtExternal_in?: DateTime[] | DateTime | null
  createdAtExternal_not_in?: DateTime[] | DateTime | null
  createdAtExternal_lt?: DateTime | null
  createdAtExternal_lte?: DateTime | null
  createdAtExternal_gt?: DateTime | null
  createdAtExternal_gte?: DateTime | null
  updatedAtExternal?: DateTime | null
  updatedAtExternal_not?: DateTime | null
  updatedAtExternal_in?: DateTime[] | DateTime | null
  updatedAtExternal_not_in?: DateTime[] | DateTime | null
  updatedAtExternal_lt?: DateTime | null
  updatedAtExternal_lte?: DateTime | null
  updatedAtExternal_gt?: DateTime | null
  updatedAtExternal_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  owner?: String | null
  owner_not?: String | null
  owner_in?: String[] | String | null
  owner_not_in?: String[] | String | null
  owner_lt?: String | null
  owner_lte?: String | null
  owner_gt?: String | null
  owner_gte?: String | null
  owner_contains?: String | null
  owner_not_contains?: String | null
  owner_starts_with?: String | null
  owner_not_starts_with?: String | null
  owner_ends_with?: String | null
  owner_not_ends_with?: String | null
  isTracked?: Boolean | null
  isTracked_not?: Boolean | null
  user?: UserWhereInput | null
  appKey?: AppKeyWhereInput | null
}

export interface RepositoryWhereUniqueInput {
  id?: ID_Input | null
  idExternal?: String | null
  name?: String | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  email: String
  hash: String
  name?: String | null
  role?: Role | null
  gitLogin: String
  keys?: AppKeyCreateManyWithoutUserInput | null
  repositories?: RepositoryCreateManyWithoutUserInput | null
}

export interface UserCreateOneWithoutKeysInput {
  create?: UserCreateWithoutKeysInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutRepositoriesInput {
  create?: UserCreateWithoutRepositoriesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutKeysInput {
  id?: ID_Input | null
  email: String
  hash: String
  name?: String | null
  role?: Role | null
  gitLogin: String
  repositories?: RepositoryCreateManyWithoutUserInput | null
}

export interface UserCreateWithoutRepositoriesInput {
  id?: ID_Input | null
  email: String
  hash: String
  name?: String | null
  role?: Role | null
  gitLogin: String
  keys?: AppKeyCreateManyWithoutUserInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  email?: String | null
  hash?: String | null
  name?: String | null
  role?: Role | null
  gitLogin?: String | null
  keys?: AppKeyUpdateManyWithoutUserInput | null
  repositories?: RepositoryUpdateManyWithoutUserInput | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  hash?: String | null
  name?: String | null
  role?: Role | null
  gitLogin?: String | null
}

export interface UserUpdateOneRequiredWithoutKeysInput {
  create?: UserCreateWithoutKeysInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutKeysDataInput | null
  upsert?: UserUpsertWithoutKeysInput | null
}

export interface UserUpdateOneRequiredWithoutRepositoriesInput {
  create?: UserCreateWithoutRepositoriesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutRepositoriesDataInput | null
  upsert?: UserUpsertWithoutRepositoriesInput | null
}

export interface UserUpdateWithoutKeysDataInput {
  email?: String | null
  hash?: String | null
  name?: String | null
  role?: Role | null
  gitLogin?: String | null
  repositories?: RepositoryUpdateManyWithoutUserInput | null
}

export interface UserUpdateWithoutRepositoriesDataInput {
  email?: String | null
  hash?: String | null
  name?: String | null
  role?: Role | null
  gitLogin?: String | null
  keys?: AppKeyUpdateManyWithoutUserInput | null
}

export interface UserUpsertWithoutKeysInput {
  update: UserUpdateWithoutKeysDataInput
  create: UserCreateWithoutKeysInput
}

export interface UserUpsertWithoutRepositoriesInput {
  update: UserUpdateWithoutRepositoriesDataInput
  create: UserCreateWithoutRepositoriesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  hash?: String | null
  hash_not?: String | null
  hash_in?: String[] | String | null
  hash_not_in?: String[] | String | null
  hash_lt?: String | null
  hash_lte?: String | null
  hash_gt?: String | null
  hash_gte?: String | null
  hash_contains?: String | null
  hash_not_contains?: String | null
  hash_starts_with?: String | null
  hash_not_starts_with?: String | null
  hash_ends_with?: String | null
  hash_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  role?: Role | null
  role_not?: Role | null
  role_in?: Role[] | Role | null
  role_not_in?: Role[] | Role | null
  gitLogin?: String | null
  gitLogin_not?: String | null
  gitLogin_in?: String[] | String | null
  gitLogin_not_in?: String[] | String | null
  gitLogin_lt?: String | null
  gitLogin_lte?: String | null
  gitLogin_gt?: String | null
  gitLogin_gte?: String | null
  gitLogin_contains?: String | null
  gitLogin_not_contains?: String | null
  gitLogin_starts_with?: String | null
  gitLogin_not_starts_with?: String | null
  gitLogin_ends_with?: String | null
  gitLogin_not_ends_with?: String | null
  keys_every?: AppKeyWhereInput | null
  keys_some?: AppKeyWhereInput | null
  keys_none?: AppKeyWhereInput | null
  repositories_every?: RepositoryWhereInput | null
  repositories_some?: RepositoryWhereInput | null
  repositories_none?: RepositoryWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateAppKey {
  count: Int
}

export interface AggregateRepository {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AppKey extends Node {
  id: ID_Output
  user: User
  key: String
  name?: String | null
}

/*
 * A connection to a list of items.

 */
export interface AppKeyConnection {
  pageInfo: PageInfo
  edges: Array<AppKeyEdge | null>
  aggregate: AggregateAppKey
}

/*
 * An edge in a connection.

 */
export interface AppKeyEdge {
  node: AppKey
  cursor: String
}

export interface AppKeyPreviousValues {
  id: ID_Output
  key: String
  name?: String | null
}

export interface AppKeySubscriptionPayload {
  mutation: MutationType
  node?: AppKey | null
  updatedFields?: Array<String> | null
  previousValues?: AppKeyPreviousValues | null
}

export interface BatchPayload {
  count: Long
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Repository extends Node {
  id: ID_Output
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  owner: String
  user: User
  isTracked: Boolean
  appKey: AppKey
}

/*
 * A connection to a list of items.

 */
export interface RepositoryConnection {
  pageInfo: PageInfo
  edges: Array<RepositoryEdge | null>
  aggregate: AggregateRepository
}

/*
 * An edge in a connection.

 */
export interface RepositoryEdge {
  node: Repository
  cursor: String
}

export interface RepositoryPreviousValues {
  id: ID_Output
  idExternal: String
  createdAtExternal: DateTime
  updatedAtExternal: DateTime
  name: String
  owner: String
  isTracked: Boolean
}

export interface RepositorySubscriptionPayload {
  mutation: MutationType
  node?: Repository | null
  updatedFields?: Array<String> | null
  previousValues?: RepositoryPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  email: String
  hash: String
  createdAt: DateTime
  updatedAt: DateTime
  name?: String | null
  role?: Role | null
  keys?: Array<AppKey> | null
  repositories?: Array<Repository> | null
  gitLogin: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  hash: String
  createdAt: DateTime
  updatedAt: DateTime
  name?: String | null
  role?: Role | null
  gitLogin: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string