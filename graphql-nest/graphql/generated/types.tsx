import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type ApiKey = {
   __typename?: 'ApiKey',
  id: Scalars['String'],
  user: User,
  key: Scalars['String'],
  name: Scalars['String'],
  provider: Scalars['String'],
};

export type ApiKeyIsValid = {
   __typename?: 'ApiKeyIsValid',
  valid: Scalars['Boolean'],
};

export type AppEvent = {
   __typename?: 'AppEvent',
  type: Scalars['String'],
  data: Scalars['String'],
};

export type Auth = {
   __typename?: 'Auth',
  token: Scalars['String'],
  user: User,
};

export type CreateApiKeyInput = {
  provider: Scalars['String'],
  name: Scalars['String'],
  key: Scalars['String'],
};

export type CreateGameInput = {
  gameType: Scalars['String'],
  owner: Scalars['String'],
  repository: Scalars['String'],
};


export type Game = {
   __typename?: 'Game',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  repository: Repository,
  title: Scalars['String'],
  owner: User,
  type: Scalars['String'],
};

export type GitHubBranch = {
   __typename?: 'GitHubBranch',
  id: Scalars['String'],
  repository: GitHubRepository,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  name: Scalars['String'],
  merged: Scalars['Boolean'],
};

export type GitHubComment = {
   __typename?: 'GitHubComment',
  id: Scalars['String'],
  author: GitHubUser,
  createdAt: Scalars['DateTime'],
  createdAtExternal: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  bodyText: Scalars['String'],
  url: Scalars['String'],
};

export type GitHubCommit = {
   __typename?: 'GitHubCommit',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  author: GitHubUser,
  associatedPullRequests: Array<GitHubPullRequest>,
  committer: GitHubUser,
  additions: Scalars['Float'],
  authedDate: Scalars['DateTime'],
  changedFiles: Scalars['Float'],
  commitUrl: Scalars['String'],
  deletions: Scalars['Float'],
  message: Scalars['String'],
  messageHeadline: Scalars['String'],
  pushedDate: Scalars['DateTime'],
  treeUrl: Scalars['String'],
  url: Scalars['String'],
};

export type GitHubFileDiff = {
   __typename?: 'GitHubFileDiff',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  additions: Scalars['Float'],
  deletions: Scalars['Float'],
  filepath: Scalars['String'],
};

export type GitHubIssue = {
   __typename?: 'GitHubIssue',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  createdAtExternal: Scalars['DateTime'],
  updatedAtExternal: Scalars['DateTime'],
  lastEditedAt: Scalars['DateTime'],
  assignees: Array<GitHubUser>,
  author: GitHubUser,
  comments: Array<GitHubComment>,
  bodyText: Scalars['String'],
  closed: Scalars['DateTime'],
  locked: Scalars['Boolean'],
  number: Scalars['Float'],
  state: Scalars['String'],
  title: Scalars['String'],
  url: Scalars['String'],
};

export type GitHubLabel = {
   __typename?: 'GitHubLabel',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  createdAtExternal: Scalars['DateTime'],
  updatedAtExternal: Scalars['DateTime'],
  color: Scalars['String'],
  description: Scalars['String'],
  name: Scalars['String'],
  url: Scalars['String'],
};

export type GitHubPullRequest = {
   __typename?: 'GitHubPullRequest',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  createdAtExternal: Scalars['DateTime'],
  publishedAt: Scalars['DateTime'],
  closedAt: Scalars['DateTime'],
  mergedAt: Scalars['DateTime'],
  author: GitHubUser,
  mergedBy: GitHubUser,
  number: Scalars['Float'],
  closed: Scalars['Boolean'],
  isCrossRepository: Scalars['Boolean'],
  locked: Scalars['Boolean'],
  merged: Scalars['Boolean'],
  additions: Scalars['Float'],
  deletions: Scalars['Float'],
  bodyText: Scalars['Float'],
};

export type GitHubPullRequestReview = {
   __typename?: 'GitHubPullRequestReview',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  createdAtExternal: Scalars['DateTime'],
  updatedAtExternal: Scalars['DateTime'],
  submittedAt: Scalars['DateTime'],
  lastEditeddAt: Scalars['DateTime'],
  publishedAt: Scalars['DateTime'],
  author: GitHubUser,
  pullRequest: GitHubPullRequest,
  state: Scalars['String'],
  bodyText: Scalars['String'],
  url: Scalars['String'],
};

export type GitHubRepository = {
   __typename?: 'GitHubRepository',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  createdAtExternal: Scalars['DateTime'],
  updatedAtExternal: Scalars['DateTime'],
  owner: GitHubUser,
  hasBranchRules: Scalars['Boolean'],
  hasContributingGuidelines: Scalars['Boolean'],
  hasPullRequestTemplate: Scalars['Boolean'],
  hasReadMe: Scalars['Boolean'],
  hasWiki: Scalars['Boolean'],
  isArchived: Scalars['Boolean'],
  isDisabled: Scalars['Boolean'],
  isFork: Scalars['Boolean'],
  isLocked: Scalars['Boolean'],
  isPrivate: Scalars['Boolean'],
  isTracked: Scalars['Boolean'],
  description?: Maybe<Scalars['String']>,
  license: Scalars['String'],
  name: Scalars['String'],
  primaryLanguage: Scalars['String'],
  sshUrl: Scalars['String'],
  url: Scalars['String'],
};

export type GitHubReviewRequest = {
   __typename?: 'GitHubReviewRequest',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  pullRequest: GitHubPullRequest,
  requestedReviewer: GitHubUser,
};

export type GitHubReviewThread = {
   __typename?: 'GitHubReviewThread',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  pullRequest: GitHubPullRequest,
  repository: GitHubRepository,
  resolvedBy: GitHubUser,
  isResolved: Scalars['Boolean'],
};

export type GitHubTopic = {
   __typename?: 'GitHubTopic',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  name: Scalars['String'],
};

export type GitHubUser = {
   __typename?: 'GitHubUser',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  createdAtExternal: Scalars['DateTime'],
  isBountyHunter: Scalars['Boolean'],
  isCampusExpert: Scalars['Boolean'],
  isDeveloperProgramMember: Scalars['Boolean'],
  isEmployee: Scalars['Boolean'],
  isHireable: Scalars['Boolean'],
  isSiteAdmin: Scalars['Boolean'],
  isViewer: Scalars['Boolean'],
  url: Scalars['String'],
  name: Scalars['String'],
  login: Scalars['String'],
  avatarUrl: Scalars['String'],
  bio: Scalars['String'],
  company: Scalars['String'],
  email: Scalars['String'],
};

export type GitHubWebhookEvent = {
   __typename?: 'GitHubWebhookEvent',
  id: Scalars['String'],
  createdAt: Scalars['DateTime'],
  repository: Repository,
  eventType: Scalars['String'],
  action: Scalars['String'],
  sender: Scalars['String'],
};

export type LoginInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  signup: Auth,
  login: Auth,
  createApiKey: ApiKey,
};


export type MutationSignupArgs = {
  data: SignupInput
};


export type MutationLoginArgs = {
  data: LoginInput
};


export type MutationCreateApiKeyArgs = {
  data: CreateApiKeyInput
};

export type Query = {
   __typename?: 'Query',
  validateApiKey: Scalars['Boolean'],
  me: User,
  helloWorld: Scalars['String'],
  hello: Scalars['String'],
  ping: Scalars['String'],
};


export type QueryValidateApiKeyArgs = {
  provider: Scalars['String'],
  key: Scalars['String']
};


export type QueryHelloArgs = {
  name: Scalars['String']
};

export type Repository = {
   __typename?: 'Repository',
  id: Scalars['String'],
  idExternal: Scalars['String'],
  createdAt: Scalars['DateTime'],
  createdAtExternal: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  updatedAtExternal: Scalars['DateTime'],
  addedBy: User,
  name: Scalars['String'],
  description: Scalars['String'],
  homepageUrl: Scalars['String'],
  url: Scalars['String'],
  owner: Scalars['String'],
  isTracked: Scalars['Boolean'],
  apiKey: ApiKey,
  isFork: Scalars['Boolean'],
  isLocked: Scalars['Boolean'],
  isPrivate: Scalars['Boolean'],
  isDisabled: Scalars['Boolean'],
  isArchived: Scalars['Boolean'],
  sshUrl: Scalars['String'],
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SignupInput = {
  email: Scalars['String'],
  password: Scalars['String'],
  name: Scalars['String'],
  gitLogin: Scalars['String'],
};

export type Subscription = {
   __typename?: 'Subscription',
  UserMutatedEvent: User,
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  createdAt: Scalars['String'],
  updatedAt: Scalars['String'],
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  role: Role,
  apiKeys: Array<ApiKey>,
  password: Scalars['String'],
  gitLogin: Scalars['String'],
};

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'token'>
  ) }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'role' | 'gitLogin' | 'createdAt' | 'updatedAt'>
    & { apiKeys: Array<(
      { __typename?: 'ApiKey' }
      & Pick<ApiKey, 'id' | 'name' | 'provider'>
    )> }
  ) }
);

export type ValidateApiKeyQueryVariables = {
  provider: Scalars['String'],
  key: Scalars['String']
};


export type ValidateApiKeyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'validateApiKey'>
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    name
    role
    apiKeys {
      id
      name
      provider
    }
    gitLogin
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const ValidateApiKeyDocument = gql`
    query ValidateApiKey($provider: String!, $key: String!) {
  validateApiKey(provider: $provider, key: $key)
}
    `;

/**
 * __useValidateApiKeyQuery__
 *
 * To run a query within a React component, call `useValidateApiKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateApiKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateApiKeyQuery({
 *   variables: {
 *      provider: // value for 'provider'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useValidateApiKeyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ValidateApiKeyQuery, ValidateApiKeyQueryVariables>) {
        return ApolloReactHooks.useQuery<ValidateApiKeyQuery, ValidateApiKeyQueryVariables>(ValidateApiKeyDocument, baseOptions);
      }
export function useValidateApiKeyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ValidateApiKeyQuery, ValidateApiKeyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ValidateApiKeyQuery, ValidateApiKeyQueryVariables>(ValidateApiKeyDocument, baseOptions);
        }
export type ValidateApiKeyQueryHookResult = ReturnType<typeof useValidateApiKeyQuery>;
export type ValidateApiKeyLazyQueryHookResult = ReturnType<typeof useValidateApiKeyLazyQuery>;
export type ValidateApiKeyQueryResult = ApolloReactCommon.QueryResult<ValidateApiKeyQuery, ValidateApiKeyQueryVariables>;