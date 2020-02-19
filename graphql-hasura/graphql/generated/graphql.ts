import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    timestamptz: any;
    uuid: any;
    timetz: any;
};

export type Boolean_Comparison_Exp = {
    _eq?: Maybe<Scalars['Boolean']>;
    _gt?: Maybe<Scalars['Boolean']>;
    _gte?: Maybe<Scalars['Boolean']>;
    _in?: Maybe<Array<Scalars['Boolean']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['Boolean']>;
    _lte?: Maybe<Scalars['Boolean']>;
    _neq?: Maybe<Scalars['Boolean']>;
    _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Branch_Commits = {
    __typename?: 'branch_commits';
    branch: Branches;
    branch_id: Scalars['uuid'];
    commit: Commits;
    commit_id: Scalars['uuid'];
    id: Scalars['uuid'];
};

export type Branch_Commits_Aggregate = {
    __typename?: 'branch_commits_aggregate';
    aggregate?: Maybe<Branch_Commits_Aggregate_Fields>;
    nodes: Array<Branch_Commits>;
};

export type Branch_Commits_Aggregate_Fields = {
    __typename?: 'branch_commits_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Branch_Commits_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Branch_Commits_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Branch_Commits_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Branch_Commits_Arr_Rel_Insert_Input = {
    data: Array<Branch_Commits_Insert_Input>;
    on_conflict?: Maybe<Branch_Commits_On_Conflict>;
};

export type Branch_Commits_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Branch_Commits_Bool_Exp>>>;
    _not?: Maybe<Branch_Commits_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Branch_Commits_Bool_Exp>>>;
    branch?: Maybe<Branches_Bool_Exp>;
    branch_id?: Maybe<Uuid_Comparison_Exp>;
    commit?: Maybe<Commits_Bool_Exp>;
    commit_id?: Maybe<Uuid_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Branch_Commits_Constraint {
    BranchCommitsPkey = 'branch_commits_pkey'
}

export type Branch_Commits_Insert_Input = {
    branch?: Maybe<Branches_Obj_Rel_Insert_Input>;
    branch_id?: Maybe<Scalars['uuid']>;
    commit?: Maybe<Commits_Obj_Rel_Insert_Input>;
    commit_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
};

export type Branch_Commits_Mutation_Response = {
    __typename?: 'branch_commits_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Branch_Commits>;
};

export type Branch_Commits_Obj_Rel_Insert_Input = {
    data: Branch_Commits_Insert_Input;
    on_conflict?: Maybe<Branch_Commits_On_Conflict>;
};

export type Branch_Commits_On_Conflict = {
    constraint: Branch_Commits_Constraint;
    update_columns: Array<Branch_Commits_Update_Column>;
    where?: Maybe<Branch_Commits_Bool_Exp>;
};

export type Branch_Commits_Order_By = {
    branch?: Maybe<Branches_Order_By>;
    branch_id?: Maybe<Order_By>;
    commit?: Maybe<Commits_Order_By>;
    commit_id?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
};

export enum Branch_Commits_Select_Column {
    BranchId = 'branch_id',
    CommitId = 'commit_id',
    Id = 'id'
}

export type Branch_Commits_Set_Input = {
    branch_id?: Maybe<Scalars['uuid']>;
    commit_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
};

export enum Branch_Commits_Update_Column {
    BranchId = 'branch_id',
    CommitId = 'commit_id',
    Id = 'id'
}

export type Branches = {
    __typename?: 'branches';
    branch_commits: Array<Branch_Commits>;
    branch_commits_aggregate: Branch_Commits_Aggregate;
    created_at: Scalars['timestamptz'];
    id: Scalars['uuid'];
    merged: Scalars['Boolean'];
    name: Scalars['String'];
    repository: Repositories;
    repository_id: Scalars['uuid'];
    updated_at: Scalars['timestamptz'];
};

export type BranchesBranch_CommitsArgs = {
    distinct_on?: Maybe<Array<Branch_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branch_Commits_Order_By>>;
    where?: Maybe<Branch_Commits_Bool_Exp>;
};

export type BranchesBranch_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Branch_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branch_Commits_Order_By>>;
    where?: Maybe<Branch_Commits_Bool_Exp>;
};

export type Branches_Aggregate = {
    __typename?: 'branches_aggregate';
    aggregate?: Maybe<Branches_Aggregate_Fields>;
    nodes: Array<Branches>;
};

export type Branches_Aggregate_Fields = {
    __typename?: 'branches_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Branches_Max_Fields>;
    min?: Maybe<Branches_Min_Fields>;
};

export type Branches_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Branches_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Branches_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Branches_Max_Order_By>;
    min?: Maybe<Branches_Min_Order_By>;
};

export type Branches_Arr_Rel_Insert_Input = {
    data: Array<Branches_Insert_Input>;
    on_conflict?: Maybe<Branches_On_Conflict>;
};

export type Branches_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Branches_Bool_Exp>>>;
    _not?: Maybe<Branches_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Branches_Bool_Exp>>>;
    branch_commits?: Maybe<Branch_Commits_Bool_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    merged?: Maybe<Boolean_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    repository?: Maybe<Repositories_Bool_Exp>;
    repository_id?: Maybe<Uuid_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Branches_Constraint {
    BranchPkey = 'branch_pkey'
}

export type Branches_Insert_Input = {
    branch_commits?: Maybe<Branch_Commits_Arr_Rel_Insert_Input>;
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    merged?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    repository?: Maybe<Repositories_Obj_Rel_Insert_Input>;
    repository_id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Branches_Max_Fields = {
    __typename?: 'branches_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Branches_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Branches_Min_Fields = {
    __typename?: 'branches_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Branches_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Branches_Mutation_Response = {
    __typename?: 'branches_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Branches>;
};

export type Branches_Obj_Rel_Insert_Input = {
    data: Branches_Insert_Input;
    on_conflict?: Maybe<Branches_On_Conflict>;
};

export type Branches_On_Conflict = {
    constraint: Branches_Constraint;
    update_columns: Array<Branches_Update_Column>;
    where?: Maybe<Branches_Bool_Exp>;
};

export type Branches_Order_By = {
    branch_commits_aggregate?: Maybe<Branch_Commits_Aggregate_Order_By>;
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    merged?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    repository?: Maybe<Repositories_Order_By>;
    repository_id?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export enum Branches_Select_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    Merged = 'merged',
    Name = 'name',
    RepositoryId = 'repository_id',
    UpdatedAt = 'updated_at'
}

export type Branches_Set_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    merged?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    repository_id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Branches_Update_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    Merged = 'merged',
    Name = 'name',
    RepositoryId = 'repository_id',
    UpdatedAt = 'updated_at'
}

export type Comments = {
    __typename?: 'comments';
    author_id: Scalars['uuid'];
    body_text: Scalars['String'];
    created_at: Scalars['timestamptz'];
    created_at_external: Scalars['timetz'];
    github_user: Github_User;
    id: Scalars['uuid'];
    issue_comments: Array<Issue_Comments>;
    issue_comments_aggregate: Issue_Comments_Aggregate;
    pull_request_comments: Array<Pull_Request_Comments>;
    pull_request_comments_aggregate: Pull_Request_Comments_Aggregate;
    pull_request_review_comments: Array<Pull_Request_Review_Comments>;
    pull_request_review_comments_aggregate: Pull_Request_Review_Comments_Aggregate;
    review_thread_comments: Array<Review_Thread_Comments>;
    review_thread_comments_aggregate: Review_Thread_Comments_Aggregate;
    updated_at: Scalars['timestamptz'];
    url: Scalars['String'];
};

export type CommentsIssue_CommentsArgs = {
    distinct_on?: Maybe<Array<Issue_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Comments_Order_By>>;
    where?: Maybe<Issue_Comments_Bool_Exp>;
};

export type CommentsIssue_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Comments_Order_By>>;
    where?: Maybe<Issue_Comments_Bool_Exp>;
};

export type CommentsPull_Request_CommentsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Comments_Bool_Exp>;
};

export type CommentsPull_Request_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Comments_Bool_Exp>;
};

export type CommentsPull_Request_Review_CommentsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
};

export type CommentsPull_Request_Review_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
};

export type CommentsReview_Thread_CommentsArgs = {
    distinct_on?: Maybe<Array<Review_Thread_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Thread_Comments_Order_By>>;
    where?: Maybe<Review_Thread_Comments_Bool_Exp>;
};

export type CommentsReview_Thread_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Thread_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Thread_Comments_Order_By>>;
    where?: Maybe<Review_Thread_Comments_Bool_Exp>;
};

export type Comments_Aggregate = {
    __typename?: 'comments_aggregate';
    aggregate?: Maybe<Comments_Aggregate_Fields>;
    nodes: Array<Comments>;
};

export type Comments_Aggregate_Fields = {
    __typename?: 'comments_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Comments_Max_Fields>;
    min?: Maybe<Comments_Min_Fields>;
};

export type Comments_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Comments_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Comments_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Comments_Max_Order_By>;
    min?: Maybe<Comments_Min_Order_By>;
};

export type Comments_Arr_Rel_Insert_Input = {
    data: Array<Comments_Insert_Input>;
    on_conflict?: Maybe<Comments_On_Conflict>;
};

export type Comments_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
    _not?: Maybe<Comments_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>;
    author_id?: Maybe<Uuid_Comparison_Exp>;
    body_text?: Maybe<String_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    created_at_external?: Maybe<Timetz_Comparison_Exp>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    issue_comments?: Maybe<Issue_Comments_Bool_Exp>;
    pull_request_comments?: Maybe<Pull_Request_Comments_Bool_Exp>;
    pull_request_review_comments?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
    review_thread_comments?: Maybe<Review_Thread_Comments_Bool_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    url?: Maybe<String_Comparison_Exp>;
};

export enum Comments_Constraint {
    CommentPkey = 'comment_pkey'
}

export type Comments_Insert_Input = {
    author_id?: Maybe<Scalars['uuid']>;
    body_text?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    issue_comments?: Maybe<Issue_Comments_Arr_Rel_Insert_Input>;
    pull_request_comments?: Maybe<Pull_Request_Comments_Arr_Rel_Insert_Input>;
    pull_request_review_comments?: Maybe<
        Pull_Request_Review_Comments_Arr_Rel_Insert_Input
    >;
    review_thread_comments?: Maybe<Review_Thread_Comments_Arr_Rel_Insert_Input>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Comments_Max_Fields = {
    __typename?: 'comments_max_fields';
    body_text?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Comments_Max_Order_By = {
    body_text?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Comments_Min_Fields = {
    __typename?: 'comments_min_fields';
    body_text?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Comments_Min_Order_By = {
    body_text?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Comments_Mutation_Response = {
    __typename?: 'comments_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Comments>;
};

export type Comments_Obj_Rel_Insert_Input = {
    data: Comments_Insert_Input;
    on_conflict?: Maybe<Comments_On_Conflict>;
};

export type Comments_On_Conflict = {
    constraint: Comments_Constraint;
    update_columns: Array<Comments_Update_Column>;
    where?: Maybe<Comments_Bool_Exp>;
};

export type Comments_Order_By = {
    author_id?: Maybe<Order_By>;
    body_text?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    github_user?: Maybe<Github_User_Order_By>;
    id?: Maybe<Order_By>;
    issue_comments_aggregate?: Maybe<Issue_Comments_Aggregate_Order_By>;
    pull_request_comments_aggregate?: Maybe<
        Pull_Request_Comments_Aggregate_Order_By
    >;
    pull_request_review_comments_aggregate?: Maybe<
        Pull_Request_Review_Comments_Aggregate_Order_By
    >;
    review_thread_comments_aggregate?: Maybe<
        Review_Thread_Comments_Aggregate_Order_By
    >;
    updated_at?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export enum Comments_Select_Column {
    AuthorId = 'author_id',
    BodyText = 'body_text',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Id = 'id',
    UpdatedAt = 'updated_at',
    Url = 'url'
}

export type Comments_Set_Input = {
    author_id?: Maybe<Scalars['uuid']>;
    body_text?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export enum Comments_Update_Column {
    AuthorId = 'author_id',
    BodyText = 'body_text',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Id = 'id',
    UpdatedAt = 'updated_at',
    Url = 'url'
}

export type Commits = {
    __typename?: 'commits';
    additions: Scalars['Int'];
    authed_date: Scalars['timetz'];
    author: Scalars['uuid'];
    branch_commits: Array<Branch_Commits>;
    branch_commits_aggregate: Branch_Commits_Aggregate;
    changed_files: Scalars['Int'];
    commit_url: Scalars['String'];
    committer: Scalars['uuid'];
    created_at: Scalars['timestamptz'];
    deletions: Scalars['Int'];
    github_user: Github_User;
    id: Scalars['uuid'];
    message: Scalars['String'];
    message_headline: Scalars['String'];
    pull_request_commits: Array<Pull_Request_Commits>;
    pull_request_commits_aggregate: Pull_Request_Commits_Aggregate;
    pull_request_review_commits: Array<Pull_Request_Review_Commits>;
    pull_request_review_commits_aggregate: Pull_Request_Review_Commits_Aggregate;
    pushed_date: Scalars['timetz'];
    tree_url: Scalars['String'];
    updated_at: Scalars['timestamptz'];
    url: Scalars['String'];
};

export type CommitsBranch_CommitsArgs = {
    distinct_on?: Maybe<Array<Branch_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branch_Commits_Order_By>>;
    where?: Maybe<Branch_Commits_Bool_Exp>;
};

export type CommitsBranch_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Branch_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branch_Commits_Order_By>>;
    where?: Maybe<Branch_Commits_Bool_Exp>;
};

export type CommitsPull_Request_CommitsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Commits_Bool_Exp>;
};

export type CommitsPull_Request_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Commits_Bool_Exp>;
};

export type CommitsPull_Request_Review_CommitsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
};

export type CommitsPull_Request_Review_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
};

export type Commits_Aggregate = {
    __typename?: 'commits_aggregate';
    aggregate?: Maybe<Commits_Aggregate_Fields>;
    nodes: Array<Commits>;
};

export type Commits_Aggregate_Fields = {
    __typename?: 'commits_aggregate_fields';
    avg?: Maybe<Commits_Avg_Fields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Commits_Max_Fields>;
    min?: Maybe<Commits_Min_Fields>;
    stddev?: Maybe<Commits_Stddev_Fields>;
    stddev_pop?: Maybe<Commits_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Commits_Stddev_Samp_Fields>;
    sum?: Maybe<Commits_Sum_Fields>;
    var_pop?: Maybe<Commits_Var_Pop_Fields>;
    var_samp?: Maybe<Commits_Var_Samp_Fields>;
    variance?: Maybe<Commits_Variance_Fields>;
};

export type Commits_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Commits_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Commits_Aggregate_Order_By = {
    avg?: Maybe<Commits_Avg_Order_By>;
    count?: Maybe<Order_By>;
    max?: Maybe<Commits_Max_Order_By>;
    min?: Maybe<Commits_Min_Order_By>;
    stddev?: Maybe<Commits_Stddev_Order_By>;
    stddev_pop?: Maybe<Commits_Stddev_Pop_Order_By>;
    stddev_samp?: Maybe<Commits_Stddev_Samp_Order_By>;
    sum?: Maybe<Commits_Sum_Order_By>;
    var_pop?: Maybe<Commits_Var_Pop_Order_By>;
    var_samp?: Maybe<Commits_Var_Samp_Order_By>;
    variance?: Maybe<Commits_Variance_Order_By>;
};

export type Commits_Arr_Rel_Insert_Input = {
    data: Array<Commits_Insert_Input>;
    on_conflict?: Maybe<Commits_On_Conflict>;
};

export type Commits_Avg_Fields = {
    __typename?: 'commits_avg_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type Commits_Avg_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type Commits_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Commits_Bool_Exp>>>;
    _not?: Maybe<Commits_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Commits_Bool_Exp>>>;
    additions?: Maybe<Int_Comparison_Exp>;
    authed_date?: Maybe<Timetz_Comparison_Exp>;
    author?: Maybe<Uuid_Comparison_Exp>;
    branch_commits?: Maybe<Branch_Commits_Bool_Exp>;
    changed_files?: Maybe<Int_Comparison_Exp>;
    commit_url?: Maybe<String_Comparison_Exp>;
    committer?: Maybe<Uuid_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    deletions?: Maybe<Int_Comparison_Exp>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    message?: Maybe<String_Comparison_Exp>;
    message_headline?: Maybe<String_Comparison_Exp>;
    pull_request_commits?: Maybe<Pull_Request_Commits_Bool_Exp>;
    pull_request_review_commits?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
    pushed_date?: Maybe<Timetz_Comparison_Exp>;
    tree_url?: Maybe<String_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    url?: Maybe<String_Comparison_Exp>;
};

export enum Commits_Constraint {
    CommitPkey = 'commit_pkey'
}

export type Commits_Inc_Input = {
    additions?: Maybe<Scalars['Int']>;
    changed_files?: Maybe<Scalars['Int']>;
    deletions?: Maybe<Scalars['Int']>;
};

export type Commits_Insert_Input = {
    additions?: Maybe<Scalars['Int']>;
    authed_date?: Maybe<Scalars['timetz']>;
    author?: Maybe<Scalars['uuid']>;
    branch_commits?: Maybe<Branch_Commits_Arr_Rel_Insert_Input>;
    changed_files?: Maybe<Scalars['Int']>;
    commit_url?: Maybe<Scalars['String']>;
    committer?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    message?: Maybe<Scalars['String']>;
    message_headline?: Maybe<Scalars['String']>;
    pull_request_commits?: Maybe<Pull_Request_Commits_Arr_Rel_Insert_Input>;
    pull_request_review_commits?: Maybe<
        Pull_Request_Review_Commits_Arr_Rel_Insert_Input
    >;
    pushed_date?: Maybe<Scalars['timetz']>;
    tree_url?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Commits_Max_Fields = {
    __typename?: 'commits_max_fields';
    additions?: Maybe<Scalars['Int']>;
    authed_date?: Maybe<Scalars['timetz']>;
    changed_files?: Maybe<Scalars['Int']>;
    commit_url?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    message?: Maybe<Scalars['String']>;
    message_headline?: Maybe<Scalars['String']>;
    pushed_date?: Maybe<Scalars['timetz']>;
    tree_url?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Commits_Max_Order_By = {
    additions?: Maybe<Order_By>;
    authed_date?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    commit_url?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    message?: Maybe<Order_By>;
    message_headline?: Maybe<Order_By>;
    pushed_date?: Maybe<Order_By>;
    tree_url?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Commits_Min_Fields = {
    __typename?: 'commits_min_fields';
    additions?: Maybe<Scalars['Int']>;
    authed_date?: Maybe<Scalars['timetz']>;
    changed_files?: Maybe<Scalars['Int']>;
    commit_url?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    message?: Maybe<Scalars['String']>;
    message_headline?: Maybe<Scalars['String']>;
    pushed_date?: Maybe<Scalars['timetz']>;
    tree_url?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Commits_Min_Order_By = {
    additions?: Maybe<Order_By>;
    authed_date?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    commit_url?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    message?: Maybe<Order_By>;
    message_headline?: Maybe<Order_By>;
    pushed_date?: Maybe<Order_By>;
    tree_url?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Commits_Mutation_Response = {
    __typename?: 'commits_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Commits>;
};

export type Commits_Obj_Rel_Insert_Input = {
    data: Commits_Insert_Input;
    on_conflict?: Maybe<Commits_On_Conflict>;
};

export type Commits_On_Conflict = {
    constraint: Commits_Constraint;
    update_columns: Array<Commits_Update_Column>;
    where?: Maybe<Commits_Bool_Exp>;
};

export type Commits_Order_By = {
    additions?: Maybe<Order_By>;
    authed_date?: Maybe<Order_By>;
    author?: Maybe<Order_By>;
    branch_commits_aggregate?: Maybe<Branch_Commits_Aggregate_Order_By>;
    changed_files?: Maybe<Order_By>;
    commit_url?: Maybe<Order_By>;
    committer?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    github_user?: Maybe<Github_User_Order_By>;
    id?: Maybe<Order_By>;
    message?: Maybe<Order_By>;
    message_headline?: Maybe<Order_By>;
    pull_request_commits_aggregate?: Maybe<
        Pull_Request_Commits_Aggregate_Order_By
    >;
    pull_request_review_commits_aggregate?: Maybe<
        Pull_Request_Review_Commits_Aggregate_Order_By
    >;
    pushed_date?: Maybe<Order_By>;
    tree_url?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export enum Commits_Select_Column {
    Additions = 'additions',
    AuthedDate = 'authed_date',
    Author = 'author',
    ChangedFiles = 'changed_files',
    CommitUrl = 'commit_url',
    Committer = 'committer',
    CreatedAt = 'created_at',
    Deletions = 'deletions',
    Id = 'id',
    Message = 'message',
    MessageHeadline = 'message_headline',
    PushedDate = 'pushed_date',
    TreeUrl = 'tree_url',
    UpdatedAt = 'updated_at',
    Url = 'url'
}

export type Commits_Set_Input = {
    additions?: Maybe<Scalars['Int']>;
    authed_date?: Maybe<Scalars['timetz']>;
    author?: Maybe<Scalars['uuid']>;
    changed_files?: Maybe<Scalars['Int']>;
    commit_url?: Maybe<Scalars['String']>;
    committer?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['uuid']>;
    message?: Maybe<Scalars['String']>;
    message_headline?: Maybe<Scalars['String']>;
    pushed_date?: Maybe<Scalars['timetz']>;
    tree_url?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Commits_Stddev_Fields = {
    __typename?: 'commits_stddev_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type Commits_Stddev_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type Commits_Stddev_Pop_Fields = {
    __typename?: 'commits_stddev_pop_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type Commits_Stddev_Pop_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type Commits_Stddev_Samp_Fields = {
    __typename?: 'commits_stddev_samp_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type Commits_Stddev_Samp_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type Commits_Sum_Fields = {
    __typename?: 'commits_sum_fields';
    additions?: Maybe<Scalars['Int']>;
    changed_files?: Maybe<Scalars['Int']>;
    deletions?: Maybe<Scalars['Int']>;
};

export type Commits_Sum_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export enum Commits_Update_Column {
    Additions = 'additions',
    AuthedDate = 'authed_date',
    Author = 'author',
    ChangedFiles = 'changed_files',
    CommitUrl = 'commit_url',
    Committer = 'committer',
    CreatedAt = 'created_at',
    Deletions = 'deletions',
    Id = 'id',
    Message = 'message',
    MessageHeadline = 'message_headline',
    PushedDate = 'pushed_date',
    TreeUrl = 'tree_url',
    UpdatedAt = 'updated_at',
    Url = 'url'
}

export type Commits_Var_Pop_Fields = {
    __typename?: 'commits_var_pop_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type Commits_Var_Pop_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type Commits_Var_Samp_Fields = {
    __typename?: 'commits_var_samp_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type Commits_Var_Samp_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type Commits_Variance_Fields = {
    __typename?: 'commits_variance_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type Commits_Variance_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type File_Diffs = {
    __typename?: 'file_diffs';
    additions: Scalars['Int'];
    created_at: Scalars['timestamptz'];
    deletions: Scalars['Int'];
    filepath: Scalars['String'];
    id: Scalars['uuid'];
    updated_at: Scalars['timestamptz'];
};

export type File_Diffs_Aggregate = {
    __typename?: 'file_diffs_aggregate';
    aggregate?: Maybe<File_Diffs_Aggregate_Fields>;
    nodes: Array<File_Diffs>;
};

export type File_Diffs_Aggregate_Fields = {
    __typename?: 'file_diffs_aggregate_fields';
    avg?: Maybe<File_Diffs_Avg_Fields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<File_Diffs_Max_Fields>;
    min?: Maybe<File_Diffs_Min_Fields>;
    stddev?: Maybe<File_Diffs_Stddev_Fields>;
    stddev_pop?: Maybe<File_Diffs_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<File_Diffs_Stddev_Samp_Fields>;
    sum?: Maybe<File_Diffs_Sum_Fields>;
    var_pop?: Maybe<File_Diffs_Var_Pop_Fields>;
    var_samp?: Maybe<File_Diffs_Var_Samp_Fields>;
    variance?: Maybe<File_Diffs_Variance_Fields>;
};

export type File_Diffs_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<File_Diffs_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type File_Diffs_Aggregate_Order_By = {
    avg?: Maybe<File_Diffs_Avg_Order_By>;
    count?: Maybe<Order_By>;
    max?: Maybe<File_Diffs_Max_Order_By>;
    min?: Maybe<File_Diffs_Min_Order_By>;
    stddev?: Maybe<File_Diffs_Stddev_Order_By>;
    stddev_pop?: Maybe<File_Diffs_Stddev_Pop_Order_By>;
    stddev_samp?: Maybe<File_Diffs_Stddev_Samp_Order_By>;
    sum?: Maybe<File_Diffs_Sum_Order_By>;
    var_pop?: Maybe<File_Diffs_Var_Pop_Order_By>;
    var_samp?: Maybe<File_Diffs_Var_Samp_Order_By>;
    variance?: Maybe<File_Diffs_Variance_Order_By>;
};

export type File_Diffs_Arr_Rel_Insert_Input = {
    data: Array<File_Diffs_Insert_Input>;
    on_conflict?: Maybe<File_Diffs_On_Conflict>;
};

export type File_Diffs_Avg_Fields = {
    __typename?: 'file_diffs_avg_fields';
    additions?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type File_Diffs_Avg_Order_By = {
    additions?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type File_Diffs_Bool_Exp = {
    _and?: Maybe<Array<Maybe<File_Diffs_Bool_Exp>>>;
    _not?: Maybe<File_Diffs_Bool_Exp>;
    _or?: Maybe<Array<Maybe<File_Diffs_Bool_Exp>>>;
    additions?: Maybe<Int_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    deletions?: Maybe<Int_Comparison_Exp>;
    filepath?: Maybe<String_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum File_Diffs_Constraint {
    FileDiffPkey = 'file_diff_pkey'
}

export type File_Diffs_Inc_Input = {
    additions?: Maybe<Scalars['Int']>;
    deletions?: Maybe<Scalars['Int']>;
};

export type File_Diffs_Insert_Input = {
    additions?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    filepath?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type File_Diffs_Max_Fields = {
    __typename?: 'file_diffs_max_fields';
    additions?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    filepath?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type File_Diffs_Max_Order_By = {
    additions?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    filepath?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type File_Diffs_Min_Fields = {
    __typename?: 'file_diffs_min_fields';
    additions?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    filepath?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type File_Diffs_Min_Order_By = {
    additions?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    filepath?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type File_Diffs_Mutation_Response = {
    __typename?: 'file_diffs_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<File_Diffs>;
};

export type File_Diffs_Obj_Rel_Insert_Input = {
    data: File_Diffs_Insert_Input;
    on_conflict?: Maybe<File_Diffs_On_Conflict>;
};

export type File_Diffs_On_Conflict = {
    constraint: File_Diffs_Constraint;
    update_columns: Array<File_Diffs_Update_Column>;
    where?: Maybe<File_Diffs_Bool_Exp>;
};

export type File_Diffs_Order_By = {
    additions?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    filepath?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export enum File_Diffs_Select_Column {
    Additions = 'additions',
    CreatedAt = 'created_at',
    Deletions = 'deletions',
    Filepath = 'filepath',
    Id = 'id',
    UpdatedAt = 'updated_at'
}

export type File_Diffs_Set_Input = {
    additions?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    filepath?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type File_Diffs_Stddev_Fields = {
    __typename?: 'file_diffs_stddev_fields';
    additions?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type File_Diffs_Stddev_Order_By = {
    additions?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type File_Diffs_Stddev_Pop_Fields = {
    __typename?: 'file_diffs_stddev_pop_fields';
    additions?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type File_Diffs_Stddev_Pop_Order_By = {
    additions?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type File_Diffs_Stddev_Samp_Fields = {
    __typename?: 'file_diffs_stddev_samp_fields';
    additions?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type File_Diffs_Stddev_Samp_Order_By = {
    additions?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type File_Diffs_Sum_Fields = {
    __typename?: 'file_diffs_sum_fields';
    additions?: Maybe<Scalars['Int']>;
    deletions?: Maybe<Scalars['Int']>;
};

export type File_Diffs_Sum_Order_By = {
    additions?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export enum File_Diffs_Update_Column {
    Additions = 'additions',
    CreatedAt = 'created_at',
    Deletions = 'deletions',
    Filepath = 'filepath',
    Id = 'id',
    UpdatedAt = 'updated_at'
}

export type File_Diffs_Var_Pop_Fields = {
    __typename?: 'file_diffs_var_pop_fields';
    additions?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type File_Diffs_Var_Pop_Order_By = {
    additions?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type File_Diffs_Var_Samp_Fields = {
    __typename?: 'file_diffs_var_samp_fields';
    additions?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type File_Diffs_Var_Samp_Order_By = {
    additions?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type File_Diffs_Variance_Fields = {
    __typename?: 'file_diffs_variance_fields';
    additions?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
};

export type File_Diffs_Variance_Order_By = {
    additions?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
};

export type Games = {
    __typename?: 'games';
    created_at: Scalars['timestamptz'];
    id: Scalars['uuid'];
    owner_id: Scalars['uuid'];
    repository: Repositories;
    repository_id: Scalars['uuid'];
    title: Scalars['String'];
    type: Scalars['String'];
    updated_at: Scalars['timestamptz'];
    user: Users;
};

export type Games_Aggregate = {
    __typename?: 'games_aggregate';
    aggregate?: Maybe<Games_Aggregate_Fields>;
    nodes: Array<Games>;
};

export type Games_Aggregate_Fields = {
    __typename?: 'games_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Games_Max_Fields>;
    min?: Maybe<Games_Min_Fields>;
};

export type Games_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Games_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Games_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Games_Max_Order_By>;
    min?: Maybe<Games_Min_Order_By>;
};

export type Games_Arr_Rel_Insert_Input = {
    data: Array<Games_Insert_Input>;
    on_conflict?: Maybe<Games_On_Conflict>;
};

export type Games_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Games_Bool_Exp>>>;
    _not?: Maybe<Games_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Games_Bool_Exp>>>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    owner_id?: Maybe<Uuid_Comparison_Exp>;
    repository?: Maybe<Repositories_Bool_Exp>;
    repository_id?: Maybe<Uuid_Comparison_Exp>;
    title?: Maybe<String_Comparison_Exp>;
    type?: Maybe<String_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    user?: Maybe<Users_Bool_Exp>;
};

export enum Games_Constraint {
    GamesPkey = 'games_pkey'
}

export type Games_Insert_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    owner_id?: Maybe<Scalars['uuid']>;
    repository?: Maybe<Repositories_Obj_Rel_Insert_Input>;
    repository_id?: Maybe<Scalars['uuid']>;
    title?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

export type Games_Max_Fields = {
    __typename?: 'games_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    title?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Games_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    title?: Maybe<Order_By>;
    type?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Games_Min_Fields = {
    __typename?: 'games_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    title?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Games_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    title?: Maybe<Order_By>;
    type?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Games_Mutation_Response = {
    __typename?: 'games_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Games>;
};

export type Games_Obj_Rel_Insert_Input = {
    data: Games_Insert_Input;
    on_conflict?: Maybe<Games_On_Conflict>;
};

export type Games_On_Conflict = {
    constraint: Games_Constraint;
    update_columns: Array<Games_Update_Column>;
    where?: Maybe<Games_Bool_Exp>;
};

export type Games_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    owner_id?: Maybe<Order_By>;
    repository?: Maybe<Repositories_Order_By>;
    repository_id?: Maybe<Order_By>;
    title?: Maybe<Order_By>;
    type?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    user?: Maybe<Users_Order_By>;
};

export enum Games_Select_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    OwnerId = 'owner_id',
    RepositoryId = 'repository_id',
    Title = 'title',
    Type = 'type',
    UpdatedAt = 'updated_at'
}

export type Games_Set_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    owner_id?: Maybe<Scalars['uuid']>;
    repository_id?: Maybe<Scalars['uuid']>;
    title?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Games_Update_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    OwnerId = 'owner_id',
    RepositoryId = 'repository_id',
    Title = 'title',
    Type = 'type',
    UpdatedAt = 'updated_at'
}

export type Github_User = {
    __typename?: 'github_user';
    avatar_url: Scalars['String'];
    bio: Scalars['String'];
    comments: Array<Comments>;
    comments_aggregate: Comments_Aggregate;
    commits: Array<Commits>;
    commits_aggregate: Commits_Aggregate;
    company: Scalars['String'];
    created_at: Scalars['timestamptz'];
    created_at_external: Scalars['timetz'];
    email: Scalars['String'];
    id: Scalars['uuid'];
    is_bounty_hunter: Scalars['Boolean'];
    is_campus_expert: Scalars['Boolean'];
    is_developer_preogram_mentor: Scalars['Boolean'];
    is_employee: Scalars['Boolean'];
    is_hireable: Scalars['Boolean'];
    is_site_admin: Scalars['Boolean'];
    is_viewer: Scalars['Boolean'];
    issue_assignees: Array<Issue_Assignees>;
    issue_assignees_aggregate: Issue_Assignees_Aggregate;
    issue_participants: Array<Issue_Participants>;
    issue_participants_aggregate: Issue_Participants_Aggregate;
    issues: Array<Issues>;
    issues_aggregate: Issues_Aggregate;
    login: Scalars['String'];
    name: Scalars['String'];
    pullRequestsByCreatedBy: Array<Pull_Requests>;
    pullRequestsByCreatedBy_aggregate: Pull_Requests_Aggregate;
    pull_request_assignees: Array<Pull_Request_Assignees>;
    pull_request_assignees_aggregate: Pull_Request_Assignees_Aggregate;
    pull_request_reviews: Array<Pull_Request_Reviews>;
    pull_request_reviews_aggregate: Pull_Request_Reviews_Aggregate;
    pull_requests: Array<Pull_Requests>;
    pull_requests_aggregate: Pull_Requests_Aggregate;
    repository_collaborators: Array<Repository_Collaborators>;
    repository_collaborators_aggregate: Repository_Collaborators_Aggregate;
    repository_stargazers: Array<Repository_Stargazers>;
    repository_stargazers_aggregate: Repository_Stargazers_Aggregate;
    repository_watchers: Array<Repository_Watchers>;
    repository_watchers_aggregate: Repository_Watchers_Aggregate;
    review_requests: Array<Review_Requests>;
    review_requests_aggregate: Review_Requests_Aggregate;
    review_threads: Array<Review_Threads>;
    review_threads_aggregate: Review_Threads_Aggregate;
    topic_stargazers: Array<Topic_Stargazers>;
    topic_stargazers_aggregate: Topic_Stargazers_Aggregate;
    updated_at: Scalars['timestamptz'];
    url: Scalars['String'];
};

export type Github_UserCommentsArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

export type Github_UserComments_AggregateArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

export type Github_UserCommitsArgs = {
    distinct_on?: Maybe<Array<Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Commits_Order_By>>;
    where?: Maybe<Commits_Bool_Exp>;
};

export type Github_UserCommits_AggregateArgs = {
    distinct_on?: Maybe<Array<Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Commits_Order_By>>;
    where?: Maybe<Commits_Bool_Exp>;
};

export type Github_UserIssue_AssigneesArgs = {
    distinct_on?: Maybe<Array<Issue_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Assignees_Order_By>>;
    where?: Maybe<Issue_Assignees_Bool_Exp>;
};

export type Github_UserIssue_Assignees_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Assignees_Order_By>>;
    where?: Maybe<Issue_Assignees_Bool_Exp>;
};

export type Github_UserIssue_ParticipantsArgs = {
    distinct_on?: Maybe<Array<Issue_Participants_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Participants_Order_By>>;
    where?: Maybe<Issue_Participants_Bool_Exp>;
};

export type Github_UserIssue_Participants_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Participants_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Participants_Order_By>>;
    where?: Maybe<Issue_Participants_Bool_Exp>;
};

export type Github_UserIssuesArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Github_UserIssues_AggregateArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Github_UserPullRequestsByCreatedByArgs = {
    distinct_on?: Maybe<Array<Pull_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Requests_Order_By>>;
    where?: Maybe<Pull_Requests_Bool_Exp>;
};

export type Github_UserPullRequestsByCreatedBy_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Requests_Order_By>>;
    where?: Maybe<Pull_Requests_Bool_Exp>;
};

export type Github_UserPull_Request_AssigneesArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Assignees_Order_By>>;
    where?: Maybe<Pull_Request_Assignees_Bool_Exp>;
};

export type Github_UserPull_Request_Assignees_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Assignees_Order_By>>;
    where?: Maybe<Pull_Request_Assignees_Bool_Exp>;
};

export type Github_UserPull_Request_ReviewsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Reviews_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Reviews_Order_By>>;
    where?: Maybe<Pull_Request_Reviews_Bool_Exp>;
};

export type Github_UserPull_Request_Reviews_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Reviews_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Reviews_Order_By>>;
    where?: Maybe<Pull_Request_Reviews_Bool_Exp>;
};

export type Github_UserPull_RequestsArgs = {
    distinct_on?: Maybe<Array<Pull_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Requests_Order_By>>;
    where?: Maybe<Pull_Requests_Bool_Exp>;
};

export type Github_UserPull_Requests_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Requests_Order_By>>;
    where?: Maybe<Pull_Requests_Bool_Exp>;
};

export type Github_UserRepository_CollaboratorsArgs = {
    distinct_on?: Maybe<Array<Repository_Collaborators_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Collaborators_Order_By>>;
    where?: Maybe<Repository_Collaborators_Bool_Exp>;
};

export type Github_UserRepository_Collaborators_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Collaborators_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Collaborators_Order_By>>;
    where?: Maybe<Repository_Collaborators_Bool_Exp>;
};

export type Github_UserRepository_StargazersArgs = {
    distinct_on?: Maybe<Array<Repository_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Stargazers_Order_By>>;
    where?: Maybe<Repository_Stargazers_Bool_Exp>;
};

export type Github_UserRepository_Stargazers_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Stargazers_Order_By>>;
    where?: Maybe<Repository_Stargazers_Bool_Exp>;
};

export type Github_UserRepository_WatchersArgs = {
    distinct_on?: Maybe<Array<Repository_Watchers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Watchers_Order_By>>;
    where?: Maybe<Repository_Watchers_Bool_Exp>;
};

export type Github_UserRepository_Watchers_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Watchers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Watchers_Order_By>>;
    where?: Maybe<Repository_Watchers_Bool_Exp>;
};

export type Github_UserReview_RequestsArgs = {
    distinct_on?: Maybe<Array<Review_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Requests_Order_By>>;
    where?: Maybe<Review_Requests_Bool_Exp>;
};

export type Github_UserReview_Requests_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Requests_Order_By>>;
    where?: Maybe<Review_Requests_Bool_Exp>;
};

export type Github_UserReview_ThreadsArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Github_UserReview_Threads_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Github_UserTopic_StargazersArgs = {
    distinct_on?: Maybe<Array<Topic_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topic_Stargazers_Order_By>>;
    where?: Maybe<Topic_Stargazers_Bool_Exp>;
};

export type Github_UserTopic_Stargazers_AggregateArgs = {
    distinct_on?: Maybe<Array<Topic_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topic_Stargazers_Order_By>>;
    where?: Maybe<Topic_Stargazers_Bool_Exp>;
};

export type Github_User_Aggregate = {
    __typename?: 'github_user_aggregate';
    aggregate?: Maybe<Github_User_Aggregate_Fields>;
    nodes: Array<Github_User>;
};

export type Github_User_Aggregate_Fields = {
    __typename?: 'github_user_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Github_User_Max_Fields>;
    min?: Maybe<Github_User_Min_Fields>;
};

export type Github_User_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Github_User_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Github_User_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Github_User_Max_Order_By>;
    min?: Maybe<Github_User_Min_Order_By>;
};

export type Github_User_Arr_Rel_Insert_Input = {
    data: Array<Github_User_Insert_Input>;
    on_conflict?: Maybe<Github_User_On_Conflict>;
};

export type Github_User_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Github_User_Bool_Exp>>>;
    _not?: Maybe<Github_User_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Github_User_Bool_Exp>>>;
    avatar_url?: Maybe<String_Comparison_Exp>;
    bio?: Maybe<String_Comparison_Exp>;
    comments?: Maybe<Comments_Bool_Exp>;
    commits?: Maybe<Commits_Bool_Exp>;
    company?: Maybe<String_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    created_at_external?: Maybe<Timetz_Comparison_Exp>;
    email?: Maybe<String_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    is_bounty_hunter?: Maybe<Boolean_Comparison_Exp>;
    is_campus_expert?: Maybe<Boolean_Comparison_Exp>;
    is_developer_preogram_mentor?: Maybe<Boolean_Comparison_Exp>;
    is_employee?: Maybe<Boolean_Comparison_Exp>;
    is_hireable?: Maybe<Boolean_Comparison_Exp>;
    is_site_admin?: Maybe<Boolean_Comparison_Exp>;
    is_viewer?: Maybe<Boolean_Comparison_Exp>;
    issue_assignees?: Maybe<Issue_Assignees_Bool_Exp>;
    issue_participants?: Maybe<Issue_Participants_Bool_Exp>;
    issues?: Maybe<Issues_Bool_Exp>;
    login?: Maybe<String_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    pullRequestsByCreatedBy?: Maybe<Pull_Requests_Bool_Exp>;
    pull_request_assignees?: Maybe<Pull_Request_Assignees_Bool_Exp>;
    pull_request_reviews?: Maybe<Pull_Request_Reviews_Bool_Exp>;
    pull_requests?: Maybe<Pull_Requests_Bool_Exp>;
    repository_collaborators?: Maybe<Repository_Collaborators_Bool_Exp>;
    repository_stargazers?: Maybe<Repository_Stargazers_Bool_Exp>;
    repository_watchers?: Maybe<Repository_Watchers_Bool_Exp>;
    review_requests?: Maybe<Review_Requests_Bool_Exp>;
    review_threads?: Maybe<Review_Threads_Bool_Exp>;
    topic_stargazers?: Maybe<Topic_Stargazers_Bool_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    url?: Maybe<String_Comparison_Exp>;
};

export enum Github_User_Constraint {
    GithubUserEmailKey = 'github_user_email_key',
    GithubUserLoginKey = 'github_user_login_key',
    GithubUserPkey = 'github_user_pkey'
}

export type Github_User_Following = {
    __typename?: 'github_user_following';
    follower_user_id: Scalars['uuid'];
    following_user_id: Scalars['uuid'];
    id: Scalars['uuid'];
    user: Users;
    userByFollowerUserId: Users;
};

export type Github_User_Following_Aggregate = {
    __typename?: 'github_user_following_aggregate';
    aggregate?: Maybe<Github_User_Following_Aggregate_Fields>;
    nodes: Array<Github_User_Following>;
};

export type Github_User_Following_Aggregate_Fields = {
    __typename?: 'github_user_following_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Github_User_Following_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Github_User_Following_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Github_User_Following_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Github_User_Following_Arr_Rel_Insert_Input = {
    data: Array<Github_User_Following_Insert_Input>;
    on_conflict?: Maybe<Github_User_Following_On_Conflict>;
};

export type Github_User_Following_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Github_User_Following_Bool_Exp>>>;
    _not?: Maybe<Github_User_Following_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Github_User_Following_Bool_Exp>>>;
    follower_user_id?: Maybe<Uuid_Comparison_Exp>;
    following_user_id?: Maybe<Uuid_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    user?: Maybe<Users_Bool_Exp>;
    userByFollowerUserId?: Maybe<Users_Bool_Exp>;
};

export enum Github_User_Following_Constraint {
    GithubUserFollowingPkey = 'github_user_following_pkey'
}

export type Github_User_Following_Insert_Input = {
    follower_user_id?: Maybe<Scalars['uuid']>;
    following_user_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    user?: Maybe<Users_Obj_Rel_Insert_Input>;
    userByFollowerUserId?: Maybe<Users_Obj_Rel_Insert_Input>;
};

export type Github_User_Following_Mutation_Response = {
    __typename?: 'github_user_following_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Github_User_Following>;
};

export type Github_User_Following_Obj_Rel_Insert_Input = {
    data: Github_User_Following_Insert_Input;
    on_conflict?: Maybe<Github_User_Following_On_Conflict>;
};

export type Github_User_Following_On_Conflict = {
    constraint: Github_User_Following_Constraint;
    update_columns: Array<Github_User_Following_Update_Column>;
    where?: Maybe<Github_User_Following_Bool_Exp>;
};

export type Github_User_Following_Order_By = {
    follower_user_id?: Maybe<Order_By>;
    following_user_id?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    user?: Maybe<Users_Order_By>;
    userByFollowerUserId?: Maybe<Users_Order_By>;
};

export enum Github_User_Following_Select_Column {
    FollowerUserId = 'follower_user_id',
    FollowingUserId = 'following_user_id',
    Id = 'id'
}

export type Github_User_Following_Set_Input = {
    follower_user_id?: Maybe<Scalars['uuid']>;
    following_user_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
};

export enum Github_User_Following_Update_Column {
    FollowerUserId = 'follower_user_id',
    FollowingUserId = 'following_user_id',
    Id = 'id'
}

export type Github_User_Insert_Input = {
    avatar_url?: Maybe<Scalars['String']>;
    bio?: Maybe<Scalars['String']>;
    comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
    commits?: Maybe<Commits_Arr_Rel_Insert_Input>;
    company?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_bounty_hunter?: Maybe<Scalars['Boolean']>;
    is_campus_expert?: Maybe<Scalars['Boolean']>;
    is_developer_preogram_mentor?: Maybe<Scalars['Boolean']>;
    is_employee?: Maybe<Scalars['Boolean']>;
    is_hireable?: Maybe<Scalars['Boolean']>;
    is_site_admin?: Maybe<Scalars['Boolean']>;
    is_viewer?: Maybe<Scalars['Boolean']>;
    issue_assignees?: Maybe<Issue_Assignees_Arr_Rel_Insert_Input>;
    issue_participants?: Maybe<Issue_Participants_Arr_Rel_Insert_Input>;
    issues?: Maybe<Issues_Arr_Rel_Insert_Input>;
    login?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    pullRequestsByCreatedBy?: Maybe<Pull_Requests_Arr_Rel_Insert_Input>;
    pull_request_assignees?: Maybe<Pull_Request_Assignees_Arr_Rel_Insert_Input>;
    pull_request_reviews?: Maybe<Pull_Request_Reviews_Arr_Rel_Insert_Input>;
    pull_requests?: Maybe<Pull_Requests_Arr_Rel_Insert_Input>;
    repository_collaborators?: Maybe<
        Repository_Collaborators_Arr_Rel_Insert_Input
    >;
    repository_stargazers?: Maybe<Repository_Stargazers_Arr_Rel_Insert_Input>;
    repository_watchers?: Maybe<Repository_Watchers_Arr_Rel_Insert_Input>;
    review_requests?: Maybe<Review_Requests_Arr_Rel_Insert_Input>;
    review_threads?: Maybe<Review_Threads_Arr_Rel_Insert_Input>;
    topic_stargazers?: Maybe<Topic_Stargazers_Arr_Rel_Insert_Input>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Github_User_Max_Fields = {
    __typename?: 'github_user_max_fields';
    avatar_url?: Maybe<Scalars['String']>;
    bio?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    email?: Maybe<Scalars['String']>;
    login?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Github_User_Max_Order_By = {
    avatar_url?: Maybe<Order_By>;
    bio?: Maybe<Order_By>;
    company?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    login?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Github_User_Min_Fields = {
    __typename?: 'github_user_min_fields';
    avatar_url?: Maybe<Scalars['String']>;
    bio?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    email?: Maybe<Scalars['String']>;
    login?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export type Github_User_Min_Order_By = {
    avatar_url?: Maybe<Order_By>;
    bio?: Maybe<Order_By>;
    company?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    login?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Github_User_Mutation_Response = {
    __typename?: 'github_user_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Github_User>;
};

export type Github_User_Obj_Rel_Insert_Input = {
    data: Github_User_Insert_Input;
    on_conflict?: Maybe<Github_User_On_Conflict>;
};

export type Github_User_On_Conflict = {
    constraint: Github_User_Constraint;
    update_columns: Array<Github_User_Update_Column>;
    where?: Maybe<Github_User_Bool_Exp>;
};

export type Github_User_Order_By = {
    avatar_url?: Maybe<Order_By>;
    bio?: Maybe<Order_By>;
    comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
    commits_aggregate?: Maybe<Commits_Aggregate_Order_By>;
    company?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    is_bounty_hunter?: Maybe<Order_By>;
    is_campus_expert?: Maybe<Order_By>;
    is_developer_preogram_mentor?: Maybe<Order_By>;
    is_employee?: Maybe<Order_By>;
    is_hireable?: Maybe<Order_By>;
    is_site_admin?: Maybe<Order_By>;
    is_viewer?: Maybe<Order_By>;
    issue_assignees_aggregate?: Maybe<Issue_Assignees_Aggregate_Order_By>;
    issue_participants_aggregate?: Maybe<Issue_Participants_Aggregate_Order_By>;
    issues_aggregate?: Maybe<Issues_Aggregate_Order_By>;
    login?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    pullRequestsByCreatedBy_aggregate?: Maybe<Pull_Requests_Aggregate_Order_By>;
    pull_request_assignees_aggregate?: Maybe<
        Pull_Request_Assignees_Aggregate_Order_By
    >;
    pull_request_reviews_aggregate?: Maybe<
        Pull_Request_Reviews_Aggregate_Order_By
    >;
    pull_requests_aggregate?: Maybe<Pull_Requests_Aggregate_Order_By>;
    repository_collaborators_aggregate?: Maybe<
        Repository_Collaborators_Aggregate_Order_By
    >;
    repository_stargazers_aggregate?: Maybe<
        Repository_Stargazers_Aggregate_Order_By
    >;
    repository_watchers_aggregate?: Maybe<
        Repository_Watchers_Aggregate_Order_By
    >;
    review_requests_aggregate?: Maybe<Review_Requests_Aggregate_Order_By>;
    review_threads_aggregate?: Maybe<Review_Threads_Aggregate_Order_By>;
    topic_stargazers_aggregate?: Maybe<Topic_Stargazers_Aggregate_Order_By>;
    updated_at?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export enum Github_User_Select_Column {
    AvatarUrl = 'avatar_url',
    Bio = 'bio',
    Company = 'company',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Email = 'email',
    Id = 'id',
    IsBountyHunter = 'is_bounty_hunter',
    IsCampusExpert = 'is_campus_expert',
    IsDeveloperPreogramMentor = 'is_developer_preogram_mentor',
    IsEmployee = 'is_employee',
    IsHireable = 'is_hireable',
    IsSiteAdmin = 'is_site_admin',
    IsViewer = 'is_viewer',
    Login = 'login',
    Name = 'name',
    UpdatedAt = 'updated_at',
    Url = 'url'
}

export type Github_User_Set_Input = {
    avatar_url?: Maybe<Scalars['String']>;
    bio?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_bounty_hunter?: Maybe<Scalars['Boolean']>;
    is_campus_expert?: Maybe<Scalars['Boolean']>;
    is_developer_preogram_mentor?: Maybe<Scalars['Boolean']>;
    is_employee?: Maybe<Scalars['Boolean']>;
    is_hireable?: Maybe<Scalars['Boolean']>;
    is_site_admin?: Maybe<Scalars['Boolean']>;
    is_viewer?: Maybe<Scalars['Boolean']>;
    login?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    url?: Maybe<Scalars['String']>;
};

export enum Github_User_Update_Column {
    AvatarUrl = 'avatar_url',
    Bio = 'bio',
    Company = 'company',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Email = 'email',
    Id = 'id',
    IsBountyHunter = 'is_bounty_hunter',
    IsCampusExpert = 'is_campus_expert',
    IsDeveloperPreogramMentor = 'is_developer_preogram_mentor',
    IsEmployee = 'is_employee',
    IsHireable = 'is_hireable',
    IsSiteAdmin = 'is_site_admin',
    IsViewer = 'is_viewer',
    Login = 'login',
    Name = 'name',
    UpdatedAt = 'updated_at',
    Url = 'url'
}

export type Github_Webhook_Events = {
    __typename?: 'github_webhook_events';
    action: Scalars['String'];
    created_at: Scalars['timestamptz'];
    event_type: Scalars['String'];
    id: Scalars['uuid'];
    repository: Repositories;
    repository_id: Scalars['uuid'];
    sender: Scalars['String'];
};

export type Github_Webhook_Events_Aggregate = {
    __typename?: 'github_webhook_events_aggregate';
    aggregate?: Maybe<Github_Webhook_Events_Aggregate_Fields>;
    nodes: Array<Github_Webhook_Events>;
};

export type Github_Webhook_Events_Aggregate_Fields = {
    __typename?: 'github_webhook_events_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Github_Webhook_Events_Max_Fields>;
    min?: Maybe<Github_Webhook_Events_Min_Fields>;
};

export type Github_Webhook_Events_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Github_Webhook_Events_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Github_Webhook_Events_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Github_Webhook_Events_Max_Order_By>;
    min?: Maybe<Github_Webhook_Events_Min_Order_By>;
};

export type Github_Webhook_Events_Arr_Rel_Insert_Input = {
    data: Array<Github_Webhook_Events_Insert_Input>;
    on_conflict?: Maybe<Github_Webhook_Events_On_Conflict>;
};

export type Github_Webhook_Events_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Github_Webhook_Events_Bool_Exp>>>;
    _not?: Maybe<Github_Webhook_Events_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Github_Webhook_Events_Bool_Exp>>>;
    action?: Maybe<String_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    event_type?: Maybe<String_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    repository?: Maybe<Repositories_Bool_Exp>;
    repository_id?: Maybe<Uuid_Comparison_Exp>;
    sender?: Maybe<String_Comparison_Exp>;
};

export enum Github_Webhook_Events_Constraint {
    GithubWebhookEventsPkey = 'github_webhook_events_pkey'
}

export type Github_Webhook_Events_Insert_Input = {
    action?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    event_type?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    repository?: Maybe<Repositories_Obj_Rel_Insert_Input>;
    repository_id?: Maybe<Scalars['uuid']>;
    sender?: Maybe<Scalars['String']>;
};

export type Github_Webhook_Events_Max_Fields = {
    __typename?: 'github_webhook_events_max_fields';
    action?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    event_type?: Maybe<Scalars['String']>;
    sender?: Maybe<Scalars['String']>;
};

export type Github_Webhook_Events_Max_Order_By = {
    action?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    event_type?: Maybe<Order_By>;
    sender?: Maybe<Order_By>;
};

export type Github_Webhook_Events_Min_Fields = {
    __typename?: 'github_webhook_events_min_fields';
    action?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    event_type?: Maybe<Scalars['String']>;
    sender?: Maybe<Scalars['String']>;
};

export type Github_Webhook_Events_Min_Order_By = {
    action?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    event_type?: Maybe<Order_By>;
    sender?: Maybe<Order_By>;
};

export type Github_Webhook_Events_Mutation_Response = {
    __typename?: 'github_webhook_events_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Github_Webhook_Events>;
};

export type Github_Webhook_Events_Obj_Rel_Insert_Input = {
    data: Github_Webhook_Events_Insert_Input;
    on_conflict?: Maybe<Github_Webhook_Events_On_Conflict>;
};

export type Github_Webhook_Events_On_Conflict = {
    constraint: Github_Webhook_Events_Constraint;
    update_columns: Array<Github_Webhook_Events_Update_Column>;
    where?: Maybe<Github_Webhook_Events_Bool_Exp>;
};

export type Github_Webhook_Events_Order_By = {
    action?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    event_type?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    repository?: Maybe<Repositories_Order_By>;
    repository_id?: Maybe<Order_By>;
    sender?: Maybe<Order_By>;
};

export enum Github_Webhook_Events_Select_Column {
    Action = 'action',
    CreatedAt = 'created_at',
    EventType = 'event_type',
    Id = 'id',
    RepositoryId = 'repository_id',
    Sender = 'sender'
}

export type Github_Webhook_Events_Set_Input = {
    action?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    event_type?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    repository_id?: Maybe<Scalars['uuid']>;
    sender?: Maybe<Scalars['String']>;
};

export enum Github_Webhook_Events_Update_Column {
    Action = 'action',
    CreatedAt = 'created_at',
    EventType = 'event_type',
    Id = 'id',
    RepositoryId = 'repository_id',
    Sender = 'sender'
}

export type Int_Comparison_Exp = {
    _eq?: Maybe<Scalars['Int']>;
    _gt?: Maybe<Scalars['Int']>;
    _gte?: Maybe<Scalars['Int']>;
    _in?: Maybe<Array<Scalars['Int']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['Int']>;
    _lte?: Maybe<Scalars['Int']>;
    _neq?: Maybe<Scalars['Int']>;
    _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Issue_Assignees = {
    __typename?: 'issue_assignees';
    github_user: Github_User;
    github_user_id: Scalars['uuid'];
    issue: Issues;
    issue_id: Scalars['uuid'];
};

export type Issue_Assignees_Aggregate = {
    __typename?: 'issue_assignees_aggregate';
    aggregate?: Maybe<Issue_Assignees_Aggregate_Fields>;
    nodes: Array<Issue_Assignees>;
};

export type Issue_Assignees_Aggregate_Fields = {
    __typename?: 'issue_assignees_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Issue_Assignees_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Issue_Assignees_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Issue_Assignees_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Issue_Assignees_Arr_Rel_Insert_Input = {
    data: Array<Issue_Assignees_Insert_Input>;
    on_conflict?: Maybe<Issue_Assignees_On_Conflict>;
};

export type Issue_Assignees_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Issue_Assignees_Bool_Exp>>>;
    _not?: Maybe<Issue_Assignees_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Issue_Assignees_Bool_Exp>>>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    github_user_id?: Maybe<Uuid_Comparison_Exp>;
    issue?: Maybe<Issues_Bool_Exp>;
    issue_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Issue_Assignees_Constraint {
    IssueAssigneesPkey = 'issue_assignees_pkey'
}

export type Issue_Assignees_Insert_Input = {
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    github_user_id?: Maybe<Scalars['uuid']>;
    issue?: Maybe<Issues_Obj_Rel_Insert_Input>;
    issue_id?: Maybe<Scalars['uuid']>;
};

export type Issue_Assignees_Mutation_Response = {
    __typename?: 'issue_assignees_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Issue_Assignees>;
};

export type Issue_Assignees_Obj_Rel_Insert_Input = {
    data: Issue_Assignees_Insert_Input;
    on_conflict?: Maybe<Issue_Assignees_On_Conflict>;
};

export type Issue_Assignees_On_Conflict = {
    constraint: Issue_Assignees_Constraint;
    update_columns: Array<Issue_Assignees_Update_Column>;
    where?: Maybe<Issue_Assignees_Bool_Exp>;
};

export type Issue_Assignees_Order_By = {
    github_user?: Maybe<Github_User_Order_By>;
    github_user_id?: Maybe<Order_By>;
    issue?: Maybe<Issues_Order_By>;
    issue_id?: Maybe<Order_By>;
};

export enum Issue_Assignees_Select_Column {
    GithubUserId = 'github_user_id',
    IssueId = 'issue_id'
}

export type Issue_Assignees_Set_Input = {
    github_user_id?: Maybe<Scalars['uuid']>;
    issue_id?: Maybe<Scalars['uuid']>;
};

export enum Issue_Assignees_Update_Column {
    GithubUserId = 'github_user_id',
    IssueId = 'issue_id'
}

export type Issue_Comments = {
    __typename?: 'issue_comments';
    comment: Comments;
    comment_id: Scalars['uuid'];
    issue: Issues;
    issue_id: Scalars['uuid'];
};

export type Issue_Comments_Aggregate = {
    __typename?: 'issue_comments_aggregate';
    aggregate?: Maybe<Issue_Comments_Aggregate_Fields>;
    nodes: Array<Issue_Comments>;
};

export type Issue_Comments_Aggregate_Fields = {
    __typename?: 'issue_comments_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Issue_Comments_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Issue_Comments_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Issue_Comments_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Issue_Comments_Arr_Rel_Insert_Input = {
    data: Array<Issue_Comments_Insert_Input>;
    on_conflict?: Maybe<Issue_Comments_On_Conflict>;
};

export type Issue_Comments_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Issue_Comments_Bool_Exp>>>;
    _not?: Maybe<Issue_Comments_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Issue_Comments_Bool_Exp>>>;
    comment?: Maybe<Comments_Bool_Exp>;
    comment_id?: Maybe<Uuid_Comparison_Exp>;
    issue?: Maybe<Issues_Bool_Exp>;
    issue_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Issue_Comments_Constraint {
    IssueCommentsPkey = 'issue_comments_pkey'
}

export type Issue_Comments_Insert_Input = {
    comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
    comment_id?: Maybe<Scalars['uuid']>;
    issue?: Maybe<Issues_Obj_Rel_Insert_Input>;
    issue_id?: Maybe<Scalars['uuid']>;
};

export type Issue_Comments_Mutation_Response = {
    __typename?: 'issue_comments_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Issue_Comments>;
};

export type Issue_Comments_Obj_Rel_Insert_Input = {
    data: Issue_Comments_Insert_Input;
    on_conflict?: Maybe<Issue_Comments_On_Conflict>;
};

export type Issue_Comments_On_Conflict = {
    constraint: Issue_Comments_Constraint;
    update_columns: Array<Issue_Comments_Update_Column>;
    where?: Maybe<Issue_Comments_Bool_Exp>;
};

export type Issue_Comments_Order_By = {
    comment?: Maybe<Comments_Order_By>;
    comment_id?: Maybe<Order_By>;
    issue?: Maybe<Issues_Order_By>;
    issue_id?: Maybe<Order_By>;
};

export enum Issue_Comments_Select_Column {
    CommentId = 'comment_id',
    IssueId = 'issue_id'
}

export type Issue_Comments_Set_Input = {
    comment_id?: Maybe<Scalars['uuid']>;
    issue_id?: Maybe<Scalars['uuid']>;
};

export enum Issue_Comments_Update_Column {
    CommentId = 'comment_id',
    IssueId = 'issue_id'
}

export type Issue_Labels = {
    __typename?: 'issue_labels';
    issue: Issues;
    issue_id: Scalars['uuid'];
    label: Labels;
    label_id: Scalars['uuid'];
};

export type Issue_Labels_Aggregate = {
    __typename?: 'issue_labels_aggregate';
    aggregate?: Maybe<Issue_Labels_Aggregate_Fields>;
    nodes: Array<Issue_Labels>;
};

export type Issue_Labels_Aggregate_Fields = {
    __typename?: 'issue_labels_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Issue_Labels_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Issue_Labels_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Issue_Labels_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Issue_Labels_Arr_Rel_Insert_Input = {
    data: Array<Issue_Labels_Insert_Input>;
    on_conflict?: Maybe<Issue_Labels_On_Conflict>;
};

export type Issue_Labels_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Issue_Labels_Bool_Exp>>>;
    _not?: Maybe<Issue_Labels_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Issue_Labels_Bool_Exp>>>;
    issue?: Maybe<Issues_Bool_Exp>;
    issue_id?: Maybe<Uuid_Comparison_Exp>;
    label?: Maybe<Labels_Bool_Exp>;
    label_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Issue_Labels_Constraint {
    IssueLabelsPkey = 'issue_labels_pkey'
}

export type Issue_Labels_Insert_Input = {
    issue?: Maybe<Issues_Obj_Rel_Insert_Input>;
    issue_id?: Maybe<Scalars['uuid']>;
    label?: Maybe<Labels_Obj_Rel_Insert_Input>;
    label_id?: Maybe<Scalars['uuid']>;
};

export type Issue_Labels_Mutation_Response = {
    __typename?: 'issue_labels_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Issue_Labels>;
};

export type Issue_Labels_Obj_Rel_Insert_Input = {
    data: Issue_Labels_Insert_Input;
    on_conflict?: Maybe<Issue_Labels_On_Conflict>;
};

export type Issue_Labels_On_Conflict = {
    constraint: Issue_Labels_Constraint;
    update_columns: Array<Issue_Labels_Update_Column>;
    where?: Maybe<Issue_Labels_Bool_Exp>;
};

export type Issue_Labels_Order_By = {
    issue?: Maybe<Issues_Order_By>;
    issue_id?: Maybe<Order_By>;
    label?: Maybe<Labels_Order_By>;
    label_id?: Maybe<Order_By>;
};

export enum Issue_Labels_Select_Column {
    IssueId = 'issue_id',
    LabelId = 'label_id'
}

export type Issue_Labels_Set_Input = {
    issue_id?: Maybe<Scalars['uuid']>;
    label_id?: Maybe<Scalars['uuid']>;
};

export enum Issue_Labels_Update_Column {
    IssueId = 'issue_id',
    LabelId = 'label_id'
}

export type Issue_Participants = {
    __typename?: 'issue_participants';
    github_user: Github_User;
    github_user_id: Scalars['uuid'];
    issue: Issues;
    issue_id: Scalars['uuid'];
};

export type Issue_Participants_Aggregate = {
    __typename?: 'issue_participants_aggregate';
    aggregate?: Maybe<Issue_Participants_Aggregate_Fields>;
    nodes: Array<Issue_Participants>;
};

export type Issue_Participants_Aggregate_Fields = {
    __typename?: 'issue_participants_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Issue_Participants_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Issue_Participants_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Issue_Participants_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Issue_Participants_Arr_Rel_Insert_Input = {
    data: Array<Issue_Participants_Insert_Input>;
    on_conflict?: Maybe<Issue_Participants_On_Conflict>;
};

export type Issue_Participants_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Issue_Participants_Bool_Exp>>>;
    _not?: Maybe<Issue_Participants_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Issue_Participants_Bool_Exp>>>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    github_user_id?: Maybe<Uuid_Comparison_Exp>;
    issue?: Maybe<Issues_Bool_Exp>;
    issue_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Issue_Participants_Constraint {
    IssueParticipantsPkey = 'issue_participants_pkey'
}

export type Issue_Participants_Insert_Input = {
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    github_user_id?: Maybe<Scalars['uuid']>;
    issue?: Maybe<Issues_Obj_Rel_Insert_Input>;
    issue_id?: Maybe<Scalars['uuid']>;
};

export type Issue_Participants_Mutation_Response = {
    __typename?: 'issue_participants_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Issue_Participants>;
};

export type Issue_Participants_Obj_Rel_Insert_Input = {
    data: Issue_Participants_Insert_Input;
    on_conflict?: Maybe<Issue_Participants_On_Conflict>;
};

export type Issue_Participants_On_Conflict = {
    constraint: Issue_Participants_Constraint;
    update_columns: Array<Issue_Participants_Update_Column>;
    where?: Maybe<Issue_Participants_Bool_Exp>;
};

export type Issue_Participants_Order_By = {
    github_user?: Maybe<Github_User_Order_By>;
    github_user_id?: Maybe<Order_By>;
    issue?: Maybe<Issues_Order_By>;
    issue_id?: Maybe<Order_By>;
};

export enum Issue_Participants_Select_Column {
    GithubUserId = 'github_user_id',
    IssueId = 'issue_id'
}

export type Issue_Participants_Set_Input = {
    github_user_id?: Maybe<Scalars['uuid']>;
    issue_id?: Maybe<Scalars['uuid']>;
};

export enum Issue_Participants_Update_Column {
    GithubUserId = 'github_user_id',
    IssueId = 'issue_id'
}

export type Issues = {
    __typename?: 'issues';
    author_id: Scalars['uuid'];
    body_text: Scalars['String'];
    closed: Scalars['timetz'];
    created_at: Scalars['timestamptz'];
    created_at_external: Scalars['timetz'];
    github_user: Github_User;
    id: Scalars['uuid'];
    issue_assignees: Array<Issue_Assignees>;
    issue_assignees_aggregate: Issue_Assignees_Aggregate;
    issue_comments: Array<Issue_Comments>;
    issue_comments_aggregate: Issue_Comments_Aggregate;
    issue_labels: Array<Issue_Labels>;
    issue_labels_aggregate: Issue_Labels_Aggregate;
    issue_participants: Array<Issue_Participants>;
    issue_participants_aggregate: Issue_Participants_Aggregate;
    last_edited_at: Scalars['timetz'];
    locked: Scalars['Boolean'];
    number: Scalars['Int'];
    state: Scalars['String'];
    title: Scalars['String'];
    updated_at: Scalars['timestamptz'];
    updated_at_external: Scalars['timetz'];
    url: Scalars['String'];
};

export type IssuesIssue_AssigneesArgs = {
    distinct_on?: Maybe<Array<Issue_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Assignees_Order_By>>;
    where?: Maybe<Issue_Assignees_Bool_Exp>;
};

export type IssuesIssue_Assignees_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Assignees_Order_By>>;
    where?: Maybe<Issue_Assignees_Bool_Exp>;
};

export type IssuesIssue_CommentsArgs = {
    distinct_on?: Maybe<Array<Issue_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Comments_Order_By>>;
    where?: Maybe<Issue_Comments_Bool_Exp>;
};

export type IssuesIssue_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Comments_Order_By>>;
    where?: Maybe<Issue_Comments_Bool_Exp>;
};

export type IssuesIssue_LabelsArgs = {
    distinct_on?: Maybe<Array<Issue_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Labels_Order_By>>;
    where?: Maybe<Issue_Labels_Bool_Exp>;
};

export type IssuesIssue_Labels_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Labels_Order_By>>;
    where?: Maybe<Issue_Labels_Bool_Exp>;
};

export type IssuesIssue_ParticipantsArgs = {
    distinct_on?: Maybe<Array<Issue_Participants_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Participants_Order_By>>;
    where?: Maybe<Issue_Participants_Bool_Exp>;
};

export type IssuesIssue_Participants_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Participants_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Participants_Order_By>>;
    where?: Maybe<Issue_Participants_Bool_Exp>;
};

export type Issues_Aggregate = {
    __typename?: 'issues_aggregate';
    aggregate?: Maybe<Issues_Aggregate_Fields>;
    nodes: Array<Issues>;
};

export type Issues_Aggregate_Fields = {
    __typename?: 'issues_aggregate_fields';
    avg?: Maybe<Issues_Avg_Fields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Issues_Max_Fields>;
    min?: Maybe<Issues_Min_Fields>;
    stddev?: Maybe<Issues_Stddev_Fields>;
    stddev_pop?: Maybe<Issues_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Issues_Stddev_Samp_Fields>;
    sum?: Maybe<Issues_Sum_Fields>;
    var_pop?: Maybe<Issues_Var_Pop_Fields>;
    var_samp?: Maybe<Issues_Var_Samp_Fields>;
    variance?: Maybe<Issues_Variance_Fields>;
};

export type Issues_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Issues_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Issues_Aggregate_Order_By = {
    avg?: Maybe<Issues_Avg_Order_By>;
    count?: Maybe<Order_By>;
    max?: Maybe<Issues_Max_Order_By>;
    min?: Maybe<Issues_Min_Order_By>;
    stddev?: Maybe<Issues_Stddev_Order_By>;
    stddev_pop?: Maybe<Issues_Stddev_Pop_Order_By>;
    stddev_samp?: Maybe<Issues_Stddev_Samp_Order_By>;
    sum?: Maybe<Issues_Sum_Order_By>;
    var_pop?: Maybe<Issues_Var_Pop_Order_By>;
    var_samp?: Maybe<Issues_Var_Samp_Order_By>;
    variance?: Maybe<Issues_Variance_Order_By>;
};

export type Issues_Arr_Rel_Insert_Input = {
    data: Array<Issues_Insert_Input>;
    on_conflict?: Maybe<Issues_On_Conflict>;
};

export type Issues_Avg_Fields = {
    __typename?: 'issues_avg_fields';
    number?: Maybe<Scalars['Float']>;
};

export type Issues_Avg_Order_By = {
    number?: Maybe<Order_By>;
};

export type Issues_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Issues_Bool_Exp>>>;
    _not?: Maybe<Issues_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Issues_Bool_Exp>>>;
    author_id?: Maybe<Uuid_Comparison_Exp>;
    body_text?: Maybe<String_Comparison_Exp>;
    closed?: Maybe<Timetz_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    created_at_external?: Maybe<Timetz_Comparison_Exp>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    issue_assignees?: Maybe<Issue_Assignees_Bool_Exp>;
    issue_comments?: Maybe<Issue_Comments_Bool_Exp>;
    issue_labels?: Maybe<Issue_Labels_Bool_Exp>;
    issue_participants?: Maybe<Issue_Participants_Bool_Exp>;
    last_edited_at?: Maybe<Timetz_Comparison_Exp>;
    locked?: Maybe<Boolean_Comparison_Exp>;
    number?: Maybe<Int_Comparison_Exp>;
    state?: Maybe<String_Comparison_Exp>;
    title?: Maybe<String_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    updated_at_external?: Maybe<Timetz_Comparison_Exp>;
    url?: Maybe<String_Comparison_Exp>;
};

export enum Issues_Constraint {
    IssuesPkey = 'issues_pkey'
}

export type Issues_Inc_Input = {
    number?: Maybe<Scalars['Int']>;
};

export type Issues_Insert_Input = {
    author_id?: Maybe<Scalars['uuid']>;
    body_text?: Maybe<Scalars['String']>;
    closed?: Maybe<Scalars['timetz']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    issue_assignees?: Maybe<Issue_Assignees_Arr_Rel_Insert_Input>;
    issue_comments?: Maybe<Issue_Comments_Arr_Rel_Insert_Input>;
    issue_labels?: Maybe<Issue_Labels_Arr_Rel_Insert_Input>;
    issue_participants?: Maybe<Issue_Participants_Arr_Rel_Insert_Input>;
    last_edited_at?: Maybe<Scalars['timetz']>;
    locked?: Maybe<Scalars['Boolean']>;
    number?: Maybe<Scalars['Int']>;
    state?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Issues_Max_Fields = {
    __typename?: 'issues_max_fields';
    body_text?: Maybe<Scalars['String']>;
    closed?: Maybe<Scalars['timetz']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    last_edited_at?: Maybe<Scalars['timetz']>;
    number?: Maybe<Scalars['Int']>;
    state?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Issues_Max_Order_By = {
    body_text?: Maybe<Order_By>;
    closed?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    last_edited_at?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
    state?: Maybe<Order_By>;
    title?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Issues_Min_Fields = {
    __typename?: 'issues_min_fields';
    body_text?: Maybe<Scalars['String']>;
    closed?: Maybe<Scalars['timetz']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    last_edited_at?: Maybe<Scalars['timetz']>;
    number?: Maybe<Scalars['Int']>;
    state?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Issues_Min_Order_By = {
    body_text?: Maybe<Order_By>;
    closed?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    last_edited_at?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
    state?: Maybe<Order_By>;
    title?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Issues_Mutation_Response = {
    __typename?: 'issues_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Issues>;
};

export type Issues_Obj_Rel_Insert_Input = {
    data: Issues_Insert_Input;
    on_conflict?: Maybe<Issues_On_Conflict>;
};

export type Issues_On_Conflict = {
    constraint: Issues_Constraint;
    update_columns: Array<Issues_Update_Column>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Issues_Order_By = {
    author_id?: Maybe<Order_By>;
    body_text?: Maybe<Order_By>;
    closed?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    github_user?: Maybe<Github_User_Order_By>;
    id?: Maybe<Order_By>;
    issue_assignees_aggregate?: Maybe<Issue_Assignees_Aggregate_Order_By>;
    issue_comments_aggregate?: Maybe<Issue_Comments_Aggregate_Order_By>;
    issue_labels_aggregate?: Maybe<Issue_Labels_Aggregate_Order_By>;
    issue_participants_aggregate?: Maybe<Issue_Participants_Aggregate_Order_By>;
    last_edited_at?: Maybe<Order_By>;
    locked?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
    state?: Maybe<Order_By>;
    title?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export enum Issues_Select_Column {
    AuthorId = 'author_id',
    BodyText = 'body_text',
    Closed = 'closed',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Id = 'id',
    LastEditedAt = 'last_edited_at',
    Locked = 'locked',
    Number = 'number',
    State = 'state',
    Title = 'title',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external',
    Url = 'url'
}

export type Issues_Set_Input = {
    author_id?: Maybe<Scalars['uuid']>;
    body_text?: Maybe<Scalars['String']>;
    closed?: Maybe<Scalars['timetz']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    id?: Maybe<Scalars['uuid']>;
    last_edited_at?: Maybe<Scalars['timetz']>;
    locked?: Maybe<Scalars['Boolean']>;
    number?: Maybe<Scalars['Int']>;
    state?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Issues_Stddev_Fields = {
    __typename?: 'issues_stddev_fields';
    number?: Maybe<Scalars['Float']>;
};

export type Issues_Stddev_Order_By = {
    number?: Maybe<Order_By>;
};

export type Issues_Stddev_Pop_Fields = {
    __typename?: 'issues_stddev_pop_fields';
    number?: Maybe<Scalars['Float']>;
};

export type Issues_Stddev_Pop_Order_By = {
    number?: Maybe<Order_By>;
};

export type Issues_Stddev_Samp_Fields = {
    __typename?: 'issues_stddev_samp_fields';
    number?: Maybe<Scalars['Float']>;
};

export type Issues_Stddev_Samp_Order_By = {
    number?: Maybe<Order_By>;
};

export type Issues_Sum_Fields = {
    __typename?: 'issues_sum_fields';
    number?: Maybe<Scalars['Int']>;
};

export type Issues_Sum_Order_By = {
    number?: Maybe<Order_By>;
};

export enum Issues_Update_Column {
    AuthorId = 'author_id',
    BodyText = 'body_text',
    Closed = 'closed',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Id = 'id',
    LastEditedAt = 'last_edited_at',
    Locked = 'locked',
    Number = 'number',
    State = 'state',
    Title = 'title',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external',
    Url = 'url'
}

export type Issues_Var_Pop_Fields = {
    __typename?: 'issues_var_pop_fields';
    number?: Maybe<Scalars['Float']>;
};

export type Issues_Var_Pop_Order_By = {
    number?: Maybe<Order_By>;
};

export type Issues_Var_Samp_Fields = {
    __typename?: 'issues_var_samp_fields';
    number?: Maybe<Scalars['Float']>;
};

export type Issues_Var_Samp_Order_By = {
    number?: Maybe<Order_By>;
};

export type Issues_Variance_Fields = {
    __typename?: 'issues_variance_fields';
    number?: Maybe<Scalars['Float']>;
};

export type Issues_Variance_Order_By = {
    number?: Maybe<Order_By>;
};

export type Labels = {
    __typename?: 'labels';
    color: Scalars['String'];
    created_at: Scalars['timestamptz'];
    created_at_external: Scalars['timetz'];
    description: Scalars['String'];
    id: Scalars['uuid'];
    issue_labels: Array<Issue_Labels>;
    issue_labels_aggregate: Issue_Labels_Aggregate;
    name: Scalars['String'];
    pull_request_labels: Array<Pull_Request_Labels>;
    pull_request_labels_aggregate: Pull_Request_Labels_Aggregate;
    updated_at: Scalars['timestamptz'];
    updated_at_external: Scalars['timetz'];
    url: Scalars['String'];
};

export type LabelsIssue_LabelsArgs = {
    distinct_on?: Maybe<Array<Issue_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Labels_Order_By>>;
    where?: Maybe<Issue_Labels_Bool_Exp>;
};

export type LabelsIssue_Labels_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Labels_Order_By>>;
    where?: Maybe<Issue_Labels_Bool_Exp>;
};

export type LabelsPull_Request_LabelsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Labels_Order_By>>;
    where?: Maybe<Pull_Request_Labels_Bool_Exp>;
};

export type LabelsPull_Request_Labels_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Labels_Order_By>>;
    where?: Maybe<Pull_Request_Labels_Bool_Exp>;
};

export type Labels_Aggregate = {
    __typename?: 'labels_aggregate';
    aggregate?: Maybe<Labels_Aggregate_Fields>;
    nodes: Array<Labels>;
};

export type Labels_Aggregate_Fields = {
    __typename?: 'labels_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Labels_Max_Fields>;
    min?: Maybe<Labels_Min_Fields>;
};

export type Labels_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Labels_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Labels_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Labels_Max_Order_By>;
    min?: Maybe<Labels_Min_Order_By>;
};

export type Labels_Arr_Rel_Insert_Input = {
    data: Array<Labels_Insert_Input>;
    on_conflict?: Maybe<Labels_On_Conflict>;
};

export type Labels_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Labels_Bool_Exp>>>;
    _not?: Maybe<Labels_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Labels_Bool_Exp>>>;
    color?: Maybe<String_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    created_at_external?: Maybe<Timetz_Comparison_Exp>;
    description?: Maybe<String_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    issue_labels?: Maybe<Issue_Labels_Bool_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    pull_request_labels?: Maybe<Pull_Request_Labels_Bool_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    updated_at_external?: Maybe<Timetz_Comparison_Exp>;
    url?: Maybe<String_Comparison_Exp>;
};

export enum Labels_Constraint {
    LabelsPkey = 'labels_pkey'
}

export type Labels_Insert_Input = {
    color?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    issue_labels?: Maybe<Issue_Labels_Arr_Rel_Insert_Input>;
    name?: Maybe<Scalars['String']>;
    pull_request_labels?: Maybe<Pull_Request_Labels_Arr_Rel_Insert_Input>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Labels_Max_Fields = {
    __typename?: 'labels_max_fields';
    color?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    description?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Labels_Max_Order_By = {
    color?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    description?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Labels_Min_Fields = {
    __typename?: 'labels_min_fields';
    color?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    description?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Labels_Min_Order_By = {
    color?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    description?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Labels_Mutation_Response = {
    __typename?: 'labels_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Labels>;
};

export type Labels_Obj_Rel_Insert_Input = {
    data: Labels_Insert_Input;
    on_conflict?: Maybe<Labels_On_Conflict>;
};

export type Labels_On_Conflict = {
    constraint: Labels_Constraint;
    update_columns: Array<Labels_Update_Column>;
    where?: Maybe<Labels_Bool_Exp>;
};

export type Labels_Order_By = {
    color?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    description?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    issue_labels_aggregate?: Maybe<Issue_Labels_Aggregate_Order_By>;
    name?: Maybe<Order_By>;
    pull_request_labels_aggregate?: Maybe<
        Pull_Request_Labels_Aggregate_Order_By
    >;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export enum Labels_Select_Column {
    Color = 'color',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Description = 'description',
    Id = 'id',
    Name = 'name',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external',
    Url = 'url'
}

export type Labels_Set_Input = {
    color?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export enum Labels_Update_Column {
    Color = 'color',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Description = 'description',
    Id = 'id',
    Name = 'name',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external',
    Url = 'url'
}

export type Mutation_Root = {
    __typename?: 'mutation_root';
    delete_branch_commits?: Maybe<Branch_Commits_Mutation_Response>;
    delete_branches?: Maybe<Branches_Mutation_Response>;
    delete_comments?: Maybe<Comments_Mutation_Response>;
    delete_commits?: Maybe<Commits_Mutation_Response>;
    delete_file_diffs?: Maybe<File_Diffs_Mutation_Response>;
    delete_games?: Maybe<Games_Mutation_Response>;
    delete_github_user?: Maybe<Github_User_Mutation_Response>;
    delete_github_user_following?: Maybe<
        Github_User_Following_Mutation_Response
    >;
    delete_github_webhook_events?: Maybe<
        Github_Webhook_Events_Mutation_Response
    >;
    delete_issue_assignees?: Maybe<Issue_Assignees_Mutation_Response>;
    delete_issue_comments?: Maybe<Issue_Comments_Mutation_Response>;
    delete_issue_labels?: Maybe<Issue_Labels_Mutation_Response>;
    delete_issue_participants?: Maybe<Issue_Participants_Mutation_Response>;
    delete_issues?: Maybe<Issues_Mutation_Response>;
    delete_labels?: Maybe<Labels_Mutation_Response>;
    delete_pull_request_assignees?: Maybe<
        Pull_Request_Assignees_Mutation_Response
    >;
    delete_pull_request_comments?: Maybe<
        Pull_Request_Comments_Mutation_Response
    >;
    delete_pull_request_commits?: Maybe<Pull_Request_Commits_Mutation_Response>;
    delete_pull_request_labels?: Maybe<Pull_Request_Labels_Mutation_Response>;
    delete_pull_request_review_comments?: Maybe<
        Pull_Request_Review_Comments_Mutation_Response
    >;
    delete_pull_request_review_commits?: Maybe<
        Pull_Request_Review_Commits_Mutation_Response
    >;
    delete_pull_request_reviews?: Maybe<Pull_Request_Reviews_Mutation_Response>;
    delete_pull_requests?: Maybe<Pull_Requests_Mutation_Response>;
    delete_related_topics?: Maybe<Related_Topics_Mutation_Response>;
    delete_repositories?: Maybe<Repositories_Mutation_Response>;
    delete_repository_api_keys?: Maybe<Repository_Api_Keys_Mutation_Response>;
    delete_repository_collaborators?: Maybe<
        Repository_Collaborators_Mutation_Response
    >;
    delete_repository_stargazers?: Maybe<
        Repository_Stargazers_Mutation_Response
    >;
    delete_repository_topics?: Maybe<Repository_Topics_Mutation_Response>;
    delete_repository_watchers?: Maybe<Repository_Watchers_Mutation_Response>;
    delete_review_requests?: Maybe<Review_Requests_Mutation_Response>;
    delete_review_thread_comments?: Maybe<
        Review_Thread_Comments_Mutation_Response
    >;
    delete_review_threads?: Maybe<Review_Threads_Mutation_Response>;
    delete_topic_stargazers?: Maybe<Topic_Stargazers_Mutation_Response>;
    delete_topics?: Maybe<Topics_Mutation_Response>;
    delete_users?: Maybe<Users_Mutation_Response>;
    insert_branch_commits?: Maybe<Branch_Commits_Mutation_Response>;
    insert_branches?: Maybe<Branches_Mutation_Response>;
    insert_comments?: Maybe<Comments_Mutation_Response>;
    insert_commits?: Maybe<Commits_Mutation_Response>;
    insert_file_diffs?: Maybe<File_Diffs_Mutation_Response>;
    insert_games?: Maybe<Games_Mutation_Response>;
    insert_github_user?: Maybe<Github_User_Mutation_Response>;
    insert_github_user_following?: Maybe<
        Github_User_Following_Mutation_Response
    >;
    insert_github_webhook_events?: Maybe<
        Github_Webhook_Events_Mutation_Response
    >;
    insert_issue_assignees?: Maybe<Issue_Assignees_Mutation_Response>;
    insert_issue_comments?: Maybe<Issue_Comments_Mutation_Response>;
    insert_issue_labels?: Maybe<Issue_Labels_Mutation_Response>;
    insert_issue_participants?: Maybe<Issue_Participants_Mutation_Response>;
    insert_issues?: Maybe<Issues_Mutation_Response>;
    insert_labels?: Maybe<Labels_Mutation_Response>;
    insert_pull_request_assignees?: Maybe<
        Pull_Request_Assignees_Mutation_Response
    >;
    insert_pull_request_comments?: Maybe<
        Pull_Request_Comments_Mutation_Response
    >;
    insert_pull_request_commits?: Maybe<Pull_Request_Commits_Mutation_Response>;
    insert_pull_request_labels?: Maybe<Pull_Request_Labels_Mutation_Response>;
    insert_pull_request_review_comments?: Maybe<
        Pull_Request_Review_Comments_Mutation_Response
    >;
    insert_pull_request_review_commits?: Maybe<
        Pull_Request_Review_Commits_Mutation_Response
    >;
    insert_pull_request_reviews?: Maybe<Pull_Request_Reviews_Mutation_Response>;
    insert_pull_requests?: Maybe<Pull_Requests_Mutation_Response>;
    insert_related_topics?: Maybe<Related_Topics_Mutation_Response>;
    insert_repositories?: Maybe<Repositories_Mutation_Response>;
    insert_repository_api_keys?: Maybe<Repository_Api_Keys_Mutation_Response>;
    insert_repository_collaborators?: Maybe<
        Repository_Collaborators_Mutation_Response
    >;
    insert_repository_stargazers?: Maybe<
        Repository_Stargazers_Mutation_Response
    >;
    insert_repository_topics?: Maybe<Repository_Topics_Mutation_Response>;
    insert_repository_watchers?: Maybe<Repository_Watchers_Mutation_Response>;
    insert_review_requests?: Maybe<Review_Requests_Mutation_Response>;
    insert_review_thread_comments?: Maybe<
        Review_Thread_Comments_Mutation_Response
    >;
    insert_review_threads?: Maybe<Review_Threads_Mutation_Response>;
    insert_topic_stargazers?: Maybe<Topic_Stargazers_Mutation_Response>;
    insert_topics?: Maybe<Topics_Mutation_Response>;
    insert_users?: Maybe<Users_Mutation_Response>;
    update_branch_commits?: Maybe<Branch_Commits_Mutation_Response>;
    update_branches?: Maybe<Branches_Mutation_Response>;
    update_comments?: Maybe<Comments_Mutation_Response>;
    update_commits?: Maybe<Commits_Mutation_Response>;
    update_file_diffs?: Maybe<File_Diffs_Mutation_Response>;
    update_games?: Maybe<Games_Mutation_Response>;
    update_github_user?: Maybe<Github_User_Mutation_Response>;
    update_github_user_following?: Maybe<
        Github_User_Following_Mutation_Response
    >;
    update_github_webhook_events?: Maybe<
        Github_Webhook_Events_Mutation_Response
    >;
    update_issue_assignees?: Maybe<Issue_Assignees_Mutation_Response>;
    update_issue_comments?: Maybe<Issue_Comments_Mutation_Response>;
    update_issue_labels?: Maybe<Issue_Labels_Mutation_Response>;
    update_issue_participants?: Maybe<Issue_Participants_Mutation_Response>;
    update_issues?: Maybe<Issues_Mutation_Response>;
    update_labels?: Maybe<Labels_Mutation_Response>;
    update_pull_request_assignees?: Maybe<
        Pull_Request_Assignees_Mutation_Response
    >;
    update_pull_request_comments?: Maybe<
        Pull_Request_Comments_Mutation_Response
    >;
    update_pull_request_commits?: Maybe<Pull_Request_Commits_Mutation_Response>;
    update_pull_request_labels?: Maybe<Pull_Request_Labels_Mutation_Response>;
    update_pull_request_review_comments?: Maybe<
        Pull_Request_Review_Comments_Mutation_Response
    >;
    update_pull_request_review_commits?: Maybe<
        Pull_Request_Review_Commits_Mutation_Response
    >;
    update_pull_request_reviews?: Maybe<Pull_Request_Reviews_Mutation_Response>;
    update_pull_requests?: Maybe<Pull_Requests_Mutation_Response>;
    update_related_topics?: Maybe<Related_Topics_Mutation_Response>;
    update_repositories?: Maybe<Repositories_Mutation_Response>;
    update_repository_api_keys?: Maybe<Repository_Api_Keys_Mutation_Response>;
    update_repository_collaborators?: Maybe<
        Repository_Collaborators_Mutation_Response
    >;
    update_repository_stargazers?: Maybe<
        Repository_Stargazers_Mutation_Response
    >;
    update_repository_topics?: Maybe<Repository_Topics_Mutation_Response>;
    update_repository_watchers?: Maybe<Repository_Watchers_Mutation_Response>;
    update_review_requests?: Maybe<Review_Requests_Mutation_Response>;
    update_review_thread_comments?: Maybe<
        Review_Thread_Comments_Mutation_Response
    >;
    update_review_threads?: Maybe<Review_Threads_Mutation_Response>;
    update_topic_stargazers?: Maybe<Topic_Stargazers_Mutation_Response>;
    update_topics?: Maybe<Topics_Mutation_Response>;
    update_users?: Maybe<Users_Mutation_Response>;
};

export type Mutation_RootDelete_Branch_CommitsArgs = {
    where: Branch_Commits_Bool_Exp;
};

export type Mutation_RootDelete_BranchesArgs = {
    where: Branches_Bool_Exp;
};

export type Mutation_RootDelete_CommentsArgs = {
    where: Comments_Bool_Exp;
};

export type Mutation_RootDelete_CommitsArgs = {
    where: Commits_Bool_Exp;
};

export type Mutation_RootDelete_File_DiffsArgs = {
    where: File_Diffs_Bool_Exp;
};

export type Mutation_RootDelete_GamesArgs = {
    where: Games_Bool_Exp;
};

export type Mutation_RootDelete_Github_UserArgs = {
    where: Github_User_Bool_Exp;
};

export type Mutation_RootDelete_Github_User_FollowingArgs = {
    where: Github_User_Following_Bool_Exp;
};

export type Mutation_RootDelete_Github_Webhook_EventsArgs = {
    where: Github_Webhook_Events_Bool_Exp;
};

export type Mutation_RootDelete_Issue_AssigneesArgs = {
    where: Issue_Assignees_Bool_Exp;
};

export type Mutation_RootDelete_Issue_CommentsArgs = {
    where: Issue_Comments_Bool_Exp;
};

export type Mutation_RootDelete_Issue_LabelsArgs = {
    where: Issue_Labels_Bool_Exp;
};

export type Mutation_RootDelete_Issue_ParticipantsArgs = {
    where: Issue_Participants_Bool_Exp;
};

export type Mutation_RootDelete_IssuesArgs = {
    where: Issues_Bool_Exp;
};

export type Mutation_RootDelete_LabelsArgs = {
    where: Labels_Bool_Exp;
};

export type Mutation_RootDelete_Pull_Request_AssigneesArgs = {
    where: Pull_Request_Assignees_Bool_Exp;
};

export type Mutation_RootDelete_Pull_Request_CommentsArgs = {
    where: Pull_Request_Comments_Bool_Exp;
};

export type Mutation_RootDelete_Pull_Request_CommitsArgs = {
    where: Pull_Request_Commits_Bool_Exp;
};

export type Mutation_RootDelete_Pull_Request_LabelsArgs = {
    where: Pull_Request_Labels_Bool_Exp;
};

export type Mutation_RootDelete_Pull_Request_Review_CommentsArgs = {
    where: Pull_Request_Review_Comments_Bool_Exp;
};

export type Mutation_RootDelete_Pull_Request_Review_CommitsArgs = {
    where: Pull_Request_Review_Commits_Bool_Exp;
};

export type Mutation_RootDelete_Pull_Request_ReviewsArgs = {
    where: Pull_Request_Reviews_Bool_Exp;
};

export type Mutation_RootDelete_Pull_RequestsArgs = {
    where: Pull_Requests_Bool_Exp;
};

export type Mutation_RootDelete_Related_TopicsArgs = {
    where: Related_Topics_Bool_Exp;
};

export type Mutation_RootDelete_RepositoriesArgs = {
    where: Repositories_Bool_Exp;
};

export type Mutation_RootDelete_Repository_Api_KeysArgs = {
    where: Repository_Api_Keys_Bool_Exp;
};

export type Mutation_RootDelete_Repository_CollaboratorsArgs = {
    where: Repository_Collaborators_Bool_Exp;
};

export type Mutation_RootDelete_Repository_StargazersArgs = {
    where: Repository_Stargazers_Bool_Exp;
};

export type Mutation_RootDelete_Repository_TopicsArgs = {
    where: Repository_Topics_Bool_Exp;
};

export type Mutation_RootDelete_Repository_WatchersArgs = {
    where: Repository_Watchers_Bool_Exp;
};

export type Mutation_RootDelete_Review_RequestsArgs = {
    where: Review_Requests_Bool_Exp;
};

export type Mutation_RootDelete_Review_Thread_CommentsArgs = {
    where: Review_Thread_Comments_Bool_Exp;
};

export type Mutation_RootDelete_Review_ThreadsArgs = {
    where: Review_Threads_Bool_Exp;
};

export type Mutation_RootDelete_Topic_StargazersArgs = {
    where: Topic_Stargazers_Bool_Exp;
};

export type Mutation_RootDelete_TopicsArgs = {
    where: Topics_Bool_Exp;
};

export type Mutation_RootDelete_UsersArgs = {
    where: Users_Bool_Exp;
};

export type Mutation_RootInsert_Branch_CommitsArgs = {
    objects: Array<Branch_Commits_Insert_Input>;
    on_conflict?: Maybe<Branch_Commits_On_Conflict>;
};

export type Mutation_RootInsert_BranchesArgs = {
    objects: Array<Branches_Insert_Input>;
    on_conflict?: Maybe<Branches_On_Conflict>;
};

export type Mutation_RootInsert_CommentsArgs = {
    objects: Array<Comments_Insert_Input>;
    on_conflict?: Maybe<Comments_On_Conflict>;
};

export type Mutation_RootInsert_CommitsArgs = {
    objects: Array<Commits_Insert_Input>;
    on_conflict?: Maybe<Commits_On_Conflict>;
};

export type Mutation_RootInsert_File_DiffsArgs = {
    objects: Array<File_Diffs_Insert_Input>;
    on_conflict?: Maybe<File_Diffs_On_Conflict>;
};

export type Mutation_RootInsert_GamesArgs = {
    objects: Array<Games_Insert_Input>;
    on_conflict?: Maybe<Games_On_Conflict>;
};

export type Mutation_RootInsert_Github_UserArgs = {
    objects: Array<Github_User_Insert_Input>;
    on_conflict?: Maybe<Github_User_On_Conflict>;
};

export type Mutation_RootInsert_Github_User_FollowingArgs = {
    objects: Array<Github_User_Following_Insert_Input>;
    on_conflict?: Maybe<Github_User_Following_On_Conflict>;
};

export type Mutation_RootInsert_Github_Webhook_EventsArgs = {
    objects: Array<Github_Webhook_Events_Insert_Input>;
    on_conflict?: Maybe<Github_Webhook_Events_On_Conflict>;
};

export type Mutation_RootInsert_Issue_AssigneesArgs = {
    objects: Array<Issue_Assignees_Insert_Input>;
    on_conflict?: Maybe<Issue_Assignees_On_Conflict>;
};

export type Mutation_RootInsert_Issue_CommentsArgs = {
    objects: Array<Issue_Comments_Insert_Input>;
    on_conflict?: Maybe<Issue_Comments_On_Conflict>;
};

export type Mutation_RootInsert_Issue_LabelsArgs = {
    objects: Array<Issue_Labels_Insert_Input>;
    on_conflict?: Maybe<Issue_Labels_On_Conflict>;
};

export type Mutation_RootInsert_Issue_ParticipantsArgs = {
    objects: Array<Issue_Participants_Insert_Input>;
    on_conflict?: Maybe<Issue_Participants_On_Conflict>;
};

export type Mutation_RootInsert_IssuesArgs = {
    objects: Array<Issues_Insert_Input>;
    on_conflict?: Maybe<Issues_On_Conflict>;
};

export type Mutation_RootInsert_LabelsArgs = {
    objects: Array<Labels_Insert_Input>;
    on_conflict?: Maybe<Labels_On_Conflict>;
};

export type Mutation_RootInsert_Pull_Request_AssigneesArgs = {
    objects: Array<Pull_Request_Assignees_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Assignees_On_Conflict>;
};

export type Mutation_RootInsert_Pull_Request_CommentsArgs = {
    objects: Array<Pull_Request_Comments_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Comments_On_Conflict>;
};

export type Mutation_RootInsert_Pull_Request_CommitsArgs = {
    objects: Array<Pull_Request_Commits_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Commits_On_Conflict>;
};

export type Mutation_RootInsert_Pull_Request_LabelsArgs = {
    objects: Array<Pull_Request_Labels_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Labels_On_Conflict>;
};

export type Mutation_RootInsert_Pull_Request_Review_CommentsArgs = {
    objects: Array<Pull_Request_Review_Comments_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Review_Comments_On_Conflict>;
};

export type Mutation_RootInsert_Pull_Request_Review_CommitsArgs = {
    objects: Array<Pull_Request_Review_Commits_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Review_Commits_On_Conflict>;
};

export type Mutation_RootInsert_Pull_Request_ReviewsArgs = {
    objects: Array<Pull_Request_Reviews_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Reviews_On_Conflict>;
};

export type Mutation_RootInsert_Pull_RequestsArgs = {
    objects: Array<Pull_Requests_Insert_Input>;
    on_conflict?: Maybe<Pull_Requests_On_Conflict>;
};

export type Mutation_RootInsert_Related_TopicsArgs = {
    objects: Array<Related_Topics_Insert_Input>;
    on_conflict?: Maybe<Related_Topics_On_Conflict>;
};

export type Mutation_RootInsert_RepositoriesArgs = {
    objects: Array<Repositories_Insert_Input>;
    on_conflict?: Maybe<Repositories_On_Conflict>;
};

export type Mutation_RootInsert_Repository_Api_KeysArgs = {
    objects: Array<Repository_Api_Keys_Insert_Input>;
    on_conflict?: Maybe<Repository_Api_Keys_On_Conflict>;
};

export type Mutation_RootInsert_Repository_CollaboratorsArgs = {
    objects: Array<Repository_Collaborators_Insert_Input>;
    on_conflict?: Maybe<Repository_Collaborators_On_Conflict>;
};

export type Mutation_RootInsert_Repository_StargazersArgs = {
    objects: Array<Repository_Stargazers_Insert_Input>;
    on_conflict?: Maybe<Repository_Stargazers_On_Conflict>;
};

export type Mutation_RootInsert_Repository_TopicsArgs = {
    objects: Array<Repository_Topics_Insert_Input>;
    on_conflict?: Maybe<Repository_Topics_On_Conflict>;
};

export type Mutation_RootInsert_Repository_WatchersArgs = {
    objects: Array<Repository_Watchers_Insert_Input>;
    on_conflict?: Maybe<Repository_Watchers_On_Conflict>;
};

export type Mutation_RootInsert_Review_RequestsArgs = {
    objects: Array<Review_Requests_Insert_Input>;
    on_conflict?: Maybe<Review_Requests_On_Conflict>;
};

export type Mutation_RootInsert_Review_Thread_CommentsArgs = {
    objects: Array<Review_Thread_Comments_Insert_Input>;
    on_conflict?: Maybe<Review_Thread_Comments_On_Conflict>;
};

export type Mutation_RootInsert_Review_ThreadsArgs = {
    objects: Array<Review_Threads_Insert_Input>;
    on_conflict?: Maybe<Review_Threads_On_Conflict>;
};

export type Mutation_RootInsert_Topic_StargazersArgs = {
    objects: Array<Topic_Stargazers_Insert_Input>;
    on_conflict?: Maybe<Topic_Stargazers_On_Conflict>;
};

export type Mutation_RootInsert_TopicsArgs = {
    objects: Array<Topics_Insert_Input>;
    on_conflict?: Maybe<Topics_On_Conflict>;
};

export type Mutation_RootInsert_UsersArgs = {
    objects: Array<Users_Insert_Input>;
    on_conflict?: Maybe<Users_On_Conflict>;
};

export type Mutation_RootUpdate_Branch_CommitsArgs = {
    _set?: Maybe<Branch_Commits_Set_Input>;
    where: Branch_Commits_Bool_Exp;
};

export type Mutation_RootUpdate_BranchesArgs = {
    _set?: Maybe<Branches_Set_Input>;
    where: Branches_Bool_Exp;
};

export type Mutation_RootUpdate_CommentsArgs = {
    _set?: Maybe<Comments_Set_Input>;
    where: Comments_Bool_Exp;
};

export type Mutation_RootUpdate_CommitsArgs = {
    _inc?: Maybe<Commits_Inc_Input>;
    _set?: Maybe<Commits_Set_Input>;
    where: Commits_Bool_Exp;
};

export type Mutation_RootUpdate_File_DiffsArgs = {
    _inc?: Maybe<File_Diffs_Inc_Input>;
    _set?: Maybe<File_Diffs_Set_Input>;
    where: File_Diffs_Bool_Exp;
};

export type Mutation_RootUpdate_GamesArgs = {
    _set?: Maybe<Games_Set_Input>;
    where: Games_Bool_Exp;
};

export type Mutation_RootUpdate_Github_UserArgs = {
    _set?: Maybe<Github_User_Set_Input>;
    where: Github_User_Bool_Exp;
};

export type Mutation_RootUpdate_Github_User_FollowingArgs = {
    _set?: Maybe<Github_User_Following_Set_Input>;
    where: Github_User_Following_Bool_Exp;
};

export type Mutation_RootUpdate_Github_Webhook_EventsArgs = {
    _set?: Maybe<Github_Webhook_Events_Set_Input>;
    where: Github_Webhook_Events_Bool_Exp;
};

export type Mutation_RootUpdate_Issue_AssigneesArgs = {
    _set?: Maybe<Issue_Assignees_Set_Input>;
    where: Issue_Assignees_Bool_Exp;
};

export type Mutation_RootUpdate_Issue_CommentsArgs = {
    _set?: Maybe<Issue_Comments_Set_Input>;
    where: Issue_Comments_Bool_Exp;
};

export type Mutation_RootUpdate_Issue_LabelsArgs = {
    _set?: Maybe<Issue_Labels_Set_Input>;
    where: Issue_Labels_Bool_Exp;
};

export type Mutation_RootUpdate_Issue_ParticipantsArgs = {
    _set?: Maybe<Issue_Participants_Set_Input>;
    where: Issue_Participants_Bool_Exp;
};

export type Mutation_RootUpdate_IssuesArgs = {
    _inc?: Maybe<Issues_Inc_Input>;
    _set?: Maybe<Issues_Set_Input>;
    where: Issues_Bool_Exp;
};

export type Mutation_RootUpdate_LabelsArgs = {
    _set?: Maybe<Labels_Set_Input>;
    where: Labels_Bool_Exp;
};

export type Mutation_RootUpdate_Pull_Request_AssigneesArgs = {
    _set?: Maybe<Pull_Request_Assignees_Set_Input>;
    where: Pull_Request_Assignees_Bool_Exp;
};

export type Mutation_RootUpdate_Pull_Request_CommentsArgs = {
    _set?: Maybe<Pull_Request_Comments_Set_Input>;
    where: Pull_Request_Comments_Bool_Exp;
};

export type Mutation_RootUpdate_Pull_Request_CommitsArgs = {
    _set?: Maybe<Pull_Request_Commits_Set_Input>;
    where: Pull_Request_Commits_Bool_Exp;
};

export type Mutation_RootUpdate_Pull_Request_LabelsArgs = {
    _set?: Maybe<Pull_Request_Labels_Set_Input>;
    where: Pull_Request_Labels_Bool_Exp;
};

export type Mutation_RootUpdate_Pull_Request_Review_CommentsArgs = {
    _set?: Maybe<Pull_Request_Review_Comments_Set_Input>;
    where: Pull_Request_Review_Comments_Bool_Exp;
};

export type Mutation_RootUpdate_Pull_Request_Review_CommitsArgs = {
    _set?: Maybe<Pull_Request_Review_Commits_Set_Input>;
    where: Pull_Request_Review_Commits_Bool_Exp;
};

export type Mutation_RootUpdate_Pull_Request_ReviewsArgs = {
    _set?: Maybe<Pull_Request_Reviews_Set_Input>;
    where: Pull_Request_Reviews_Bool_Exp;
};

export type Mutation_RootUpdate_Pull_RequestsArgs = {
    _inc?: Maybe<Pull_Requests_Inc_Input>;
    _set?: Maybe<Pull_Requests_Set_Input>;
    where: Pull_Requests_Bool_Exp;
};

export type Mutation_RootUpdate_Related_TopicsArgs = {
    _set?: Maybe<Related_Topics_Set_Input>;
    where: Related_Topics_Bool_Exp;
};

export type Mutation_RootUpdate_RepositoriesArgs = {
    _set?: Maybe<Repositories_Set_Input>;
    where: Repositories_Bool_Exp;
};

export type Mutation_RootUpdate_Repository_Api_KeysArgs = {
    _set?: Maybe<Repository_Api_Keys_Set_Input>;
    where: Repository_Api_Keys_Bool_Exp;
};

export type Mutation_RootUpdate_Repository_CollaboratorsArgs = {
    _set?: Maybe<Repository_Collaborators_Set_Input>;
    where: Repository_Collaborators_Bool_Exp;
};

export type Mutation_RootUpdate_Repository_StargazersArgs = {
    _set?: Maybe<Repository_Stargazers_Set_Input>;
    where: Repository_Stargazers_Bool_Exp;
};

export type Mutation_RootUpdate_Repository_TopicsArgs = {
    _set?: Maybe<Repository_Topics_Set_Input>;
    where: Repository_Topics_Bool_Exp;
};

export type Mutation_RootUpdate_Repository_WatchersArgs = {
    _set?: Maybe<Repository_Watchers_Set_Input>;
    where: Repository_Watchers_Bool_Exp;
};

export type Mutation_RootUpdate_Review_RequestsArgs = {
    _set?: Maybe<Review_Requests_Set_Input>;
    where: Review_Requests_Bool_Exp;
};

export type Mutation_RootUpdate_Review_Thread_CommentsArgs = {
    _set?: Maybe<Review_Thread_Comments_Set_Input>;
    where: Review_Thread_Comments_Bool_Exp;
};

export type Mutation_RootUpdate_Review_ThreadsArgs = {
    _set?: Maybe<Review_Threads_Set_Input>;
    where: Review_Threads_Bool_Exp;
};

export type Mutation_RootUpdate_Topic_StargazersArgs = {
    _set?: Maybe<Topic_Stargazers_Set_Input>;
    where: Topic_Stargazers_Bool_Exp;
};

export type Mutation_RootUpdate_TopicsArgs = {
    _set?: Maybe<Topics_Set_Input>;
    where: Topics_Bool_Exp;
};

export type Mutation_RootUpdate_UsersArgs = {
    _set?: Maybe<Users_Set_Input>;
    where: Users_Bool_Exp;
};

export enum Order_By {
    Asc = 'asc',
    AscNullsFirst = 'asc_nulls_first',
    AscNullsLast = 'asc_nulls_last',
    Desc = 'desc',
    DescNullsFirst = 'desc_nulls_first',
    DescNullsLast = 'desc_nulls_last'
}

export type Pull_Request_Assignees = {
    __typename?: 'pull_request_assignees';
    github_user: Github_User;
    github_user_id: Scalars['uuid'];
    pull_request: Pull_Requests;
    pull_request_id: Scalars['uuid'];
};

export type Pull_Request_Assignees_Aggregate = {
    __typename?: 'pull_request_assignees_aggregate';
    aggregate?: Maybe<Pull_Request_Assignees_Aggregate_Fields>;
    nodes: Array<Pull_Request_Assignees>;
};

export type Pull_Request_Assignees_Aggregate_Fields = {
    __typename?: 'pull_request_assignees_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Pull_Request_Assignees_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Pull_Request_Assignees_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Pull_Request_Assignees_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Pull_Request_Assignees_Arr_Rel_Insert_Input = {
    data: Array<Pull_Request_Assignees_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Assignees_On_Conflict>;
};

export type Pull_Request_Assignees_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Pull_Request_Assignees_Bool_Exp>>>;
    _not?: Maybe<Pull_Request_Assignees_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Pull_Request_Assignees_Bool_Exp>>>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    github_user_id?: Maybe<Uuid_Comparison_Exp>;
    pull_request?: Maybe<Pull_Requests_Bool_Exp>;
    pull_request_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Pull_Request_Assignees_Constraint {
    PullRequestAssigneesPkey = 'pull_request_assignees_pkey'
}

export type Pull_Request_Assignees_Insert_Input = {
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    github_user_id?: Maybe<Scalars['uuid']>;
    pull_request?: Maybe<Pull_Requests_Obj_Rel_Insert_Input>;
    pull_request_id?: Maybe<Scalars['uuid']>;
};

export type Pull_Request_Assignees_Mutation_Response = {
    __typename?: 'pull_request_assignees_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Pull_Request_Assignees>;
};

export type Pull_Request_Assignees_Obj_Rel_Insert_Input = {
    data: Pull_Request_Assignees_Insert_Input;
    on_conflict?: Maybe<Pull_Request_Assignees_On_Conflict>;
};

export type Pull_Request_Assignees_On_Conflict = {
    constraint: Pull_Request_Assignees_Constraint;
    update_columns: Array<Pull_Request_Assignees_Update_Column>;
    where?: Maybe<Pull_Request_Assignees_Bool_Exp>;
};

export type Pull_Request_Assignees_Order_By = {
    github_user?: Maybe<Github_User_Order_By>;
    github_user_id?: Maybe<Order_By>;
    pull_request?: Maybe<Pull_Requests_Order_By>;
    pull_request_id?: Maybe<Order_By>;
};

export enum Pull_Request_Assignees_Select_Column {
    GithubUserId = 'github_user_id',
    PullRequestId = 'pull_request_id'
}

export type Pull_Request_Assignees_Set_Input = {
    github_user_id?: Maybe<Scalars['uuid']>;
    pull_request_id?: Maybe<Scalars['uuid']>;
};

export enum Pull_Request_Assignees_Update_Column {
    GithubUserId = 'github_user_id',
    PullRequestId = 'pull_request_id'
}

export type Pull_Request_Comments = {
    __typename?: 'pull_request_comments';
    comment: Comments;
    comment_id: Scalars['uuid'];
    pull_request: Pull_Requests;
    pull_request_id: Scalars['uuid'];
};

export type Pull_Request_Comments_Aggregate = {
    __typename?: 'pull_request_comments_aggregate';
    aggregate?: Maybe<Pull_Request_Comments_Aggregate_Fields>;
    nodes: Array<Pull_Request_Comments>;
};

export type Pull_Request_Comments_Aggregate_Fields = {
    __typename?: 'pull_request_comments_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Pull_Request_Comments_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Pull_Request_Comments_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Pull_Request_Comments_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Pull_Request_Comments_Arr_Rel_Insert_Input = {
    data: Array<Pull_Request_Comments_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Comments_On_Conflict>;
};

export type Pull_Request_Comments_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Pull_Request_Comments_Bool_Exp>>>;
    _not?: Maybe<Pull_Request_Comments_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Pull_Request_Comments_Bool_Exp>>>;
    comment?: Maybe<Comments_Bool_Exp>;
    comment_id?: Maybe<Uuid_Comparison_Exp>;
    pull_request?: Maybe<Pull_Requests_Bool_Exp>;
    pull_request_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Pull_Request_Comments_Constraint {
    PullRequestCommentsPkey = 'pull_request_comments_pkey'
}

export type Pull_Request_Comments_Insert_Input = {
    comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
    comment_id?: Maybe<Scalars['uuid']>;
    pull_request?: Maybe<Pull_Requests_Obj_Rel_Insert_Input>;
    pull_request_id?: Maybe<Scalars['uuid']>;
};

export type Pull_Request_Comments_Mutation_Response = {
    __typename?: 'pull_request_comments_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Pull_Request_Comments>;
};

export type Pull_Request_Comments_Obj_Rel_Insert_Input = {
    data: Pull_Request_Comments_Insert_Input;
    on_conflict?: Maybe<Pull_Request_Comments_On_Conflict>;
};

export type Pull_Request_Comments_On_Conflict = {
    constraint: Pull_Request_Comments_Constraint;
    update_columns: Array<Pull_Request_Comments_Update_Column>;
    where?: Maybe<Pull_Request_Comments_Bool_Exp>;
};

export type Pull_Request_Comments_Order_By = {
    comment?: Maybe<Comments_Order_By>;
    comment_id?: Maybe<Order_By>;
    pull_request?: Maybe<Pull_Requests_Order_By>;
    pull_request_id?: Maybe<Order_By>;
};

export enum Pull_Request_Comments_Select_Column {
    CommentId = 'comment_id',
    PullRequestId = 'pull_request_id'
}

export type Pull_Request_Comments_Set_Input = {
    comment_id?: Maybe<Scalars['uuid']>;
    pull_request_id?: Maybe<Scalars['uuid']>;
};

export enum Pull_Request_Comments_Update_Column {
    CommentId = 'comment_id',
    PullRequestId = 'pull_request_id'
}

export type Pull_Request_Commits = {
    __typename?: 'pull_request_commits';
    commit: Commits;
    commit_id: Scalars['uuid'];
    pull_request: Pull_Requests;
    pull_request_id: Scalars['uuid'];
};

export type Pull_Request_Commits_Aggregate = {
    __typename?: 'pull_request_commits_aggregate';
    aggregate?: Maybe<Pull_Request_Commits_Aggregate_Fields>;
    nodes: Array<Pull_Request_Commits>;
};

export type Pull_Request_Commits_Aggregate_Fields = {
    __typename?: 'pull_request_commits_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Pull_Request_Commits_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Pull_Request_Commits_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Pull_Request_Commits_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Pull_Request_Commits_Arr_Rel_Insert_Input = {
    data: Array<Pull_Request_Commits_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Commits_On_Conflict>;
};

export type Pull_Request_Commits_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Pull_Request_Commits_Bool_Exp>>>;
    _not?: Maybe<Pull_Request_Commits_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Pull_Request_Commits_Bool_Exp>>>;
    commit?: Maybe<Commits_Bool_Exp>;
    commit_id?: Maybe<Uuid_Comparison_Exp>;
    pull_request?: Maybe<Pull_Requests_Bool_Exp>;
    pull_request_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Pull_Request_Commits_Constraint {
    PullRequestCommitsPkey = 'pull_request_commits_pkey'
}

export type Pull_Request_Commits_Insert_Input = {
    commit?: Maybe<Commits_Obj_Rel_Insert_Input>;
    commit_id?: Maybe<Scalars['uuid']>;
    pull_request?: Maybe<Pull_Requests_Obj_Rel_Insert_Input>;
    pull_request_id?: Maybe<Scalars['uuid']>;
};

export type Pull_Request_Commits_Mutation_Response = {
    __typename?: 'pull_request_commits_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Pull_Request_Commits>;
};

export type Pull_Request_Commits_Obj_Rel_Insert_Input = {
    data: Pull_Request_Commits_Insert_Input;
    on_conflict?: Maybe<Pull_Request_Commits_On_Conflict>;
};

export type Pull_Request_Commits_On_Conflict = {
    constraint: Pull_Request_Commits_Constraint;
    update_columns: Array<Pull_Request_Commits_Update_Column>;
    where?: Maybe<Pull_Request_Commits_Bool_Exp>;
};

export type Pull_Request_Commits_Order_By = {
    commit?: Maybe<Commits_Order_By>;
    commit_id?: Maybe<Order_By>;
    pull_request?: Maybe<Pull_Requests_Order_By>;
    pull_request_id?: Maybe<Order_By>;
};

export enum Pull_Request_Commits_Select_Column {
    CommitId = 'commit_id',
    PullRequestId = 'pull_request_id'
}

export type Pull_Request_Commits_Set_Input = {
    commit_id?: Maybe<Scalars['uuid']>;
    pull_request_id?: Maybe<Scalars['uuid']>;
};

export enum Pull_Request_Commits_Update_Column {
    CommitId = 'commit_id',
    PullRequestId = 'pull_request_id'
}

export type Pull_Request_Labels = {
    __typename?: 'pull_request_labels';
    label: Labels;
    label_id: Scalars['uuid'];
    pull_request: Pull_Requests;
    pull_request_id: Scalars['uuid'];
};

export type Pull_Request_Labels_Aggregate = {
    __typename?: 'pull_request_labels_aggregate';
    aggregate?: Maybe<Pull_Request_Labels_Aggregate_Fields>;
    nodes: Array<Pull_Request_Labels>;
};

export type Pull_Request_Labels_Aggregate_Fields = {
    __typename?: 'pull_request_labels_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Pull_Request_Labels_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Pull_Request_Labels_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Pull_Request_Labels_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Pull_Request_Labels_Arr_Rel_Insert_Input = {
    data: Array<Pull_Request_Labels_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Labels_On_Conflict>;
};

export type Pull_Request_Labels_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Pull_Request_Labels_Bool_Exp>>>;
    _not?: Maybe<Pull_Request_Labels_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Pull_Request_Labels_Bool_Exp>>>;
    label?: Maybe<Labels_Bool_Exp>;
    label_id?: Maybe<Uuid_Comparison_Exp>;
    pull_request?: Maybe<Pull_Requests_Bool_Exp>;
    pull_request_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Pull_Request_Labels_Constraint {
    PullRequestLabelsPkey = 'pull_request_labels_pkey'
}

export type Pull_Request_Labels_Insert_Input = {
    label?: Maybe<Labels_Obj_Rel_Insert_Input>;
    label_id?: Maybe<Scalars['uuid']>;
    pull_request?: Maybe<Pull_Requests_Obj_Rel_Insert_Input>;
    pull_request_id?: Maybe<Scalars['uuid']>;
};

export type Pull_Request_Labels_Mutation_Response = {
    __typename?: 'pull_request_labels_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Pull_Request_Labels>;
};

export type Pull_Request_Labels_Obj_Rel_Insert_Input = {
    data: Pull_Request_Labels_Insert_Input;
    on_conflict?: Maybe<Pull_Request_Labels_On_Conflict>;
};

export type Pull_Request_Labels_On_Conflict = {
    constraint: Pull_Request_Labels_Constraint;
    update_columns: Array<Pull_Request_Labels_Update_Column>;
    where?: Maybe<Pull_Request_Labels_Bool_Exp>;
};

export type Pull_Request_Labels_Order_By = {
    label?: Maybe<Labels_Order_By>;
    label_id?: Maybe<Order_By>;
    pull_request?: Maybe<Pull_Requests_Order_By>;
    pull_request_id?: Maybe<Order_By>;
};

export enum Pull_Request_Labels_Select_Column {
    LabelId = 'label_id',
    PullRequestId = 'pull_request_id'
}

export type Pull_Request_Labels_Set_Input = {
    label_id?: Maybe<Scalars['uuid']>;
    pull_request_id?: Maybe<Scalars['uuid']>;
};

export enum Pull_Request_Labels_Update_Column {
    LabelId = 'label_id',
    PullRequestId = 'pull_request_id'
}

export type Pull_Request_Review_Comments = {
    __typename?: 'pull_request_review_comments';
    comment: Comments;
    comment_id: Scalars['uuid'];
    pull_request_review: Pull_Request_Reviews;
    pull_request_review_id: Scalars['uuid'];
};

export type Pull_Request_Review_Comments_Aggregate = {
    __typename?: 'pull_request_review_comments_aggregate';
    aggregate?: Maybe<Pull_Request_Review_Comments_Aggregate_Fields>;
    nodes: Array<Pull_Request_Review_Comments>;
};

export type Pull_Request_Review_Comments_Aggregate_Fields = {
    __typename?: 'pull_request_review_comments_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Pull_Request_Review_Comments_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Pull_Request_Review_Comments_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Pull_Request_Review_Comments_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Pull_Request_Review_Comments_Arr_Rel_Insert_Input = {
    data: Array<Pull_Request_Review_Comments_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Review_Comments_On_Conflict>;
};

export type Pull_Request_Review_Comments_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Pull_Request_Review_Comments_Bool_Exp>>>;
    _not?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Pull_Request_Review_Comments_Bool_Exp>>>;
    comment?: Maybe<Comments_Bool_Exp>;
    comment_id?: Maybe<Uuid_Comparison_Exp>;
    pull_request_review?: Maybe<Pull_Request_Reviews_Bool_Exp>;
    pull_request_review_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Pull_Request_Review_Comments_Constraint {
    PullRequestReviewCommentsPkey = 'pull_request_review_comments_pkey'
}

export type Pull_Request_Review_Comments_Insert_Input = {
    comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
    comment_id?: Maybe<Scalars['uuid']>;
    pull_request_review?: Maybe<Pull_Request_Reviews_Obj_Rel_Insert_Input>;
    pull_request_review_id?: Maybe<Scalars['uuid']>;
};

export type Pull_Request_Review_Comments_Mutation_Response = {
    __typename?: 'pull_request_review_comments_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Pull_Request_Review_Comments>;
};

export type Pull_Request_Review_Comments_Obj_Rel_Insert_Input = {
    data: Pull_Request_Review_Comments_Insert_Input;
    on_conflict?: Maybe<Pull_Request_Review_Comments_On_Conflict>;
};

export type Pull_Request_Review_Comments_On_Conflict = {
    constraint: Pull_Request_Review_Comments_Constraint;
    update_columns: Array<Pull_Request_Review_Comments_Update_Column>;
    where?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
};

export type Pull_Request_Review_Comments_Order_By = {
    comment?: Maybe<Comments_Order_By>;
    comment_id?: Maybe<Order_By>;
    pull_request_review?: Maybe<Pull_Request_Reviews_Order_By>;
    pull_request_review_id?: Maybe<Order_By>;
};

export enum Pull_Request_Review_Comments_Select_Column {
    CommentId = 'comment_id',
    PullRequestReviewId = 'pull_request_review_id'
}

export type Pull_Request_Review_Comments_Set_Input = {
    comment_id?: Maybe<Scalars['uuid']>;
    pull_request_review_id?: Maybe<Scalars['uuid']>;
};

export enum Pull_Request_Review_Comments_Update_Column {
    CommentId = 'comment_id',
    PullRequestReviewId = 'pull_request_review_id'
}

export type Pull_Request_Review_Commits = {
    __typename?: 'pull_request_review_commits';
    commit: Commits;
    commit_id: Scalars['uuid'];
    pull_request_review: Pull_Request_Reviews;
    pull_request_review_id: Scalars['uuid'];
};

export type Pull_Request_Review_Commits_Aggregate = {
    __typename?: 'pull_request_review_commits_aggregate';
    aggregate?: Maybe<Pull_Request_Review_Commits_Aggregate_Fields>;
    nodes: Array<Pull_Request_Review_Commits>;
};

export type Pull_Request_Review_Commits_Aggregate_Fields = {
    __typename?: 'pull_request_review_commits_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Pull_Request_Review_Commits_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Pull_Request_Review_Commits_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Pull_Request_Review_Commits_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Pull_Request_Review_Commits_Arr_Rel_Insert_Input = {
    data: Array<Pull_Request_Review_Commits_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Review_Commits_On_Conflict>;
};

export type Pull_Request_Review_Commits_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Pull_Request_Review_Commits_Bool_Exp>>>;
    _not?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Pull_Request_Review_Commits_Bool_Exp>>>;
    commit?: Maybe<Commits_Bool_Exp>;
    commit_id?: Maybe<Uuid_Comparison_Exp>;
    pull_request_review?: Maybe<Pull_Request_Reviews_Bool_Exp>;
    pull_request_review_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Pull_Request_Review_Commits_Constraint {
    PullRequestReviewCommitsPkey = 'pull_request_review_commits_pkey'
}

export type Pull_Request_Review_Commits_Insert_Input = {
    commit?: Maybe<Commits_Obj_Rel_Insert_Input>;
    commit_id?: Maybe<Scalars['uuid']>;
    pull_request_review?: Maybe<Pull_Request_Reviews_Obj_Rel_Insert_Input>;
    pull_request_review_id?: Maybe<Scalars['uuid']>;
};

export type Pull_Request_Review_Commits_Mutation_Response = {
    __typename?: 'pull_request_review_commits_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Pull_Request_Review_Commits>;
};

export type Pull_Request_Review_Commits_Obj_Rel_Insert_Input = {
    data: Pull_Request_Review_Commits_Insert_Input;
    on_conflict?: Maybe<Pull_Request_Review_Commits_On_Conflict>;
};

export type Pull_Request_Review_Commits_On_Conflict = {
    constraint: Pull_Request_Review_Commits_Constraint;
    update_columns: Array<Pull_Request_Review_Commits_Update_Column>;
    where?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
};

export type Pull_Request_Review_Commits_Order_By = {
    commit?: Maybe<Commits_Order_By>;
    commit_id?: Maybe<Order_By>;
    pull_request_review?: Maybe<Pull_Request_Reviews_Order_By>;
    pull_request_review_id?: Maybe<Order_By>;
};

export enum Pull_Request_Review_Commits_Select_Column {
    CommitId = 'commit_id',
    PullRequestReviewId = 'pull_request_review_id'
}

export type Pull_Request_Review_Commits_Set_Input = {
    commit_id?: Maybe<Scalars['uuid']>;
    pull_request_review_id?: Maybe<Scalars['uuid']>;
};

export enum Pull_Request_Review_Commits_Update_Column {
    CommitId = 'commit_id',
    PullRequestReviewId = 'pull_request_review_id'
}

export type Pull_Request_Reviews = {
    __typename?: 'pull_request_reviews';
    author_id: Scalars['uuid'];
    body_text: Scalars['String'];
    created_at: Scalars['timestamptz'];
    created_at_external: Scalars['timetz'];
    github_user: Github_User;
    id: Scalars['uuid'];
    last_edited_at: Scalars['timetz'];
    published_at?: Maybe<Scalars['timetz']>;
    pull_request: Pull_Requests;
    pull_request_id: Scalars['uuid'];
    pull_request_review_comments: Array<Pull_Request_Review_Comments>;
    pull_request_review_comments_aggregate: Pull_Request_Review_Comments_Aggregate;
    pull_request_review_commits: Array<Pull_Request_Review_Commits>;
    pull_request_review_commits_aggregate: Pull_Request_Review_Commits_Aggregate;
    state: Scalars['String'];
    submitted_at: Scalars['timetz'];
    updated_at: Scalars['timestamptz'];
    updated_at_external: Scalars['timetz'];
    url: Scalars['String'];
};

export type Pull_Request_ReviewsPull_Request_Review_CommentsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
};

export type Pull_Request_ReviewsPull_Request_Review_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
};

export type Pull_Request_ReviewsPull_Request_Review_CommitsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
};

export type Pull_Request_ReviewsPull_Request_Review_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
};

export type Pull_Request_Reviews_Aggregate = {
    __typename?: 'pull_request_reviews_aggregate';
    aggregate?: Maybe<Pull_Request_Reviews_Aggregate_Fields>;
    nodes: Array<Pull_Request_Reviews>;
};

export type Pull_Request_Reviews_Aggregate_Fields = {
    __typename?: 'pull_request_reviews_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Pull_Request_Reviews_Max_Fields>;
    min?: Maybe<Pull_Request_Reviews_Min_Fields>;
};

export type Pull_Request_Reviews_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Pull_Request_Reviews_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Pull_Request_Reviews_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Pull_Request_Reviews_Max_Order_By>;
    min?: Maybe<Pull_Request_Reviews_Min_Order_By>;
};

export type Pull_Request_Reviews_Arr_Rel_Insert_Input = {
    data: Array<Pull_Request_Reviews_Insert_Input>;
    on_conflict?: Maybe<Pull_Request_Reviews_On_Conflict>;
};

export type Pull_Request_Reviews_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Pull_Request_Reviews_Bool_Exp>>>;
    _not?: Maybe<Pull_Request_Reviews_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Pull_Request_Reviews_Bool_Exp>>>;
    author_id?: Maybe<Uuid_Comparison_Exp>;
    body_text?: Maybe<String_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    created_at_external?: Maybe<Timetz_Comparison_Exp>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    last_edited_at?: Maybe<Timetz_Comparison_Exp>;
    published_at?: Maybe<Timetz_Comparison_Exp>;
    pull_request?: Maybe<Pull_Requests_Bool_Exp>;
    pull_request_id?: Maybe<Uuid_Comparison_Exp>;
    pull_request_review_comments?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
    pull_request_review_commits?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
    state?: Maybe<String_Comparison_Exp>;
    submitted_at?: Maybe<Timetz_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    updated_at_external?: Maybe<Timetz_Comparison_Exp>;
    url?: Maybe<String_Comparison_Exp>;
};

export enum Pull_Request_Reviews_Constraint {
    PullRequestReviewsPkey = 'pull_request_reviews_pkey'
}

export type Pull_Request_Reviews_Insert_Input = {
    author_id?: Maybe<Scalars['uuid']>;
    body_text?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    last_edited_at?: Maybe<Scalars['timetz']>;
    published_at?: Maybe<Scalars['timetz']>;
    pull_request?: Maybe<Pull_Requests_Obj_Rel_Insert_Input>;
    pull_request_id?: Maybe<Scalars['uuid']>;
    pull_request_review_comments?: Maybe<
        Pull_Request_Review_Comments_Arr_Rel_Insert_Input
    >;
    pull_request_review_commits?: Maybe<
        Pull_Request_Review_Commits_Arr_Rel_Insert_Input
    >;
    state?: Maybe<Scalars['String']>;
    submitted_at?: Maybe<Scalars['timetz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Pull_Request_Reviews_Max_Fields = {
    __typename?: 'pull_request_reviews_max_fields';
    body_text?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    last_edited_at?: Maybe<Scalars['timetz']>;
    published_at?: Maybe<Scalars['timetz']>;
    state?: Maybe<Scalars['String']>;
    submitted_at?: Maybe<Scalars['timetz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Pull_Request_Reviews_Max_Order_By = {
    body_text?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    last_edited_at?: Maybe<Order_By>;
    published_at?: Maybe<Order_By>;
    state?: Maybe<Order_By>;
    submitted_at?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Pull_Request_Reviews_Min_Fields = {
    __typename?: 'pull_request_reviews_min_fields';
    body_text?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    last_edited_at?: Maybe<Scalars['timetz']>;
    published_at?: Maybe<Scalars['timetz']>;
    state?: Maybe<Scalars['String']>;
    submitted_at?: Maybe<Scalars['timetz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Pull_Request_Reviews_Min_Order_By = {
    body_text?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    last_edited_at?: Maybe<Order_By>;
    published_at?: Maybe<Order_By>;
    state?: Maybe<Order_By>;
    submitted_at?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Pull_Request_Reviews_Mutation_Response = {
    __typename?: 'pull_request_reviews_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Pull_Request_Reviews>;
};

export type Pull_Request_Reviews_Obj_Rel_Insert_Input = {
    data: Pull_Request_Reviews_Insert_Input;
    on_conflict?: Maybe<Pull_Request_Reviews_On_Conflict>;
};

export type Pull_Request_Reviews_On_Conflict = {
    constraint: Pull_Request_Reviews_Constraint;
    update_columns: Array<Pull_Request_Reviews_Update_Column>;
    where?: Maybe<Pull_Request_Reviews_Bool_Exp>;
};

export type Pull_Request_Reviews_Order_By = {
    author_id?: Maybe<Order_By>;
    body_text?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    github_user?: Maybe<Github_User_Order_By>;
    id?: Maybe<Order_By>;
    last_edited_at?: Maybe<Order_By>;
    published_at?: Maybe<Order_By>;
    pull_request?: Maybe<Pull_Requests_Order_By>;
    pull_request_id?: Maybe<Order_By>;
    pull_request_review_comments_aggregate?: Maybe<
        Pull_Request_Review_Comments_Aggregate_Order_By
    >;
    pull_request_review_commits_aggregate?: Maybe<
        Pull_Request_Review_Commits_Aggregate_Order_By
    >;
    state?: Maybe<Order_By>;
    submitted_at?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export enum Pull_Request_Reviews_Select_Column {
    AuthorId = 'author_id',
    BodyText = 'body_text',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Id = 'id',
    LastEditedAt = 'last_edited_at',
    PublishedAt = 'published_at',
    PullRequestId = 'pull_request_id',
    State = 'state',
    SubmittedAt = 'submitted_at',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external',
    Url = 'url'
}

export type Pull_Request_Reviews_Set_Input = {
    author_id?: Maybe<Scalars['uuid']>;
    body_text?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    id?: Maybe<Scalars['uuid']>;
    last_edited_at?: Maybe<Scalars['timetz']>;
    published_at?: Maybe<Scalars['timetz']>;
    pull_request_id?: Maybe<Scalars['uuid']>;
    state?: Maybe<Scalars['String']>;
    submitted_at?: Maybe<Scalars['timetz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export enum Pull_Request_Reviews_Update_Column {
    AuthorId = 'author_id',
    BodyText = 'body_text',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Id = 'id',
    LastEditedAt = 'last_edited_at',
    PublishedAt = 'published_at',
    PullRequestId = 'pull_request_id',
    State = 'state',
    SubmittedAt = 'submitted_at',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external',
    Url = 'url'
}

export type Pull_Requests = {
    __typename?: 'pull_requests';
    additions: Scalars['Int'];
    body_text: Scalars['String'];
    changed_files: Scalars['Int'];
    closed: Scalars['Boolean'];
    closed_at?: Maybe<Scalars['timetz']>;
    created_at: Scalars['timestamptz'];
    created_by: Scalars['uuid'];
    deletions: Scalars['Int'];
    githubUserByCreatedBy: Github_User;
    github_user?: Maybe<Github_User>;
    id: Scalars['uuid'];
    is_cross_repository: Scalars['Boolean'];
    locked: Scalars['Boolean'];
    merged: Scalars['Boolean'];
    merged_at?: Maybe<Scalars['timetz']>;
    merged_by?: Maybe<Scalars['uuid']>;
    number: Scalars['Int'];
    published_at?: Maybe<Scalars['timetz']>;
    pull_request_assignees: Array<Pull_Request_Assignees>;
    pull_request_assignees_aggregate: Pull_Request_Assignees_Aggregate;
    pull_request_comments: Array<Pull_Request_Comments>;
    pull_request_comments_aggregate: Pull_Request_Comments_Aggregate;
    pull_request_commits: Array<Pull_Request_Commits>;
    pull_request_commits_aggregate: Pull_Request_Commits_Aggregate;
    pull_request_labels: Array<Pull_Request_Labels>;
    pull_request_labels_aggregate: Pull_Request_Labels_Aggregate;
    pull_request_reviews: Array<Pull_Request_Reviews>;
    pull_request_reviews_aggregate: Pull_Request_Reviews_Aggregate;
    review_requests: Array<Review_Requests>;
    review_requests_aggregate: Review_Requests_Aggregate;
    review_threads: Array<Review_Threads>;
    review_threads_aggregate: Review_Threads_Aggregate;
    updated_at: Scalars['timestamptz'];
    updated_at_external: Scalars['timetz'];
};

export type Pull_RequestsPull_Request_AssigneesArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Assignees_Order_By>>;
    where?: Maybe<Pull_Request_Assignees_Bool_Exp>;
};

export type Pull_RequestsPull_Request_Assignees_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Assignees_Order_By>>;
    where?: Maybe<Pull_Request_Assignees_Bool_Exp>;
};

export type Pull_RequestsPull_Request_CommentsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Comments_Bool_Exp>;
};

export type Pull_RequestsPull_Request_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Comments_Bool_Exp>;
};

export type Pull_RequestsPull_Request_CommitsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Commits_Bool_Exp>;
};

export type Pull_RequestsPull_Request_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Commits_Bool_Exp>;
};

export type Pull_RequestsPull_Request_LabelsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Labels_Order_By>>;
    where?: Maybe<Pull_Request_Labels_Bool_Exp>;
};

export type Pull_RequestsPull_Request_Labels_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Labels_Order_By>>;
    where?: Maybe<Pull_Request_Labels_Bool_Exp>;
};

export type Pull_RequestsPull_Request_ReviewsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Reviews_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Reviews_Order_By>>;
    where?: Maybe<Pull_Request_Reviews_Bool_Exp>;
};

export type Pull_RequestsPull_Request_Reviews_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Reviews_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Reviews_Order_By>>;
    where?: Maybe<Pull_Request_Reviews_Bool_Exp>;
};

export type Pull_RequestsReview_RequestsArgs = {
    distinct_on?: Maybe<Array<Review_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Requests_Order_By>>;
    where?: Maybe<Review_Requests_Bool_Exp>;
};

export type Pull_RequestsReview_Requests_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Requests_Order_By>>;
    where?: Maybe<Review_Requests_Bool_Exp>;
};

export type Pull_RequestsReview_ThreadsArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Pull_RequestsReview_Threads_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Pull_Requests_Aggregate = {
    __typename?: 'pull_requests_aggregate';
    aggregate?: Maybe<Pull_Requests_Aggregate_Fields>;
    nodes: Array<Pull_Requests>;
};

export type Pull_Requests_Aggregate_Fields = {
    __typename?: 'pull_requests_aggregate_fields';
    avg?: Maybe<Pull_Requests_Avg_Fields>;
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Pull_Requests_Max_Fields>;
    min?: Maybe<Pull_Requests_Min_Fields>;
    stddev?: Maybe<Pull_Requests_Stddev_Fields>;
    stddev_pop?: Maybe<Pull_Requests_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Pull_Requests_Stddev_Samp_Fields>;
    sum?: Maybe<Pull_Requests_Sum_Fields>;
    var_pop?: Maybe<Pull_Requests_Var_Pop_Fields>;
    var_samp?: Maybe<Pull_Requests_Var_Samp_Fields>;
    variance?: Maybe<Pull_Requests_Variance_Fields>;
};

export type Pull_Requests_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Pull_Requests_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Pull_Requests_Aggregate_Order_By = {
    avg?: Maybe<Pull_Requests_Avg_Order_By>;
    count?: Maybe<Order_By>;
    max?: Maybe<Pull_Requests_Max_Order_By>;
    min?: Maybe<Pull_Requests_Min_Order_By>;
    stddev?: Maybe<Pull_Requests_Stddev_Order_By>;
    stddev_pop?: Maybe<Pull_Requests_Stddev_Pop_Order_By>;
    stddev_samp?: Maybe<Pull_Requests_Stddev_Samp_Order_By>;
    sum?: Maybe<Pull_Requests_Sum_Order_By>;
    var_pop?: Maybe<Pull_Requests_Var_Pop_Order_By>;
    var_samp?: Maybe<Pull_Requests_Var_Samp_Order_By>;
    variance?: Maybe<Pull_Requests_Variance_Order_By>;
};

export type Pull_Requests_Arr_Rel_Insert_Input = {
    data: Array<Pull_Requests_Insert_Input>;
    on_conflict?: Maybe<Pull_Requests_On_Conflict>;
};

export type Pull_Requests_Avg_Fields = {
    __typename?: 'pull_requests_avg_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
    number?: Maybe<Scalars['Float']>;
};

export type Pull_Requests_Avg_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
};

export type Pull_Requests_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Pull_Requests_Bool_Exp>>>;
    _not?: Maybe<Pull_Requests_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Pull_Requests_Bool_Exp>>>;
    additions?: Maybe<Int_Comparison_Exp>;
    body_text?: Maybe<String_Comparison_Exp>;
    changed_files?: Maybe<Int_Comparison_Exp>;
    closed?: Maybe<Boolean_Comparison_Exp>;
    closed_at?: Maybe<Timetz_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    created_by?: Maybe<Uuid_Comparison_Exp>;
    deletions?: Maybe<Int_Comparison_Exp>;
    githubUserByCreatedBy?: Maybe<Github_User_Bool_Exp>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    is_cross_repository?: Maybe<Boolean_Comparison_Exp>;
    locked?: Maybe<Boolean_Comparison_Exp>;
    merged?: Maybe<Boolean_Comparison_Exp>;
    merged_at?: Maybe<Timetz_Comparison_Exp>;
    merged_by?: Maybe<Uuid_Comparison_Exp>;
    number?: Maybe<Int_Comparison_Exp>;
    published_at?: Maybe<Timetz_Comparison_Exp>;
    pull_request_assignees?: Maybe<Pull_Request_Assignees_Bool_Exp>;
    pull_request_comments?: Maybe<Pull_Request_Comments_Bool_Exp>;
    pull_request_commits?: Maybe<Pull_Request_Commits_Bool_Exp>;
    pull_request_labels?: Maybe<Pull_Request_Labels_Bool_Exp>;
    pull_request_reviews?: Maybe<Pull_Request_Reviews_Bool_Exp>;
    review_requests?: Maybe<Review_Requests_Bool_Exp>;
    review_threads?: Maybe<Review_Threads_Bool_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    updated_at_external?: Maybe<Timetz_Comparison_Exp>;
};

export enum Pull_Requests_Constraint {
    PullRequestsPkey = 'pull_requests_pkey'
}

export type Pull_Requests_Inc_Input = {
    additions?: Maybe<Scalars['Int']>;
    changed_files?: Maybe<Scalars['Int']>;
    deletions?: Maybe<Scalars['Int']>;
    number?: Maybe<Scalars['Int']>;
};

export type Pull_Requests_Insert_Input = {
    additions?: Maybe<Scalars['Int']>;
    body_text?: Maybe<Scalars['String']>;
    changed_files?: Maybe<Scalars['Int']>;
    closed?: Maybe<Scalars['Boolean']>;
    closed_at?: Maybe<Scalars['timetz']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_by?: Maybe<Scalars['uuid']>;
    deletions?: Maybe<Scalars['Int']>;
    githubUserByCreatedBy?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    is_cross_repository?: Maybe<Scalars['Boolean']>;
    locked?: Maybe<Scalars['Boolean']>;
    merged?: Maybe<Scalars['Boolean']>;
    merged_at?: Maybe<Scalars['timetz']>;
    merged_by?: Maybe<Scalars['uuid']>;
    number?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['timetz']>;
    pull_request_assignees?: Maybe<Pull_Request_Assignees_Arr_Rel_Insert_Input>;
    pull_request_comments?: Maybe<Pull_Request_Comments_Arr_Rel_Insert_Input>;
    pull_request_commits?: Maybe<Pull_Request_Commits_Arr_Rel_Insert_Input>;
    pull_request_labels?: Maybe<Pull_Request_Labels_Arr_Rel_Insert_Input>;
    pull_request_reviews?: Maybe<Pull_Request_Reviews_Arr_Rel_Insert_Input>;
    review_requests?: Maybe<Review_Requests_Arr_Rel_Insert_Input>;
    review_threads?: Maybe<Review_Threads_Arr_Rel_Insert_Input>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
};

export type Pull_Requests_Max_Fields = {
    __typename?: 'pull_requests_max_fields';
    additions?: Maybe<Scalars['Int']>;
    body_text?: Maybe<Scalars['String']>;
    changed_files?: Maybe<Scalars['Int']>;
    closed_at?: Maybe<Scalars['timetz']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    merged_at?: Maybe<Scalars['timetz']>;
    number?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['timetz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
};

export type Pull_Requests_Max_Order_By = {
    additions?: Maybe<Order_By>;
    body_text?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    closed_at?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    merged_at?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
    published_at?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
};

export type Pull_Requests_Min_Fields = {
    __typename?: 'pull_requests_min_fields';
    additions?: Maybe<Scalars['Int']>;
    body_text?: Maybe<Scalars['String']>;
    changed_files?: Maybe<Scalars['Int']>;
    closed_at?: Maybe<Scalars['timetz']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    deletions?: Maybe<Scalars['Int']>;
    merged_at?: Maybe<Scalars['timetz']>;
    number?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['timetz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
};

export type Pull_Requests_Min_Order_By = {
    additions?: Maybe<Order_By>;
    body_text?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    closed_at?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    merged_at?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
    published_at?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
};

export type Pull_Requests_Mutation_Response = {
    __typename?: 'pull_requests_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Pull_Requests>;
};

export type Pull_Requests_Obj_Rel_Insert_Input = {
    data: Pull_Requests_Insert_Input;
    on_conflict?: Maybe<Pull_Requests_On_Conflict>;
};

export type Pull_Requests_On_Conflict = {
    constraint: Pull_Requests_Constraint;
    update_columns: Array<Pull_Requests_Update_Column>;
    where?: Maybe<Pull_Requests_Bool_Exp>;
};

export type Pull_Requests_Order_By = {
    additions?: Maybe<Order_By>;
    body_text?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    closed?: Maybe<Order_By>;
    closed_at?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    created_by?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    githubUserByCreatedBy?: Maybe<Github_User_Order_By>;
    github_user?: Maybe<Github_User_Order_By>;
    id?: Maybe<Order_By>;
    is_cross_repository?: Maybe<Order_By>;
    locked?: Maybe<Order_By>;
    merged?: Maybe<Order_By>;
    merged_at?: Maybe<Order_By>;
    merged_by?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
    published_at?: Maybe<Order_By>;
    pull_request_assignees_aggregate?: Maybe<
        Pull_Request_Assignees_Aggregate_Order_By
    >;
    pull_request_comments_aggregate?: Maybe<
        Pull_Request_Comments_Aggregate_Order_By
    >;
    pull_request_commits_aggregate?: Maybe<
        Pull_Request_Commits_Aggregate_Order_By
    >;
    pull_request_labels_aggregate?: Maybe<
        Pull_Request_Labels_Aggregate_Order_By
    >;
    pull_request_reviews_aggregate?: Maybe<
        Pull_Request_Reviews_Aggregate_Order_By
    >;
    review_requests_aggregate?: Maybe<Review_Requests_Aggregate_Order_By>;
    review_threads_aggregate?: Maybe<Review_Threads_Aggregate_Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
};

export enum Pull_Requests_Select_Column {
    Additions = 'additions',
    BodyText = 'body_text',
    ChangedFiles = 'changed_files',
    Closed = 'closed',
    ClosedAt = 'closed_at',
    CreatedAt = 'created_at',
    CreatedBy = 'created_by',
    Deletions = 'deletions',
    Id = 'id',
    IsCrossRepository = 'is_cross_repository',
    Locked = 'locked',
    Merged = 'merged',
    MergedAt = 'merged_at',
    MergedBy = 'merged_by',
    Number = 'number',
    PublishedAt = 'published_at',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external'
}

export type Pull_Requests_Set_Input = {
    additions?: Maybe<Scalars['Int']>;
    body_text?: Maybe<Scalars['String']>;
    changed_files?: Maybe<Scalars['Int']>;
    closed?: Maybe<Scalars['Boolean']>;
    closed_at?: Maybe<Scalars['timetz']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_by?: Maybe<Scalars['uuid']>;
    deletions?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['uuid']>;
    is_cross_repository?: Maybe<Scalars['Boolean']>;
    locked?: Maybe<Scalars['Boolean']>;
    merged?: Maybe<Scalars['Boolean']>;
    merged_at?: Maybe<Scalars['timetz']>;
    merged_by?: Maybe<Scalars['uuid']>;
    number?: Maybe<Scalars['Int']>;
    published_at?: Maybe<Scalars['timetz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
};

export type Pull_Requests_Stddev_Fields = {
    __typename?: 'pull_requests_stddev_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
    number?: Maybe<Scalars['Float']>;
};

export type Pull_Requests_Stddev_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
};

export type Pull_Requests_Stddev_Pop_Fields = {
    __typename?: 'pull_requests_stddev_pop_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
    number?: Maybe<Scalars['Float']>;
};

export type Pull_Requests_Stddev_Pop_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
};

export type Pull_Requests_Stddev_Samp_Fields = {
    __typename?: 'pull_requests_stddev_samp_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
    number?: Maybe<Scalars['Float']>;
};

export type Pull_Requests_Stddev_Samp_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
};

export type Pull_Requests_Sum_Fields = {
    __typename?: 'pull_requests_sum_fields';
    additions?: Maybe<Scalars['Int']>;
    changed_files?: Maybe<Scalars['Int']>;
    deletions?: Maybe<Scalars['Int']>;
    number?: Maybe<Scalars['Int']>;
};

export type Pull_Requests_Sum_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
};

export enum Pull_Requests_Update_Column {
    Additions = 'additions',
    BodyText = 'body_text',
    ChangedFiles = 'changed_files',
    Closed = 'closed',
    ClosedAt = 'closed_at',
    CreatedAt = 'created_at',
    CreatedBy = 'created_by',
    Deletions = 'deletions',
    Id = 'id',
    IsCrossRepository = 'is_cross_repository',
    Locked = 'locked',
    Merged = 'merged',
    MergedAt = 'merged_at',
    MergedBy = 'merged_by',
    Number = 'number',
    PublishedAt = 'published_at',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external'
}

export type Pull_Requests_Var_Pop_Fields = {
    __typename?: 'pull_requests_var_pop_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
    number?: Maybe<Scalars['Float']>;
};

export type Pull_Requests_Var_Pop_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
};

export type Pull_Requests_Var_Samp_Fields = {
    __typename?: 'pull_requests_var_samp_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
    number?: Maybe<Scalars['Float']>;
};

export type Pull_Requests_Var_Samp_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
};

export type Pull_Requests_Variance_Fields = {
    __typename?: 'pull_requests_variance_fields';
    additions?: Maybe<Scalars['Float']>;
    changed_files?: Maybe<Scalars['Float']>;
    deletions?: Maybe<Scalars['Float']>;
    number?: Maybe<Scalars['Float']>;
};

export type Pull_Requests_Variance_Order_By = {
    additions?: Maybe<Order_By>;
    changed_files?: Maybe<Order_By>;
    deletions?: Maybe<Order_By>;
    number?: Maybe<Order_By>;
};

export type Query_Root = {
    __typename?: 'query_root';
    branch_commits: Array<Branch_Commits>;
    branch_commits_aggregate: Branch_Commits_Aggregate;
    branch_commits_by_pk?: Maybe<Branch_Commits>;
    branches: Array<Branches>;
    branches_aggregate: Branches_Aggregate;
    branches_by_pk?: Maybe<Branches>;
    comments: Array<Comments>;
    comments_aggregate: Comments_Aggregate;
    comments_by_pk?: Maybe<Comments>;
    commits: Array<Commits>;
    commits_aggregate: Commits_Aggregate;
    commits_by_pk?: Maybe<Commits>;
    file_diffs: Array<File_Diffs>;
    file_diffs_aggregate: File_Diffs_Aggregate;
    file_diffs_by_pk?: Maybe<File_Diffs>;
    games: Array<Games>;
    games_aggregate: Games_Aggregate;
    games_by_pk?: Maybe<Games>;
    github_user: Array<Github_User>;
    github_user_aggregate: Github_User_Aggregate;
    github_user_by_pk?: Maybe<Github_User>;
    github_user_following: Array<Github_User_Following>;
    github_user_following_aggregate: Github_User_Following_Aggregate;
    github_user_following_by_pk?: Maybe<Github_User_Following>;
    github_webhook_events: Array<Github_Webhook_Events>;
    github_webhook_events_aggregate: Github_Webhook_Events_Aggregate;
    github_webhook_events_by_pk?: Maybe<Github_Webhook_Events>;
    issue_assignees: Array<Issue_Assignees>;
    issue_assignees_aggregate: Issue_Assignees_Aggregate;
    issue_assignees_by_pk?: Maybe<Issue_Assignees>;
    issue_comments: Array<Issue_Comments>;
    issue_comments_aggregate: Issue_Comments_Aggregate;
    issue_comments_by_pk?: Maybe<Issue_Comments>;
    issue_labels: Array<Issue_Labels>;
    issue_labels_aggregate: Issue_Labels_Aggregate;
    issue_labels_by_pk?: Maybe<Issue_Labels>;
    issue_participants: Array<Issue_Participants>;
    issue_participants_aggregate: Issue_Participants_Aggregate;
    issue_participants_by_pk?: Maybe<Issue_Participants>;
    issues: Array<Issues>;
    issues_aggregate: Issues_Aggregate;
    issues_by_pk?: Maybe<Issues>;
    labels: Array<Labels>;
    labels_aggregate: Labels_Aggregate;
    labels_by_pk?: Maybe<Labels>;
    pull_request_assignees: Array<Pull_Request_Assignees>;
    pull_request_assignees_aggregate: Pull_Request_Assignees_Aggregate;
    pull_request_assignees_by_pk?: Maybe<Pull_Request_Assignees>;
    pull_request_comments: Array<Pull_Request_Comments>;
    pull_request_comments_aggregate: Pull_Request_Comments_Aggregate;
    pull_request_comments_by_pk?: Maybe<Pull_Request_Comments>;
    pull_request_commits: Array<Pull_Request_Commits>;
    pull_request_commits_aggregate: Pull_Request_Commits_Aggregate;
    pull_request_commits_by_pk?: Maybe<Pull_Request_Commits>;
    pull_request_labels: Array<Pull_Request_Labels>;
    pull_request_labels_aggregate: Pull_Request_Labels_Aggregate;
    pull_request_labels_by_pk?: Maybe<Pull_Request_Labels>;
    pull_request_review_comments: Array<Pull_Request_Review_Comments>;
    pull_request_review_comments_aggregate: Pull_Request_Review_Comments_Aggregate;
    pull_request_review_comments_by_pk?: Maybe<Pull_Request_Review_Comments>;
    pull_request_review_commits: Array<Pull_Request_Review_Commits>;
    pull_request_review_commits_aggregate: Pull_Request_Review_Commits_Aggregate;
    pull_request_review_commits_by_pk?: Maybe<Pull_Request_Review_Commits>;
    pull_request_reviews: Array<Pull_Request_Reviews>;
    pull_request_reviews_aggregate: Pull_Request_Reviews_Aggregate;
    pull_request_reviews_by_pk?: Maybe<Pull_Request_Reviews>;
    pull_requests: Array<Pull_Requests>;
    pull_requests_aggregate: Pull_Requests_Aggregate;
    pull_requests_by_pk?: Maybe<Pull_Requests>;
    related_topics: Array<Related_Topics>;
    related_topics_aggregate: Related_Topics_Aggregate;
    related_topics_by_pk?: Maybe<Related_Topics>;
    repositories: Array<Repositories>;
    repositories_aggregate: Repositories_Aggregate;
    repositories_by_pk?: Maybe<Repositories>;
    repository_api_keys: Array<Repository_Api_Keys>;
    repository_api_keys_aggregate: Repository_Api_Keys_Aggregate;
    repository_api_keys_by_pk?: Maybe<Repository_Api_Keys>;
    repository_collaborators: Array<Repository_Collaborators>;
    repository_collaborators_aggregate: Repository_Collaborators_Aggregate;
    repository_collaborators_by_pk?: Maybe<Repository_Collaborators>;
    repository_stargazers: Array<Repository_Stargazers>;
    repository_stargazers_aggregate: Repository_Stargazers_Aggregate;
    repository_stargazers_by_pk?: Maybe<Repository_Stargazers>;
    repository_topics: Array<Repository_Topics>;
    repository_topics_aggregate: Repository_Topics_Aggregate;
    repository_topics_by_pk?: Maybe<Repository_Topics>;
    repository_watchers: Array<Repository_Watchers>;
    repository_watchers_aggregate: Repository_Watchers_Aggregate;
    repository_watchers_by_pk?: Maybe<Repository_Watchers>;
    review_requests: Array<Review_Requests>;
    review_requests_aggregate: Review_Requests_Aggregate;
    review_requests_by_pk?: Maybe<Review_Requests>;
    review_thread_comments: Array<Review_Thread_Comments>;
    review_thread_comments_aggregate: Review_Thread_Comments_Aggregate;
    review_thread_comments_by_pk?: Maybe<Review_Thread_Comments>;
    review_threads: Array<Review_Threads>;
    review_threads_aggregate: Review_Threads_Aggregate;
    review_threads_by_pk?: Maybe<Review_Threads>;
    topic_stargazers: Array<Topic_Stargazers>;
    topic_stargazers_aggregate: Topic_Stargazers_Aggregate;
    topic_stargazers_by_pk?: Maybe<Topic_Stargazers>;
    topics: Array<Topics>;
    topics_aggregate: Topics_Aggregate;
    topics_by_pk?: Maybe<Topics>;
    users: Array<Users>;
    users_aggregate: Users_Aggregate;
    users_by_pk?: Maybe<Users>;
};

export type Query_RootBranch_CommitsArgs = {
    distinct_on?: Maybe<Array<Branch_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branch_Commits_Order_By>>;
    where?: Maybe<Branch_Commits_Bool_Exp>;
};

export type Query_RootBranch_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Branch_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branch_Commits_Order_By>>;
    where?: Maybe<Branch_Commits_Bool_Exp>;
};

export type Query_RootBranch_Commits_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootBranchesArgs = {
    distinct_on?: Maybe<Array<Branches_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branches_Order_By>>;
    where?: Maybe<Branches_Bool_Exp>;
};

export type Query_RootBranches_AggregateArgs = {
    distinct_on?: Maybe<Array<Branches_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branches_Order_By>>;
    where?: Maybe<Branches_Bool_Exp>;
};

export type Query_RootBranches_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootCommentsArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

export type Query_RootComments_AggregateArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

export type Query_RootComments_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootCommitsArgs = {
    distinct_on?: Maybe<Array<Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Commits_Order_By>>;
    where?: Maybe<Commits_Bool_Exp>;
};

export type Query_RootCommits_AggregateArgs = {
    distinct_on?: Maybe<Array<Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Commits_Order_By>>;
    where?: Maybe<Commits_Bool_Exp>;
};

export type Query_RootCommits_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootFile_DiffsArgs = {
    distinct_on?: Maybe<Array<File_Diffs_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<File_Diffs_Order_By>>;
    where?: Maybe<File_Diffs_Bool_Exp>;
};

export type Query_RootFile_Diffs_AggregateArgs = {
    distinct_on?: Maybe<Array<File_Diffs_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<File_Diffs_Order_By>>;
    where?: Maybe<File_Diffs_Bool_Exp>;
};

export type Query_RootFile_Diffs_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootGamesArgs = {
    distinct_on?: Maybe<Array<Games_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Games_Order_By>>;
    where?: Maybe<Games_Bool_Exp>;
};

export type Query_RootGames_AggregateArgs = {
    distinct_on?: Maybe<Array<Games_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Games_Order_By>>;
    where?: Maybe<Games_Bool_Exp>;
};

export type Query_RootGames_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootGithub_UserArgs = {
    distinct_on?: Maybe<Array<Github_User_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Order_By>>;
    where?: Maybe<Github_User_Bool_Exp>;
};

export type Query_RootGithub_User_AggregateArgs = {
    distinct_on?: Maybe<Array<Github_User_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Order_By>>;
    where?: Maybe<Github_User_Bool_Exp>;
};

export type Query_RootGithub_User_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootGithub_User_FollowingArgs = {
    distinct_on?: Maybe<Array<Github_User_Following_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Following_Order_By>>;
    where?: Maybe<Github_User_Following_Bool_Exp>;
};

export type Query_RootGithub_User_Following_AggregateArgs = {
    distinct_on?: Maybe<Array<Github_User_Following_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Following_Order_By>>;
    where?: Maybe<Github_User_Following_Bool_Exp>;
};

export type Query_RootGithub_User_Following_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootGithub_Webhook_EventsArgs = {
    distinct_on?: Maybe<Array<Github_Webhook_Events_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_Webhook_Events_Order_By>>;
    where?: Maybe<Github_Webhook_Events_Bool_Exp>;
};

export type Query_RootGithub_Webhook_Events_AggregateArgs = {
    distinct_on?: Maybe<Array<Github_Webhook_Events_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_Webhook_Events_Order_By>>;
    where?: Maybe<Github_Webhook_Events_Bool_Exp>;
};

export type Query_RootGithub_Webhook_Events_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootIssue_AssigneesArgs = {
    distinct_on?: Maybe<Array<Issue_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Assignees_Order_By>>;
    where?: Maybe<Issue_Assignees_Bool_Exp>;
};

export type Query_RootIssue_Assignees_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Assignees_Order_By>>;
    where?: Maybe<Issue_Assignees_Bool_Exp>;
};

export type Query_RootIssue_Assignees_By_PkArgs = {
    github_user_id: Scalars['uuid'];
    issue_id: Scalars['uuid'];
};

export type Query_RootIssue_CommentsArgs = {
    distinct_on?: Maybe<Array<Issue_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Comments_Order_By>>;
    where?: Maybe<Issue_Comments_Bool_Exp>;
};

export type Query_RootIssue_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Comments_Order_By>>;
    where?: Maybe<Issue_Comments_Bool_Exp>;
};

export type Query_RootIssue_Comments_By_PkArgs = {
    comment_id: Scalars['uuid'];
    issue_id: Scalars['uuid'];
};

export type Query_RootIssue_LabelsArgs = {
    distinct_on?: Maybe<Array<Issue_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Labels_Order_By>>;
    where?: Maybe<Issue_Labels_Bool_Exp>;
};

export type Query_RootIssue_Labels_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Labels_Order_By>>;
    where?: Maybe<Issue_Labels_Bool_Exp>;
};

export type Query_RootIssue_Labels_By_PkArgs = {
    issue_id: Scalars['uuid'];
    label_id: Scalars['uuid'];
};

export type Query_RootIssue_ParticipantsArgs = {
    distinct_on?: Maybe<Array<Issue_Participants_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Participants_Order_By>>;
    where?: Maybe<Issue_Participants_Bool_Exp>;
};

export type Query_RootIssue_Participants_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Participants_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Participants_Order_By>>;
    where?: Maybe<Issue_Participants_Bool_Exp>;
};

export type Query_RootIssue_Participants_By_PkArgs = {
    github_user_id: Scalars['uuid'];
    issue_id: Scalars['uuid'];
};

export type Query_RootIssuesArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Query_RootIssues_AggregateArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Query_RootIssues_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootLabelsArgs = {
    distinct_on?: Maybe<Array<Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Labels_Order_By>>;
    where?: Maybe<Labels_Bool_Exp>;
};

export type Query_RootLabels_AggregateArgs = {
    distinct_on?: Maybe<Array<Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Labels_Order_By>>;
    where?: Maybe<Labels_Bool_Exp>;
};

export type Query_RootLabels_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootPull_Request_AssigneesArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Assignees_Order_By>>;
    where?: Maybe<Pull_Request_Assignees_Bool_Exp>;
};

export type Query_RootPull_Request_Assignees_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Assignees_Order_By>>;
    where?: Maybe<Pull_Request_Assignees_Bool_Exp>;
};

export type Query_RootPull_Request_Assignees_By_PkArgs = {
    github_user_id: Scalars['uuid'];
    pull_request_id: Scalars['uuid'];
};

export type Query_RootPull_Request_CommentsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Comments_Bool_Exp>;
};

export type Query_RootPull_Request_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Comments_Bool_Exp>;
};

export type Query_RootPull_Request_Comments_By_PkArgs = {
    comment_id: Scalars['uuid'];
    pull_request_id: Scalars['uuid'];
};

export type Query_RootPull_Request_CommitsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Commits_Bool_Exp>;
};

export type Query_RootPull_Request_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Commits_Bool_Exp>;
};

export type Query_RootPull_Request_Commits_By_PkArgs = {
    commit_id: Scalars['uuid'];
    pull_request_id: Scalars['uuid'];
};

export type Query_RootPull_Request_LabelsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Labels_Order_By>>;
    where?: Maybe<Pull_Request_Labels_Bool_Exp>;
};

export type Query_RootPull_Request_Labels_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Labels_Order_By>>;
    where?: Maybe<Pull_Request_Labels_Bool_Exp>;
};

export type Query_RootPull_Request_Labels_By_PkArgs = {
    label_id: Scalars['uuid'];
    pull_request_id: Scalars['uuid'];
};

export type Query_RootPull_Request_Review_CommentsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
};

export type Query_RootPull_Request_Review_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
};

export type Query_RootPull_Request_Review_Comments_By_PkArgs = {
    comment_id: Scalars['uuid'];
    pull_request_review_id: Scalars['uuid'];
};

export type Query_RootPull_Request_Review_CommitsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
};

export type Query_RootPull_Request_Review_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
};

export type Query_RootPull_Request_Review_Commits_By_PkArgs = {
    commit_id: Scalars['uuid'];
    pull_request_review_id: Scalars['uuid'];
};

export type Query_RootPull_Request_ReviewsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Reviews_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Reviews_Order_By>>;
    where?: Maybe<Pull_Request_Reviews_Bool_Exp>;
};

export type Query_RootPull_Request_Reviews_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Reviews_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Reviews_Order_By>>;
    where?: Maybe<Pull_Request_Reviews_Bool_Exp>;
};

export type Query_RootPull_Request_Reviews_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootPull_RequestsArgs = {
    distinct_on?: Maybe<Array<Pull_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Requests_Order_By>>;
    where?: Maybe<Pull_Requests_Bool_Exp>;
};

export type Query_RootPull_Requests_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Requests_Order_By>>;
    where?: Maybe<Pull_Requests_Bool_Exp>;
};

export type Query_RootPull_Requests_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootRelated_TopicsArgs = {
    distinct_on?: Maybe<Array<Related_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Related_Topics_Order_By>>;
    where?: Maybe<Related_Topics_Bool_Exp>;
};

export type Query_RootRelated_Topics_AggregateArgs = {
    distinct_on?: Maybe<Array<Related_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Related_Topics_Order_By>>;
    where?: Maybe<Related_Topics_Bool_Exp>;
};

export type Query_RootRelated_Topics_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootRepositoriesArgs = {
    distinct_on?: Maybe<Array<Repositories_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repositories_Order_By>>;
    where?: Maybe<Repositories_Bool_Exp>;
};

export type Query_RootRepositories_AggregateArgs = {
    distinct_on?: Maybe<Array<Repositories_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repositories_Order_By>>;
    where?: Maybe<Repositories_Bool_Exp>;
};

export type Query_RootRepositories_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootRepository_Api_KeysArgs = {
    distinct_on?: Maybe<Array<Repository_Api_Keys_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Api_Keys_Order_By>>;
    where?: Maybe<Repository_Api_Keys_Bool_Exp>;
};

export type Query_RootRepository_Api_Keys_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Api_Keys_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Api_Keys_Order_By>>;
    where?: Maybe<Repository_Api_Keys_Bool_Exp>;
};

export type Query_RootRepository_Api_Keys_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootRepository_CollaboratorsArgs = {
    distinct_on?: Maybe<Array<Repository_Collaborators_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Collaborators_Order_By>>;
    where?: Maybe<Repository_Collaborators_Bool_Exp>;
};

export type Query_RootRepository_Collaborators_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Collaborators_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Collaborators_Order_By>>;
    where?: Maybe<Repository_Collaborators_Bool_Exp>;
};

export type Query_RootRepository_Collaborators_By_PkArgs = {
    github_user_id: Scalars['uuid'];
    repository_id: Scalars['uuid'];
};

export type Query_RootRepository_StargazersArgs = {
    distinct_on?: Maybe<Array<Repository_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Stargazers_Order_By>>;
    where?: Maybe<Repository_Stargazers_Bool_Exp>;
};

export type Query_RootRepository_Stargazers_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Stargazers_Order_By>>;
    where?: Maybe<Repository_Stargazers_Bool_Exp>;
};

export type Query_RootRepository_Stargazers_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootRepository_TopicsArgs = {
    distinct_on?: Maybe<Array<Repository_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Topics_Order_By>>;
    where?: Maybe<Repository_Topics_Bool_Exp>;
};

export type Query_RootRepository_Topics_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Topics_Order_By>>;
    where?: Maybe<Repository_Topics_Bool_Exp>;
};

export type Query_RootRepository_Topics_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootRepository_WatchersArgs = {
    distinct_on?: Maybe<Array<Repository_Watchers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Watchers_Order_By>>;
    where?: Maybe<Repository_Watchers_Bool_Exp>;
};

export type Query_RootRepository_Watchers_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Watchers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Watchers_Order_By>>;
    where?: Maybe<Repository_Watchers_Bool_Exp>;
};

export type Query_RootRepository_Watchers_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootReview_RequestsArgs = {
    distinct_on?: Maybe<Array<Review_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Requests_Order_By>>;
    where?: Maybe<Review_Requests_Bool_Exp>;
};

export type Query_RootReview_Requests_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Requests_Order_By>>;
    where?: Maybe<Review_Requests_Bool_Exp>;
};

export type Query_RootReview_Requests_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootReview_Thread_CommentsArgs = {
    distinct_on?: Maybe<Array<Review_Thread_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Thread_Comments_Order_By>>;
    where?: Maybe<Review_Thread_Comments_Bool_Exp>;
};

export type Query_RootReview_Thread_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Thread_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Thread_Comments_Order_By>>;
    where?: Maybe<Review_Thread_Comments_Bool_Exp>;
};

export type Query_RootReview_Thread_Comments_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootReview_ThreadsArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Query_RootReview_Threads_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Query_RootReview_Threads_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootTopic_StargazersArgs = {
    distinct_on?: Maybe<Array<Topic_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topic_Stargazers_Order_By>>;
    where?: Maybe<Topic_Stargazers_Bool_Exp>;
};

export type Query_RootTopic_Stargazers_AggregateArgs = {
    distinct_on?: Maybe<Array<Topic_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topic_Stargazers_Order_By>>;
    where?: Maybe<Topic_Stargazers_Bool_Exp>;
};

export type Query_RootTopic_Stargazers_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootTopicsArgs = {
    distinct_on?: Maybe<Array<Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topics_Order_By>>;
    where?: Maybe<Topics_Bool_Exp>;
};

export type Query_RootTopics_AggregateArgs = {
    distinct_on?: Maybe<Array<Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topics_Order_By>>;
    where?: Maybe<Topics_Bool_Exp>;
};

export type Query_RootTopics_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Query_RootUsersArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Related_Topics = {
    __typename?: 'related_topics';
    id: Scalars['uuid'];
    topic: Topics;
    topicByTopicId: Topics;
    topic_id: Scalars['uuid'];
    topic_reference_id: Scalars['uuid'];
};

export type Related_Topics_Aggregate = {
    __typename?: 'related_topics_aggregate';
    aggregate?: Maybe<Related_Topics_Aggregate_Fields>;
    nodes: Array<Related_Topics>;
};

export type Related_Topics_Aggregate_Fields = {
    __typename?: 'related_topics_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Related_Topics_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Related_Topics_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Related_Topics_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Related_Topics_Arr_Rel_Insert_Input = {
    data: Array<Related_Topics_Insert_Input>;
    on_conflict?: Maybe<Related_Topics_On_Conflict>;
};

export type Related_Topics_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Related_Topics_Bool_Exp>>>;
    _not?: Maybe<Related_Topics_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Related_Topics_Bool_Exp>>>;
    id?: Maybe<Uuid_Comparison_Exp>;
    topic?: Maybe<Topics_Bool_Exp>;
    topicByTopicId?: Maybe<Topics_Bool_Exp>;
    topic_id?: Maybe<Uuid_Comparison_Exp>;
    topic_reference_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Related_Topics_Constraint {
    RelatedTopicsPkey = 'related_topics_pkey'
}

export type Related_Topics_Insert_Input = {
    id?: Maybe<Scalars['uuid']>;
    topic?: Maybe<Topics_Obj_Rel_Insert_Input>;
    topicByTopicId?: Maybe<Topics_Obj_Rel_Insert_Input>;
    topic_id?: Maybe<Scalars['uuid']>;
    topic_reference_id?: Maybe<Scalars['uuid']>;
};

export type Related_Topics_Mutation_Response = {
    __typename?: 'related_topics_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Related_Topics>;
};

export type Related_Topics_Obj_Rel_Insert_Input = {
    data: Related_Topics_Insert_Input;
    on_conflict?: Maybe<Related_Topics_On_Conflict>;
};

export type Related_Topics_On_Conflict = {
    constraint: Related_Topics_Constraint;
    update_columns: Array<Related_Topics_Update_Column>;
    where?: Maybe<Related_Topics_Bool_Exp>;
};

export type Related_Topics_Order_By = {
    id?: Maybe<Order_By>;
    topic?: Maybe<Topics_Order_By>;
    topicByTopicId?: Maybe<Topics_Order_By>;
    topic_id?: Maybe<Order_By>;
    topic_reference_id?: Maybe<Order_By>;
};

export enum Related_Topics_Select_Column {
    Id = 'id',
    TopicId = 'topic_id',
    TopicReferenceId = 'topic_reference_id'
}

export type Related_Topics_Set_Input = {
    id?: Maybe<Scalars['uuid']>;
    topic_id?: Maybe<Scalars['uuid']>;
    topic_reference_id?: Maybe<Scalars['uuid']>;
};

export enum Related_Topics_Update_Column {
    Id = 'id',
    TopicId = 'topic_id',
    TopicReferenceId = 'topic_reference_id'
}

export type Repositories = {
    __typename?: 'repositories';
    added_by: Scalars['uuid'];
    branches: Array<Branches>;
    branches_aggregate: Branches_Aggregate;
    created_at: Scalars['timestamptz'];
    created_at_external: Scalars['timetz'];
    description: Scalars['String'];
    games: Array<Games>;
    games_aggregate: Games_Aggregate;
    github_key: Repository_Api_Keys;
    github_key_id: Scalars['uuid'];
    github_webhook_events: Array<Github_Webhook_Events>;
    github_webhook_events_aggregate: Github_Webhook_Events_Aggregate;
    homepage_url: Scalars['String'];
    id: Scalars['uuid'];
    is_archived: Scalars['Boolean'];
    is_disabled: Scalars['Boolean'];
    is_fork: Scalars['Boolean'];
    is_locked: Scalars['Boolean'];
    is_private: Scalars['Boolean'];
    is_tracked: Scalars['Boolean'];
    name: Scalars['String'];
    owner: Scalars['String'];
    repository_collaborators: Array<Repository_Collaborators>;
    repository_collaborators_aggregate: Repository_Collaborators_Aggregate;
    repository_stargazers: Array<Repository_Stargazers>;
    repository_stargazers_aggregate: Repository_Stargazers_Aggregate;
    repository_topics: Array<Repository_Topics>;
    repository_topics_aggregate: Repository_Topics_Aggregate;
    repository_watchers: Array<Repository_Watchers>;
    repository_watchers_aggregate: Repository_Watchers_Aggregate;
    review_threads: Array<Review_Threads>;
    review_threads_aggregate: Review_Threads_Aggregate;
    ssh_url: Scalars['String'];
    updated_at: Scalars['timestamptz'];
    updated_at_external: Scalars['timetz'];
    url: Scalars['String'];
    user: Users;
};

export type RepositoriesBranchesArgs = {
    distinct_on?: Maybe<Array<Branches_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branches_Order_By>>;
    where?: Maybe<Branches_Bool_Exp>;
};

export type RepositoriesBranches_AggregateArgs = {
    distinct_on?: Maybe<Array<Branches_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branches_Order_By>>;
    where?: Maybe<Branches_Bool_Exp>;
};

export type RepositoriesGamesArgs = {
    distinct_on?: Maybe<Array<Games_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Games_Order_By>>;
    where?: Maybe<Games_Bool_Exp>;
};

export type RepositoriesGames_AggregateArgs = {
    distinct_on?: Maybe<Array<Games_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Games_Order_By>>;
    where?: Maybe<Games_Bool_Exp>;
};

export type RepositoriesGithub_Webhook_EventsArgs = {
    distinct_on?: Maybe<Array<Github_Webhook_Events_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_Webhook_Events_Order_By>>;
    where?: Maybe<Github_Webhook_Events_Bool_Exp>;
};

export type RepositoriesGithub_Webhook_Events_AggregateArgs = {
    distinct_on?: Maybe<Array<Github_Webhook_Events_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_Webhook_Events_Order_By>>;
    where?: Maybe<Github_Webhook_Events_Bool_Exp>;
};

export type RepositoriesRepository_CollaboratorsArgs = {
    distinct_on?: Maybe<Array<Repository_Collaborators_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Collaborators_Order_By>>;
    where?: Maybe<Repository_Collaborators_Bool_Exp>;
};

export type RepositoriesRepository_Collaborators_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Collaborators_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Collaborators_Order_By>>;
    where?: Maybe<Repository_Collaborators_Bool_Exp>;
};

export type RepositoriesRepository_StargazersArgs = {
    distinct_on?: Maybe<Array<Repository_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Stargazers_Order_By>>;
    where?: Maybe<Repository_Stargazers_Bool_Exp>;
};

export type RepositoriesRepository_Stargazers_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Stargazers_Order_By>>;
    where?: Maybe<Repository_Stargazers_Bool_Exp>;
};

export type RepositoriesRepository_TopicsArgs = {
    distinct_on?: Maybe<Array<Repository_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Topics_Order_By>>;
    where?: Maybe<Repository_Topics_Bool_Exp>;
};

export type RepositoriesRepository_Topics_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Topics_Order_By>>;
    where?: Maybe<Repository_Topics_Bool_Exp>;
};

export type RepositoriesRepository_WatchersArgs = {
    distinct_on?: Maybe<Array<Repository_Watchers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Watchers_Order_By>>;
    where?: Maybe<Repository_Watchers_Bool_Exp>;
};

export type RepositoriesRepository_Watchers_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Watchers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Watchers_Order_By>>;
    where?: Maybe<Repository_Watchers_Bool_Exp>;
};

export type RepositoriesReview_ThreadsArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type RepositoriesReview_Threads_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Repositories_Aggregate = {
    __typename?: 'repositories_aggregate';
    aggregate?: Maybe<Repositories_Aggregate_Fields>;
    nodes: Array<Repositories>;
};

export type Repositories_Aggregate_Fields = {
    __typename?: 'repositories_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Repositories_Max_Fields>;
    min?: Maybe<Repositories_Min_Fields>;
};

export type Repositories_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Repositories_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Repositories_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Repositories_Max_Order_By>;
    min?: Maybe<Repositories_Min_Order_By>;
};

export type Repositories_Arr_Rel_Insert_Input = {
    data: Array<Repositories_Insert_Input>;
    on_conflict?: Maybe<Repositories_On_Conflict>;
};

export type Repositories_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Repositories_Bool_Exp>>>;
    _not?: Maybe<Repositories_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Repositories_Bool_Exp>>>;
    added_by?: Maybe<Uuid_Comparison_Exp>;
    branches?: Maybe<Branches_Bool_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    created_at_external?: Maybe<Timetz_Comparison_Exp>;
    description?: Maybe<String_Comparison_Exp>;
    games?: Maybe<Games_Bool_Exp>;
    github_key?: Maybe<Repository_Api_Keys_Bool_Exp>;
    github_key_id?: Maybe<Uuid_Comparison_Exp>;
    github_webhook_events?: Maybe<Github_Webhook_Events_Bool_Exp>;
    homepage_url?: Maybe<String_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    is_archived?: Maybe<Boolean_Comparison_Exp>;
    is_disabled?: Maybe<Boolean_Comparison_Exp>;
    is_fork?: Maybe<Boolean_Comparison_Exp>;
    is_locked?: Maybe<Boolean_Comparison_Exp>;
    is_private?: Maybe<Boolean_Comparison_Exp>;
    is_tracked?: Maybe<Boolean_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    owner?: Maybe<String_Comparison_Exp>;
    repository_collaborators?: Maybe<Repository_Collaborators_Bool_Exp>;
    repository_stargazers?: Maybe<Repository_Stargazers_Bool_Exp>;
    repository_topics?: Maybe<Repository_Topics_Bool_Exp>;
    repository_watchers?: Maybe<Repository_Watchers_Bool_Exp>;
    review_threads?: Maybe<Review_Threads_Bool_Exp>;
    ssh_url?: Maybe<String_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    updated_at_external?: Maybe<Timetz_Comparison_Exp>;
    url?: Maybe<String_Comparison_Exp>;
    user?: Maybe<Users_Bool_Exp>;
};

export enum Repositories_Constraint {
    RepositoriesPkey = 'repositories_pkey'
}

export type Repositories_Insert_Input = {
    added_by?: Maybe<Scalars['uuid']>;
    branches?: Maybe<Branches_Arr_Rel_Insert_Input>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    description?: Maybe<Scalars['String']>;
    games?: Maybe<Games_Arr_Rel_Insert_Input>;
    github_key?: Maybe<Repository_Api_Keys_Obj_Rel_Insert_Input>;
    github_key_id?: Maybe<Scalars['uuid']>;
    github_webhook_events?: Maybe<Github_Webhook_Events_Arr_Rel_Insert_Input>;
    homepage_url?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_archived?: Maybe<Scalars['Boolean']>;
    is_disabled?: Maybe<Scalars['Boolean']>;
    is_fork?: Maybe<Scalars['Boolean']>;
    is_locked?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_tracked?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['String']>;
    repository_collaborators?: Maybe<
        Repository_Collaborators_Arr_Rel_Insert_Input
    >;
    repository_stargazers?: Maybe<Repository_Stargazers_Arr_Rel_Insert_Input>;
    repository_topics?: Maybe<Repository_Topics_Arr_Rel_Insert_Input>;
    repository_watchers?: Maybe<Repository_Watchers_Arr_Rel_Insert_Input>;
    review_threads?: Maybe<Review_Threads_Arr_Rel_Insert_Input>;
    ssh_url?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
    user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

export type Repositories_Max_Fields = {
    __typename?: 'repositories_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    description?: Maybe<Scalars['String']>;
    homepage_url?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['String']>;
    ssh_url?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Repositories_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    description?: Maybe<Order_By>;
    homepage_url?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    owner?: Maybe<Order_By>;
    ssh_url?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Repositories_Min_Fields = {
    __typename?: 'repositories_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    description?: Maybe<Scalars['String']>;
    homepage_url?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['String']>;
    ssh_url?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export type Repositories_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    description?: Maybe<Order_By>;
    homepage_url?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    owner?: Maybe<Order_By>;
    ssh_url?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
};

export type Repositories_Mutation_Response = {
    __typename?: 'repositories_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Repositories>;
};

export type Repositories_Obj_Rel_Insert_Input = {
    data: Repositories_Insert_Input;
    on_conflict?: Maybe<Repositories_On_Conflict>;
};

export type Repositories_On_Conflict = {
    constraint: Repositories_Constraint;
    update_columns: Array<Repositories_Update_Column>;
    where?: Maybe<Repositories_Bool_Exp>;
};

export type Repositories_Order_By = {
    added_by?: Maybe<Order_By>;
    branches_aggregate?: Maybe<Branches_Aggregate_Order_By>;
    created_at?: Maybe<Order_By>;
    created_at_external?: Maybe<Order_By>;
    description?: Maybe<Order_By>;
    games_aggregate?: Maybe<Games_Aggregate_Order_By>;
    github_key?: Maybe<Repository_Api_Keys_Order_By>;
    github_key_id?: Maybe<Order_By>;
    github_webhook_events_aggregate?: Maybe<
        Github_Webhook_Events_Aggregate_Order_By
    >;
    homepage_url?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    is_archived?: Maybe<Order_By>;
    is_disabled?: Maybe<Order_By>;
    is_fork?: Maybe<Order_By>;
    is_locked?: Maybe<Order_By>;
    is_private?: Maybe<Order_By>;
    is_tracked?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    owner?: Maybe<Order_By>;
    repository_collaborators_aggregate?: Maybe<
        Repository_Collaborators_Aggregate_Order_By
    >;
    repository_stargazers_aggregate?: Maybe<
        Repository_Stargazers_Aggregate_Order_By
    >;
    repository_topics_aggregate?: Maybe<Repository_Topics_Aggregate_Order_By>;
    repository_watchers_aggregate?: Maybe<
        Repository_Watchers_Aggregate_Order_By
    >;
    review_threads_aggregate?: Maybe<Review_Threads_Aggregate_Order_By>;
    ssh_url?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    updated_at_external?: Maybe<Order_By>;
    url?: Maybe<Order_By>;
    user?: Maybe<Users_Order_By>;
};

export enum Repositories_Select_Column {
    AddedBy = 'added_by',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Description = 'description',
    GithubKeyId = 'github_key_id',
    HomepageUrl = 'homepage_url',
    Id = 'id',
    IsArchived = 'is_archived',
    IsDisabled = 'is_disabled',
    IsFork = 'is_fork',
    IsLocked = 'is_locked',
    IsPrivate = 'is_private',
    IsTracked = 'is_tracked',
    Name = 'name',
    Owner = 'owner',
    SshUrl = 'ssh_url',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external',
    Url = 'url'
}

export type Repositories_Set_Input = {
    added_by?: Maybe<Scalars['uuid']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    created_at_external?: Maybe<Scalars['timetz']>;
    description?: Maybe<Scalars['String']>;
    github_key_id?: Maybe<Scalars['uuid']>;
    homepage_url?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    is_archived?: Maybe<Scalars['Boolean']>;
    is_disabled?: Maybe<Scalars['Boolean']>;
    is_fork?: Maybe<Scalars['Boolean']>;
    is_locked?: Maybe<Scalars['Boolean']>;
    is_private?: Maybe<Scalars['Boolean']>;
    is_tracked?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    owner?: Maybe<Scalars['String']>;
    ssh_url?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    updated_at_external?: Maybe<Scalars['timetz']>;
    url?: Maybe<Scalars['String']>;
};

export enum Repositories_Update_Column {
    AddedBy = 'added_by',
    CreatedAt = 'created_at',
    CreatedAtExternal = 'created_at_external',
    Description = 'description',
    GithubKeyId = 'github_key_id',
    HomepageUrl = 'homepage_url',
    Id = 'id',
    IsArchived = 'is_archived',
    IsDisabled = 'is_disabled',
    IsFork = 'is_fork',
    IsLocked = 'is_locked',
    IsPrivate = 'is_private',
    IsTracked = 'is_tracked',
    Name = 'name',
    Owner = 'owner',
    SshUrl = 'ssh_url',
    UpdatedAt = 'updated_at',
    UpdatedAtExternal = 'updated_at_external',
    Url = 'url'
}

export type Repository_Api_Keys = {
    __typename?: 'repository_api_keys';
    created_at: Scalars['timestamptz'];
    id: Scalars['uuid'];
    key: Scalars['String'];
    name: Scalars['String'];
    provider: Scalars['String'];
    repositories: Array<Repositories>;
    repositories_aggregate: Repositories_Aggregate;
    user: Users;
    user_id: Scalars['uuid'];
};

export type Repository_Api_KeysRepositoriesArgs = {
    distinct_on?: Maybe<Array<Repositories_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repositories_Order_By>>;
    where?: Maybe<Repositories_Bool_Exp>;
};

export type Repository_Api_KeysRepositories_AggregateArgs = {
    distinct_on?: Maybe<Array<Repositories_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repositories_Order_By>>;
    where?: Maybe<Repositories_Bool_Exp>;
};

export type Repository_Api_Keys_Aggregate = {
    __typename?: 'repository_api_keys_aggregate';
    aggregate?: Maybe<Repository_Api_Keys_Aggregate_Fields>;
    nodes: Array<Repository_Api_Keys>;
};

export type Repository_Api_Keys_Aggregate_Fields = {
    __typename?: 'repository_api_keys_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Repository_Api_Keys_Max_Fields>;
    min?: Maybe<Repository_Api_Keys_Min_Fields>;
};

export type Repository_Api_Keys_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Repository_Api_Keys_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Repository_Api_Keys_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Repository_Api_Keys_Max_Order_By>;
    min?: Maybe<Repository_Api_Keys_Min_Order_By>;
};

export type Repository_Api_Keys_Arr_Rel_Insert_Input = {
    data: Array<Repository_Api_Keys_Insert_Input>;
    on_conflict?: Maybe<Repository_Api_Keys_On_Conflict>;
};

export type Repository_Api_Keys_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Repository_Api_Keys_Bool_Exp>>>;
    _not?: Maybe<Repository_Api_Keys_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Repository_Api_Keys_Bool_Exp>>>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    key?: Maybe<String_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    provider?: Maybe<String_Comparison_Exp>;
    repositories?: Maybe<Repositories_Bool_Exp>;
    user?: Maybe<Users_Bool_Exp>;
    user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Repository_Api_Keys_Constraint {
    GithubKeysKeyKey = 'github_keys_key_key',
    GithubKeysPkey = 'github_keys_pkey'
}

export type Repository_Api_Keys_Insert_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    key?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    provider?: Maybe<Scalars['String']>;
    repositories?: Maybe<Repositories_Arr_Rel_Insert_Input>;
    user?: Maybe<Users_Obj_Rel_Insert_Input>;
    user_id?: Maybe<Scalars['uuid']>;
};

export type Repository_Api_Keys_Max_Fields = {
    __typename?: 'repository_api_keys_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    key?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    provider?: Maybe<Scalars['String']>;
};

export type Repository_Api_Keys_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    key?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    provider?: Maybe<Order_By>;
};

export type Repository_Api_Keys_Min_Fields = {
    __typename?: 'repository_api_keys_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    key?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    provider?: Maybe<Scalars['String']>;
};

export type Repository_Api_Keys_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    key?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    provider?: Maybe<Order_By>;
};

export type Repository_Api_Keys_Mutation_Response = {
    __typename?: 'repository_api_keys_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Repository_Api_Keys>;
};

export type Repository_Api_Keys_Obj_Rel_Insert_Input = {
    data: Repository_Api_Keys_Insert_Input;
    on_conflict?: Maybe<Repository_Api_Keys_On_Conflict>;
};

export type Repository_Api_Keys_On_Conflict = {
    constraint: Repository_Api_Keys_Constraint;
    update_columns: Array<Repository_Api_Keys_Update_Column>;
    where?: Maybe<Repository_Api_Keys_Bool_Exp>;
};

export type Repository_Api_Keys_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    key?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    provider?: Maybe<Order_By>;
    repositories_aggregate?: Maybe<Repositories_Aggregate_Order_By>;
    user?: Maybe<Users_Order_By>;
    user_id?: Maybe<Order_By>;
};

export enum Repository_Api_Keys_Select_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    Key = 'key',
    Name = 'name',
    Provider = 'provider',
    UserId = 'user_id'
}

export type Repository_Api_Keys_Set_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    key?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    provider?: Maybe<Scalars['String']>;
    user_id?: Maybe<Scalars['uuid']>;
};

export enum Repository_Api_Keys_Update_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    Key = 'key',
    Name = 'name',
    Provider = 'provider',
    UserId = 'user_id'
}

export type Repository_Collaborators = {
    __typename?: 'repository_collaborators';
    github_user: Github_User;
    github_user_id: Scalars['uuid'];
    repository: Repositories;
    repository_id: Scalars['uuid'];
};

export type Repository_Collaborators_Aggregate = {
    __typename?: 'repository_collaborators_aggregate';
    aggregate?: Maybe<Repository_Collaborators_Aggregate_Fields>;
    nodes: Array<Repository_Collaborators>;
};

export type Repository_Collaborators_Aggregate_Fields = {
    __typename?: 'repository_collaborators_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Repository_Collaborators_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Repository_Collaborators_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Repository_Collaborators_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Repository_Collaborators_Arr_Rel_Insert_Input = {
    data: Array<Repository_Collaborators_Insert_Input>;
    on_conflict?: Maybe<Repository_Collaborators_On_Conflict>;
};

export type Repository_Collaborators_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Repository_Collaborators_Bool_Exp>>>;
    _not?: Maybe<Repository_Collaborators_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Repository_Collaborators_Bool_Exp>>>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    github_user_id?: Maybe<Uuid_Comparison_Exp>;
    repository?: Maybe<Repositories_Bool_Exp>;
    repository_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Repository_Collaborators_Constraint {
    RepositoryCollaboratorsPkey = 'repository_collaborators_pkey'
}

export type Repository_Collaborators_Insert_Input = {
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    github_user_id?: Maybe<Scalars['uuid']>;
    repository?: Maybe<Repositories_Obj_Rel_Insert_Input>;
    repository_id?: Maybe<Scalars['uuid']>;
};

export type Repository_Collaborators_Mutation_Response = {
    __typename?: 'repository_collaborators_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Repository_Collaborators>;
};

export type Repository_Collaborators_Obj_Rel_Insert_Input = {
    data: Repository_Collaborators_Insert_Input;
    on_conflict?: Maybe<Repository_Collaborators_On_Conflict>;
};

export type Repository_Collaborators_On_Conflict = {
    constraint: Repository_Collaborators_Constraint;
    update_columns: Array<Repository_Collaborators_Update_Column>;
    where?: Maybe<Repository_Collaborators_Bool_Exp>;
};

export type Repository_Collaborators_Order_By = {
    github_user?: Maybe<Github_User_Order_By>;
    github_user_id?: Maybe<Order_By>;
    repository?: Maybe<Repositories_Order_By>;
    repository_id?: Maybe<Order_By>;
};

export enum Repository_Collaborators_Select_Column {
    GithubUserId = 'github_user_id',
    RepositoryId = 'repository_id'
}

export type Repository_Collaborators_Set_Input = {
    github_user_id?: Maybe<Scalars['uuid']>;
    repository_id?: Maybe<Scalars['uuid']>;
};

export enum Repository_Collaborators_Update_Column {
    GithubUserId = 'github_user_id',
    RepositoryId = 'repository_id'
}

export type Repository_Stargazers = {
    __typename?: 'repository_stargazers';
    github_user: Github_User;
    github_user_id: Scalars['uuid'];
    id: Scalars['uuid'];
    repository: Repositories;
    repository_id: Scalars['uuid'];
};

export type Repository_Stargazers_Aggregate = {
    __typename?: 'repository_stargazers_aggregate';
    aggregate?: Maybe<Repository_Stargazers_Aggregate_Fields>;
    nodes: Array<Repository_Stargazers>;
};

export type Repository_Stargazers_Aggregate_Fields = {
    __typename?: 'repository_stargazers_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Repository_Stargazers_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Repository_Stargazers_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Repository_Stargazers_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Repository_Stargazers_Arr_Rel_Insert_Input = {
    data: Array<Repository_Stargazers_Insert_Input>;
    on_conflict?: Maybe<Repository_Stargazers_On_Conflict>;
};

export type Repository_Stargazers_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Repository_Stargazers_Bool_Exp>>>;
    _not?: Maybe<Repository_Stargazers_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Repository_Stargazers_Bool_Exp>>>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    github_user_id?: Maybe<Uuid_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    repository?: Maybe<Repositories_Bool_Exp>;
    repository_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Repository_Stargazers_Constraint {
    RepositoryStargazersPkey = 'repository_stargazers_pkey'
}

export type Repository_Stargazers_Insert_Input = {
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    github_user_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    repository?: Maybe<Repositories_Obj_Rel_Insert_Input>;
    repository_id?: Maybe<Scalars['uuid']>;
};

export type Repository_Stargazers_Mutation_Response = {
    __typename?: 'repository_stargazers_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Repository_Stargazers>;
};

export type Repository_Stargazers_Obj_Rel_Insert_Input = {
    data: Repository_Stargazers_Insert_Input;
    on_conflict?: Maybe<Repository_Stargazers_On_Conflict>;
};

export type Repository_Stargazers_On_Conflict = {
    constraint: Repository_Stargazers_Constraint;
    update_columns: Array<Repository_Stargazers_Update_Column>;
    where?: Maybe<Repository_Stargazers_Bool_Exp>;
};

export type Repository_Stargazers_Order_By = {
    github_user?: Maybe<Github_User_Order_By>;
    github_user_id?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    repository?: Maybe<Repositories_Order_By>;
    repository_id?: Maybe<Order_By>;
};

export enum Repository_Stargazers_Select_Column {
    GithubUserId = 'github_user_id',
    Id = 'id',
    RepositoryId = 'repository_id'
}

export type Repository_Stargazers_Set_Input = {
    github_user_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    repository_id?: Maybe<Scalars['uuid']>;
};

export enum Repository_Stargazers_Update_Column {
    GithubUserId = 'github_user_id',
    Id = 'id',
    RepositoryId = 'repository_id'
}

export type Repository_Topics = {
    __typename?: 'repository_topics';
    id: Scalars['uuid'];
    repository: Repositories;
    repository_id: Scalars['uuid'];
    topic: Topics;
    topic_id: Scalars['uuid'];
};

export type Repository_Topics_Aggregate = {
    __typename?: 'repository_topics_aggregate';
    aggregate?: Maybe<Repository_Topics_Aggregate_Fields>;
    nodes: Array<Repository_Topics>;
};

export type Repository_Topics_Aggregate_Fields = {
    __typename?: 'repository_topics_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Repository_Topics_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Repository_Topics_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Repository_Topics_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Repository_Topics_Arr_Rel_Insert_Input = {
    data: Array<Repository_Topics_Insert_Input>;
    on_conflict?: Maybe<Repository_Topics_On_Conflict>;
};

export type Repository_Topics_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Repository_Topics_Bool_Exp>>>;
    _not?: Maybe<Repository_Topics_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Repository_Topics_Bool_Exp>>>;
    id?: Maybe<Uuid_Comparison_Exp>;
    repository?: Maybe<Repositories_Bool_Exp>;
    repository_id?: Maybe<Uuid_Comparison_Exp>;
    topic?: Maybe<Topics_Bool_Exp>;
    topic_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Repository_Topics_Constraint {
    RepositoryTopicsPkey = 'repository_topics_pkey'
}

export type Repository_Topics_Insert_Input = {
    id?: Maybe<Scalars['uuid']>;
    repository?: Maybe<Repositories_Obj_Rel_Insert_Input>;
    repository_id?: Maybe<Scalars['uuid']>;
    topic?: Maybe<Topics_Obj_Rel_Insert_Input>;
    topic_id?: Maybe<Scalars['uuid']>;
};

export type Repository_Topics_Mutation_Response = {
    __typename?: 'repository_topics_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Repository_Topics>;
};

export type Repository_Topics_Obj_Rel_Insert_Input = {
    data: Repository_Topics_Insert_Input;
    on_conflict?: Maybe<Repository_Topics_On_Conflict>;
};

export type Repository_Topics_On_Conflict = {
    constraint: Repository_Topics_Constraint;
    update_columns: Array<Repository_Topics_Update_Column>;
    where?: Maybe<Repository_Topics_Bool_Exp>;
};

export type Repository_Topics_Order_By = {
    id?: Maybe<Order_By>;
    repository?: Maybe<Repositories_Order_By>;
    repository_id?: Maybe<Order_By>;
    topic?: Maybe<Topics_Order_By>;
    topic_id?: Maybe<Order_By>;
};

export enum Repository_Topics_Select_Column {
    Id = 'id',
    RepositoryId = 'repository_id',
    TopicId = 'topic_id'
}

export type Repository_Topics_Set_Input = {
    id?: Maybe<Scalars['uuid']>;
    repository_id?: Maybe<Scalars['uuid']>;
    topic_id?: Maybe<Scalars['uuid']>;
};

export enum Repository_Topics_Update_Column {
    Id = 'id',
    RepositoryId = 'repository_id',
    TopicId = 'topic_id'
}

export type Repository_Watchers = {
    __typename?: 'repository_watchers';
    github_user: Github_User;
    id: Scalars['uuid'];
    repository: Repositories;
    repository_id: Scalars['uuid'];
    watcher_user_id: Scalars['uuid'];
};

export type Repository_Watchers_Aggregate = {
    __typename?: 'repository_watchers_aggregate';
    aggregate?: Maybe<Repository_Watchers_Aggregate_Fields>;
    nodes: Array<Repository_Watchers>;
};

export type Repository_Watchers_Aggregate_Fields = {
    __typename?: 'repository_watchers_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Repository_Watchers_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Repository_Watchers_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Repository_Watchers_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Repository_Watchers_Arr_Rel_Insert_Input = {
    data: Array<Repository_Watchers_Insert_Input>;
    on_conflict?: Maybe<Repository_Watchers_On_Conflict>;
};

export type Repository_Watchers_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Repository_Watchers_Bool_Exp>>>;
    _not?: Maybe<Repository_Watchers_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Repository_Watchers_Bool_Exp>>>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    repository?: Maybe<Repositories_Bool_Exp>;
    repository_id?: Maybe<Uuid_Comparison_Exp>;
    watcher_user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Repository_Watchers_Constraint {
    RepositoryWatchersPkey = 'repository_watchers_pkey'
}

export type Repository_Watchers_Insert_Input = {
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    repository?: Maybe<Repositories_Obj_Rel_Insert_Input>;
    repository_id?: Maybe<Scalars['uuid']>;
    watcher_user_id?: Maybe<Scalars['uuid']>;
};

export type Repository_Watchers_Mutation_Response = {
    __typename?: 'repository_watchers_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Repository_Watchers>;
};

export type Repository_Watchers_Obj_Rel_Insert_Input = {
    data: Repository_Watchers_Insert_Input;
    on_conflict?: Maybe<Repository_Watchers_On_Conflict>;
};

export type Repository_Watchers_On_Conflict = {
    constraint: Repository_Watchers_Constraint;
    update_columns: Array<Repository_Watchers_Update_Column>;
    where?: Maybe<Repository_Watchers_Bool_Exp>;
};

export type Repository_Watchers_Order_By = {
    github_user?: Maybe<Github_User_Order_By>;
    id?: Maybe<Order_By>;
    repository?: Maybe<Repositories_Order_By>;
    repository_id?: Maybe<Order_By>;
    watcher_user_id?: Maybe<Order_By>;
};

export enum Repository_Watchers_Select_Column {
    Id = 'id',
    RepositoryId = 'repository_id',
    WatcherUserId = 'watcher_user_id'
}

export type Repository_Watchers_Set_Input = {
    id?: Maybe<Scalars['uuid']>;
    repository_id?: Maybe<Scalars['uuid']>;
    watcher_user_id?: Maybe<Scalars['uuid']>;
};

export enum Repository_Watchers_Update_Column {
    Id = 'id',
    RepositoryId = 'repository_id',
    WatcherUserId = 'watcher_user_id'
}

export type Review_Requests = {
    __typename?: 'review_requests';
    created_at: Scalars['timestamptz'];
    github_user: Github_User;
    id: Scalars['uuid'];
    pull_request: Pull_Requests;
    pull_request_id: Scalars['uuid'];
    requested_reviewer_id: Scalars['uuid'];
    updated_at: Scalars['timestamptz'];
};

export type Review_Requests_Aggregate = {
    __typename?: 'review_requests_aggregate';
    aggregate?: Maybe<Review_Requests_Aggregate_Fields>;
    nodes: Array<Review_Requests>;
};

export type Review_Requests_Aggregate_Fields = {
    __typename?: 'review_requests_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Review_Requests_Max_Fields>;
    min?: Maybe<Review_Requests_Min_Fields>;
};

export type Review_Requests_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Review_Requests_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Review_Requests_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Review_Requests_Max_Order_By>;
    min?: Maybe<Review_Requests_Min_Order_By>;
};

export type Review_Requests_Arr_Rel_Insert_Input = {
    data: Array<Review_Requests_Insert_Input>;
    on_conflict?: Maybe<Review_Requests_On_Conflict>;
};

export type Review_Requests_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Review_Requests_Bool_Exp>>>;
    _not?: Maybe<Review_Requests_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Review_Requests_Bool_Exp>>>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    pull_request?: Maybe<Pull_Requests_Bool_Exp>;
    pull_request_id?: Maybe<Uuid_Comparison_Exp>;
    requested_reviewer_id?: Maybe<Uuid_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Review_Requests_Constraint {
    ReviewRequestPkey = 'review_request_pkey'
}

export type Review_Requests_Insert_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    pull_request?: Maybe<Pull_Requests_Obj_Rel_Insert_Input>;
    pull_request_id?: Maybe<Scalars['uuid']>;
    requested_reviewer_id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Review_Requests_Max_Fields = {
    __typename?: 'review_requests_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Review_Requests_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Review_Requests_Min_Fields = {
    __typename?: 'review_requests_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Review_Requests_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Review_Requests_Mutation_Response = {
    __typename?: 'review_requests_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Review_Requests>;
};

export type Review_Requests_Obj_Rel_Insert_Input = {
    data: Review_Requests_Insert_Input;
    on_conflict?: Maybe<Review_Requests_On_Conflict>;
};

export type Review_Requests_On_Conflict = {
    constraint: Review_Requests_Constraint;
    update_columns: Array<Review_Requests_Update_Column>;
    where?: Maybe<Review_Requests_Bool_Exp>;
};

export type Review_Requests_Order_By = {
    created_at?: Maybe<Order_By>;
    github_user?: Maybe<Github_User_Order_By>;
    id?: Maybe<Order_By>;
    pull_request?: Maybe<Pull_Requests_Order_By>;
    pull_request_id?: Maybe<Order_By>;
    requested_reviewer_id?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export enum Review_Requests_Select_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    PullRequestId = 'pull_request_id',
    RequestedReviewerId = 'requested_reviewer_id',
    UpdatedAt = 'updated_at'
}

export type Review_Requests_Set_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    pull_request_id?: Maybe<Scalars['uuid']>;
    requested_reviewer_id?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Review_Requests_Update_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    PullRequestId = 'pull_request_id',
    RequestedReviewerId = 'requested_reviewer_id',
    UpdatedAt = 'updated_at'
}

export type Review_Thread_Comments = {
    __typename?: 'review_thread_comments';
    comment: Comments;
    comment_id: Scalars['uuid'];
    id: Scalars['uuid'];
    review_thread: Review_Threads;
    review_thread_id: Scalars['uuid'];
};

export type Review_Thread_Comments_Aggregate = {
    __typename?: 'review_thread_comments_aggregate';
    aggregate?: Maybe<Review_Thread_Comments_Aggregate_Fields>;
    nodes: Array<Review_Thread_Comments>;
};

export type Review_Thread_Comments_Aggregate_Fields = {
    __typename?: 'review_thread_comments_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Review_Thread_Comments_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Review_Thread_Comments_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Review_Thread_Comments_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Review_Thread_Comments_Arr_Rel_Insert_Input = {
    data: Array<Review_Thread_Comments_Insert_Input>;
    on_conflict?: Maybe<Review_Thread_Comments_On_Conflict>;
};

export type Review_Thread_Comments_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Review_Thread_Comments_Bool_Exp>>>;
    _not?: Maybe<Review_Thread_Comments_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Review_Thread_Comments_Bool_Exp>>>;
    comment?: Maybe<Comments_Bool_Exp>;
    comment_id?: Maybe<Uuid_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    review_thread?: Maybe<Review_Threads_Bool_Exp>;
    review_thread_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Review_Thread_Comments_Constraint {
    ReviewThreadCommentsPkey = 'review_thread_comments_pkey'
}

export type Review_Thread_Comments_Insert_Input = {
    comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
    comment_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    review_thread?: Maybe<Review_Threads_Obj_Rel_Insert_Input>;
    review_thread_id?: Maybe<Scalars['uuid']>;
};

export type Review_Thread_Comments_Mutation_Response = {
    __typename?: 'review_thread_comments_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Review_Thread_Comments>;
};

export type Review_Thread_Comments_Obj_Rel_Insert_Input = {
    data: Review_Thread_Comments_Insert_Input;
    on_conflict?: Maybe<Review_Thread_Comments_On_Conflict>;
};

export type Review_Thread_Comments_On_Conflict = {
    constraint: Review_Thread_Comments_Constraint;
    update_columns: Array<Review_Thread_Comments_Update_Column>;
    where?: Maybe<Review_Thread_Comments_Bool_Exp>;
};

export type Review_Thread_Comments_Order_By = {
    comment?: Maybe<Comments_Order_By>;
    comment_id?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    review_thread?: Maybe<Review_Threads_Order_By>;
    review_thread_id?: Maybe<Order_By>;
};

export enum Review_Thread_Comments_Select_Column {
    CommentId = 'comment_id',
    Id = 'id',
    ReviewThreadId = 'review_thread_id'
}

export type Review_Thread_Comments_Set_Input = {
    comment_id?: Maybe<Scalars['uuid']>;
    id?: Maybe<Scalars['uuid']>;
    review_thread_id?: Maybe<Scalars['uuid']>;
};

export enum Review_Thread_Comments_Update_Column {
    CommentId = 'comment_id',
    Id = 'id',
    ReviewThreadId = 'review_thread_id'
}

export type Review_Threads = {
    __typename?: 'review_threads';
    created_at: Scalars['timestamptz'];
    github_user?: Maybe<Github_User>;
    id: Scalars['uuid'];
    is_resolvedd: Scalars['Boolean'];
    pull_request: Pull_Requests;
    pull_request_id: Scalars['uuid'];
    repository: Repositories;
    repository_id: Scalars['uuid'];
    resolved_by?: Maybe<Scalars['uuid']>;
    review_thread_comments: Array<Review_Thread_Comments>;
    review_thread_comments_aggregate: Review_Thread_Comments_Aggregate;
    updated_at: Scalars['timestamptz'];
};

export type Review_ThreadsReview_Thread_CommentsArgs = {
    distinct_on?: Maybe<Array<Review_Thread_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Thread_Comments_Order_By>>;
    where?: Maybe<Review_Thread_Comments_Bool_Exp>;
};

export type Review_ThreadsReview_Thread_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Thread_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Thread_Comments_Order_By>>;
    where?: Maybe<Review_Thread_Comments_Bool_Exp>;
};

export type Review_Threads_Aggregate = {
    __typename?: 'review_threads_aggregate';
    aggregate?: Maybe<Review_Threads_Aggregate_Fields>;
    nodes: Array<Review_Threads>;
};

export type Review_Threads_Aggregate_Fields = {
    __typename?: 'review_threads_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Review_Threads_Max_Fields>;
    min?: Maybe<Review_Threads_Min_Fields>;
};

export type Review_Threads_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Review_Threads_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Review_Threads_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Review_Threads_Max_Order_By>;
    min?: Maybe<Review_Threads_Min_Order_By>;
};

export type Review_Threads_Arr_Rel_Insert_Input = {
    data: Array<Review_Threads_Insert_Input>;
    on_conflict?: Maybe<Review_Threads_On_Conflict>;
};

export type Review_Threads_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Review_Threads_Bool_Exp>>>;
    _not?: Maybe<Review_Threads_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Review_Threads_Bool_Exp>>>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    is_resolvedd?: Maybe<Boolean_Comparison_Exp>;
    pull_request?: Maybe<Pull_Requests_Bool_Exp>;
    pull_request_id?: Maybe<Uuid_Comparison_Exp>;
    repository?: Maybe<Repositories_Bool_Exp>;
    repository_id?: Maybe<Uuid_Comparison_Exp>;
    resolved_by?: Maybe<Uuid_Comparison_Exp>;
    review_thread_comments?: Maybe<Review_Thread_Comments_Bool_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Review_Threads_Constraint {
    ReviewThreadPkey = 'review_thread_pkey'
}

export type Review_Threads_Insert_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    is_resolvedd?: Maybe<Scalars['Boolean']>;
    pull_request?: Maybe<Pull_Requests_Obj_Rel_Insert_Input>;
    pull_request_id?: Maybe<Scalars['uuid']>;
    repository?: Maybe<Repositories_Obj_Rel_Insert_Input>;
    repository_id?: Maybe<Scalars['uuid']>;
    resolved_by?: Maybe<Scalars['uuid']>;
    review_thread_comments?: Maybe<Review_Thread_Comments_Arr_Rel_Insert_Input>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Review_Threads_Max_Fields = {
    __typename?: 'review_threads_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Review_Threads_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Review_Threads_Min_Fields = {
    __typename?: 'review_threads_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Review_Threads_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Review_Threads_Mutation_Response = {
    __typename?: 'review_threads_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Review_Threads>;
};

export type Review_Threads_Obj_Rel_Insert_Input = {
    data: Review_Threads_Insert_Input;
    on_conflict?: Maybe<Review_Threads_On_Conflict>;
};

export type Review_Threads_On_Conflict = {
    constraint: Review_Threads_Constraint;
    update_columns: Array<Review_Threads_Update_Column>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Review_Threads_Order_By = {
    created_at?: Maybe<Order_By>;
    github_user?: Maybe<Github_User_Order_By>;
    id?: Maybe<Order_By>;
    is_resolvedd?: Maybe<Order_By>;
    pull_request?: Maybe<Pull_Requests_Order_By>;
    pull_request_id?: Maybe<Order_By>;
    repository?: Maybe<Repositories_Order_By>;
    repository_id?: Maybe<Order_By>;
    resolved_by?: Maybe<Order_By>;
    review_thread_comments_aggregate?: Maybe<
        Review_Thread_Comments_Aggregate_Order_By
    >;
    updated_at?: Maybe<Order_By>;
};

export enum Review_Threads_Select_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    IsResolvedd = 'is_resolvedd',
    PullRequestId = 'pull_request_id',
    RepositoryId = 'repository_id',
    ResolvedBy = 'resolved_by',
    UpdatedAt = 'updated_at'
}

export type Review_Threads_Set_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    is_resolvedd?: Maybe<Scalars['Boolean']>;
    pull_request_id?: Maybe<Scalars['uuid']>;
    repository_id?: Maybe<Scalars['uuid']>;
    resolved_by?: Maybe<Scalars['uuid']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Review_Threads_Update_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    IsResolvedd = 'is_resolvedd',
    PullRequestId = 'pull_request_id',
    RepositoryId = 'repository_id',
    ResolvedBy = 'resolved_by',
    UpdatedAt = 'updated_at'
}

export type String_Comparison_Exp = {
    _eq?: Maybe<Scalars['String']>;
    _gt?: Maybe<Scalars['String']>;
    _gte?: Maybe<Scalars['String']>;
    _ilike?: Maybe<Scalars['String']>;
    _in?: Maybe<Array<Scalars['String']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _like?: Maybe<Scalars['String']>;
    _lt?: Maybe<Scalars['String']>;
    _lte?: Maybe<Scalars['String']>;
    _neq?: Maybe<Scalars['String']>;
    _nilike?: Maybe<Scalars['String']>;
    _nin?: Maybe<Array<Scalars['String']>>;
    _nlike?: Maybe<Scalars['String']>;
    _nsimilar?: Maybe<Scalars['String']>;
    _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
    __typename?: 'subscription_root';
    branch_commits: Array<Branch_Commits>;
    branch_commits_aggregate: Branch_Commits_Aggregate;
    branch_commits_by_pk?: Maybe<Branch_Commits>;
    branches: Array<Branches>;
    branches_aggregate: Branches_Aggregate;
    branches_by_pk?: Maybe<Branches>;
    comments: Array<Comments>;
    comments_aggregate: Comments_Aggregate;
    comments_by_pk?: Maybe<Comments>;
    commits: Array<Commits>;
    commits_aggregate: Commits_Aggregate;
    commits_by_pk?: Maybe<Commits>;
    file_diffs: Array<File_Diffs>;
    file_diffs_aggregate: File_Diffs_Aggregate;
    file_diffs_by_pk?: Maybe<File_Diffs>;
    games: Array<Games>;
    games_aggregate: Games_Aggregate;
    games_by_pk?: Maybe<Games>;
    github_user: Array<Github_User>;
    github_user_aggregate: Github_User_Aggregate;
    github_user_by_pk?: Maybe<Github_User>;
    github_user_following: Array<Github_User_Following>;
    github_user_following_aggregate: Github_User_Following_Aggregate;
    github_user_following_by_pk?: Maybe<Github_User_Following>;
    github_webhook_events: Array<Github_Webhook_Events>;
    github_webhook_events_aggregate: Github_Webhook_Events_Aggregate;
    github_webhook_events_by_pk?: Maybe<Github_Webhook_Events>;
    issue_assignees: Array<Issue_Assignees>;
    issue_assignees_aggregate: Issue_Assignees_Aggregate;
    issue_assignees_by_pk?: Maybe<Issue_Assignees>;
    issue_comments: Array<Issue_Comments>;
    issue_comments_aggregate: Issue_Comments_Aggregate;
    issue_comments_by_pk?: Maybe<Issue_Comments>;
    issue_labels: Array<Issue_Labels>;
    issue_labels_aggregate: Issue_Labels_Aggregate;
    issue_labels_by_pk?: Maybe<Issue_Labels>;
    issue_participants: Array<Issue_Participants>;
    issue_participants_aggregate: Issue_Participants_Aggregate;
    issue_participants_by_pk?: Maybe<Issue_Participants>;
    issues: Array<Issues>;
    issues_aggregate: Issues_Aggregate;
    issues_by_pk?: Maybe<Issues>;
    labels: Array<Labels>;
    labels_aggregate: Labels_Aggregate;
    labels_by_pk?: Maybe<Labels>;
    pull_request_assignees: Array<Pull_Request_Assignees>;
    pull_request_assignees_aggregate: Pull_Request_Assignees_Aggregate;
    pull_request_assignees_by_pk?: Maybe<Pull_Request_Assignees>;
    pull_request_comments: Array<Pull_Request_Comments>;
    pull_request_comments_aggregate: Pull_Request_Comments_Aggregate;
    pull_request_comments_by_pk?: Maybe<Pull_Request_Comments>;
    pull_request_commits: Array<Pull_Request_Commits>;
    pull_request_commits_aggregate: Pull_Request_Commits_Aggregate;
    pull_request_commits_by_pk?: Maybe<Pull_Request_Commits>;
    pull_request_labels: Array<Pull_Request_Labels>;
    pull_request_labels_aggregate: Pull_Request_Labels_Aggregate;
    pull_request_labels_by_pk?: Maybe<Pull_Request_Labels>;
    pull_request_review_comments: Array<Pull_Request_Review_Comments>;
    pull_request_review_comments_aggregate: Pull_Request_Review_Comments_Aggregate;
    pull_request_review_comments_by_pk?: Maybe<Pull_Request_Review_Comments>;
    pull_request_review_commits: Array<Pull_Request_Review_Commits>;
    pull_request_review_commits_aggregate: Pull_Request_Review_Commits_Aggregate;
    pull_request_review_commits_by_pk?: Maybe<Pull_Request_Review_Commits>;
    pull_request_reviews: Array<Pull_Request_Reviews>;
    pull_request_reviews_aggregate: Pull_Request_Reviews_Aggregate;
    pull_request_reviews_by_pk?: Maybe<Pull_Request_Reviews>;
    pull_requests: Array<Pull_Requests>;
    pull_requests_aggregate: Pull_Requests_Aggregate;
    pull_requests_by_pk?: Maybe<Pull_Requests>;
    related_topics: Array<Related_Topics>;
    related_topics_aggregate: Related_Topics_Aggregate;
    related_topics_by_pk?: Maybe<Related_Topics>;
    repositories: Array<Repositories>;
    repositories_aggregate: Repositories_Aggregate;
    repositories_by_pk?: Maybe<Repositories>;
    repository_api_keys: Array<Repository_Api_Keys>;
    repository_api_keys_aggregate: Repository_Api_Keys_Aggregate;
    repository_api_keys_by_pk?: Maybe<Repository_Api_Keys>;
    repository_collaborators: Array<Repository_Collaborators>;
    repository_collaborators_aggregate: Repository_Collaborators_Aggregate;
    repository_collaborators_by_pk?: Maybe<Repository_Collaborators>;
    repository_stargazers: Array<Repository_Stargazers>;
    repository_stargazers_aggregate: Repository_Stargazers_Aggregate;
    repository_stargazers_by_pk?: Maybe<Repository_Stargazers>;
    repository_topics: Array<Repository_Topics>;
    repository_topics_aggregate: Repository_Topics_Aggregate;
    repository_topics_by_pk?: Maybe<Repository_Topics>;
    repository_watchers: Array<Repository_Watchers>;
    repository_watchers_aggregate: Repository_Watchers_Aggregate;
    repository_watchers_by_pk?: Maybe<Repository_Watchers>;
    review_requests: Array<Review_Requests>;
    review_requests_aggregate: Review_Requests_Aggregate;
    review_requests_by_pk?: Maybe<Review_Requests>;
    review_thread_comments: Array<Review_Thread_Comments>;
    review_thread_comments_aggregate: Review_Thread_Comments_Aggregate;
    review_thread_comments_by_pk?: Maybe<Review_Thread_Comments>;
    review_threads: Array<Review_Threads>;
    review_threads_aggregate: Review_Threads_Aggregate;
    review_threads_by_pk?: Maybe<Review_Threads>;
    topic_stargazers: Array<Topic_Stargazers>;
    topic_stargazers_aggregate: Topic_Stargazers_Aggregate;
    topic_stargazers_by_pk?: Maybe<Topic_Stargazers>;
    topics: Array<Topics>;
    topics_aggregate: Topics_Aggregate;
    topics_by_pk?: Maybe<Topics>;
    users: Array<Users>;
    users_aggregate: Users_Aggregate;
    users_by_pk?: Maybe<Users>;
};

export type Subscription_RootBranch_CommitsArgs = {
    distinct_on?: Maybe<Array<Branch_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branch_Commits_Order_By>>;
    where?: Maybe<Branch_Commits_Bool_Exp>;
};

export type Subscription_RootBranch_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Branch_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branch_Commits_Order_By>>;
    where?: Maybe<Branch_Commits_Bool_Exp>;
};

export type Subscription_RootBranch_Commits_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootBranchesArgs = {
    distinct_on?: Maybe<Array<Branches_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branches_Order_By>>;
    where?: Maybe<Branches_Bool_Exp>;
};

export type Subscription_RootBranches_AggregateArgs = {
    distinct_on?: Maybe<Array<Branches_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Branches_Order_By>>;
    where?: Maybe<Branches_Bool_Exp>;
};

export type Subscription_RootBranches_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootCommentsArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

export type Subscription_RootComments_AggregateArgs = {
    distinct_on?: Maybe<Array<Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Comments_Order_By>>;
    where?: Maybe<Comments_Bool_Exp>;
};

export type Subscription_RootComments_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootCommitsArgs = {
    distinct_on?: Maybe<Array<Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Commits_Order_By>>;
    where?: Maybe<Commits_Bool_Exp>;
};

export type Subscription_RootCommits_AggregateArgs = {
    distinct_on?: Maybe<Array<Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Commits_Order_By>>;
    where?: Maybe<Commits_Bool_Exp>;
};

export type Subscription_RootCommits_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootFile_DiffsArgs = {
    distinct_on?: Maybe<Array<File_Diffs_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<File_Diffs_Order_By>>;
    where?: Maybe<File_Diffs_Bool_Exp>;
};

export type Subscription_RootFile_Diffs_AggregateArgs = {
    distinct_on?: Maybe<Array<File_Diffs_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<File_Diffs_Order_By>>;
    where?: Maybe<File_Diffs_Bool_Exp>;
};

export type Subscription_RootFile_Diffs_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootGamesArgs = {
    distinct_on?: Maybe<Array<Games_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Games_Order_By>>;
    where?: Maybe<Games_Bool_Exp>;
};

export type Subscription_RootGames_AggregateArgs = {
    distinct_on?: Maybe<Array<Games_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Games_Order_By>>;
    where?: Maybe<Games_Bool_Exp>;
};

export type Subscription_RootGames_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootGithub_UserArgs = {
    distinct_on?: Maybe<Array<Github_User_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Order_By>>;
    where?: Maybe<Github_User_Bool_Exp>;
};

export type Subscription_RootGithub_User_AggregateArgs = {
    distinct_on?: Maybe<Array<Github_User_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Order_By>>;
    where?: Maybe<Github_User_Bool_Exp>;
};

export type Subscription_RootGithub_User_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootGithub_User_FollowingArgs = {
    distinct_on?: Maybe<Array<Github_User_Following_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Following_Order_By>>;
    where?: Maybe<Github_User_Following_Bool_Exp>;
};

export type Subscription_RootGithub_User_Following_AggregateArgs = {
    distinct_on?: Maybe<Array<Github_User_Following_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Following_Order_By>>;
    where?: Maybe<Github_User_Following_Bool_Exp>;
};

export type Subscription_RootGithub_User_Following_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootGithub_Webhook_EventsArgs = {
    distinct_on?: Maybe<Array<Github_Webhook_Events_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_Webhook_Events_Order_By>>;
    where?: Maybe<Github_Webhook_Events_Bool_Exp>;
};

export type Subscription_RootGithub_Webhook_Events_AggregateArgs = {
    distinct_on?: Maybe<Array<Github_Webhook_Events_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_Webhook_Events_Order_By>>;
    where?: Maybe<Github_Webhook_Events_Bool_Exp>;
};

export type Subscription_RootGithub_Webhook_Events_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootIssue_AssigneesArgs = {
    distinct_on?: Maybe<Array<Issue_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Assignees_Order_By>>;
    where?: Maybe<Issue_Assignees_Bool_Exp>;
};

export type Subscription_RootIssue_Assignees_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Assignees_Order_By>>;
    where?: Maybe<Issue_Assignees_Bool_Exp>;
};

export type Subscription_RootIssue_Assignees_By_PkArgs = {
    github_user_id: Scalars['uuid'];
    issue_id: Scalars['uuid'];
};

export type Subscription_RootIssue_CommentsArgs = {
    distinct_on?: Maybe<Array<Issue_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Comments_Order_By>>;
    where?: Maybe<Issue_Comments_Bool_Exp>;
};

export type Subscription_RootIssue_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Comments_Order_By>>;
    where?: Maybe<Issue_Comments_Bool_Exp>;
};

export type Subscription_RootIssue_Comments_By_PkArgs = {
    comment_id: Scalars['uuid'];
    issue_id: Scalars['uuid'];
};

export type Subscription_RootIssue_LabelsArgs = {
    distinct_on?: Maybe<Array<Issue_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Labels_Order_By>>;
    where?: Maybe<Issue_Labels_Bool_Exp>;
};

export type Subscription_RootIssue_Labels_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Labels_Order_By>>;
    where?: Maybe<Issue_Labels_Bool_Exp>;
};

export type Subscription_RootIssue_Labels_By_PkArgs = {
    issue_id: Scalars['uuid'];
    label_id: Scalars['uuid'];
};

export type Subscription_RootIssue_ParticipantsArgs = {
    distinct_on?: Maybe<Array<Issue_Participants_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Participants_Order_By>>;
    where?: Maybe<Issue_Participants_Bool_Exp>;
};

export type Subscription_RootIssue_Participants_AggregateArgs = {
    distinct_on?: Maybe<Array<Issue_Participants_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issue_Participants_Order_By>>;
    where?: Maybe<Issue_Participants_Bool_Exp>;
};

export type Subscription_RootIssue_Participants_By_PkArgs = {
    github_user_id: Scalars['uuid'];
    issue_id: Scalars['uuid'];
};

export type Subscription_RootIssuesArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Subscription_RootIssues_AggregateArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Subscription_RootIssues_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootLabelsArgs = {
    distinct_on?: Maybe<Array<Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Labels_Order_By>>;
    where?: Maybe<Labels_Bool_Exp>;
};

export type Subscription_RootLabels_AggregateArgs = {
    distinct_on?: Maybe<Array<Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Labels_Order_By>>;
    where?: Maybe<Labels_Bool_Exp>;
};

export type Subscription_RootLabels_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootPull_Request_AssigneesArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Assignees_Order_By>>;
    where?: Maybe<Pull_Request_Assignees_Bool_Exp>;
};

export type Subscription_RootPull_Request_Assignees_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Assignees_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Assignees_Order_By>>;
    where?: Maybe<Pull_Request_Assignees_Bool_Exp>;
};

export type Subscription_RootPull_Request_Assignees_By_PkArgs = {
    github_user_id: Scalars['uuid'];
    pull_request_id: Scalars['uuid'];
};

export type Subscription_RootPull_Request_CommentsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Comments_Bool_Exp>;
};

export type Subscription_RootPull_Request_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Comments_Bool_Exp>;
};

export type Subscription_RootPull_Request_Comments_By_PkArgs = {
    comment_id: Scalars['uuid'];
    pull_request_id: Scalars['uuid'];
};

export type Subscription_RootPull_Request_CommitsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Commits_Bool_Exp>;
};

export type Subscription_RootPull_Request_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Commits_Bool_Exp>;
};

export type Subscription_RootPull_Request_Commits_By_PkArgs = {
    commit_id: Scalars['uuid'];
    pull_request_id: Scalars['uuid'];
};

export type Subscription_RootPull_Request_LabelsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Labels_Order_By>>;
    where?: Maybe<Pull_Request_Labels_Bool_Exp>;
};

export type Subscription_RootPull_Request_Labels_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Labels_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Labels_Order_By>>;
    where?: Maybe<Pull_Request_Labels_Bool_Exp>;
};

export type Subscription_RootPull_Request_Labels_By_PkArgs = {
    label_id: Scalars['uuid'];
    pull_request_id: Scalars['uuid'];
};

export type Subscription_RootPull_Request_Review_CommentsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
};

export type Subscription_RootPull_Request_Review_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Comments_Order_By>>;
    where?: Maybe<Pull_Request_Review_Comments_Bool_Exp>;
};

export type Subscription_RootPull_Request_Review_Comments_By_PkArgs = {
    comment_id: Scalars['uuid'];
    pull_request_review_id: Scalars['uuid'];
};

export type Subscription_RootPull_Request_Review_CommitsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
};

export type Subscription_RootPull_Request_Review_Commits_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Review_Commits_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Review_Commits_Order_By>>;
    where?: Maybe<Pull_Request_Review_Commits_Bool_Exp>;
};

export type Subscription_RootPull_Request_Review_Commits_By_PkArgs = {
    commit_id: Scalars['uuid'];
    pull_request_review_id: Scalars['uuid'];
};

export type Subscription_RootPull_Request_ReviewsArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Reviews_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Reviews_Order_By>>;
    where?: Maybe<Pull_Request_Reviews_Bool_Exp>;
};

export type Subscription_RootPull_Request_Reviews_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Request_Reviews_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Request_Reviews_Order_By>>;
    where?: Maybe<Pull_Request_Reviews_Bool_Exp>;
};

export type Subscription_RootPull_Request_Reviews_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootPull_RequestsArgs = {
    distinct_on?: Maybe<Array<Pull_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Requests_Order_By>>;
    where?: Maybe<Pull_Requests_Bool_Exp>;
};

export type Subscription_RootPull_Requests_AggregateArgs = {
    distinct_on?: Maybe<Array<Pull_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Pull_Requests_Order_By>>;
    where?: Maybe<Pull_Requests_Bool_Exp>;
};

export type Subscription_RootPull_Requests_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootRelated_TopicsArgs = {
    distinct_on?: Maybe<Array<Related_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Related_Topics_Order_By>>;
    where?: Maybe<Related_Topics_Bool_Exp>;
};

export type Subscription_RootRelated_Topics_AggregateArgs = {
    distinct_on?: Maybe<Array<Related_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Related_Topics_Order_By>>;
    where?: Maybe<Related_Topics_Bool_Exp>;
};

export type Subscription_RootRelated_Topics_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootRepositoriesArgs = {
    distinct_on?: Maybe<Array<Repositories_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repositories_Order_By>>;
    where?: Maybe<Repositories_Bool_Exp>;
};

export type Subscription_RootRepositories_AggregateArgs = {
    distinct_on?: Maybe<Array<Repositories_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repositories_Order_By>>;
    where?: Maybe<Repositories_Bool_Exp>;
};

export type Subscription_RootRepositories_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootRepository_Api_KeysArgs = {
    distinct_on?: Maybe<Array<Repository_Api_Keys_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Api_Keys_Order_By>>;
    where?: Maybe<Repository_Api_Keys_Bool_Exp>;
};

export type Subscription_RootRepository_Api_Keys_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Api_Keys_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Api_Keys_Order_By>>;
    where?: Maybe<Repository_Api_Keys_Bool_Exp>;
};

export type Subscription_RootRepository_Api_Keys_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootRepository_CollaboratorsArgs = {
    distinct_on?: Maybe<Array<Repository_Collaborators_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Collaborators_Order_By>>;
    where?: Maybe<Repository_Collaborators_Bool_Exp>;
};

export type Subscription_RootRepository_Collaborators_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Collaborators_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Collaborators_Order_By>>;
    where?: Maybe<Repository_Collaborators_Bool_Exp>;
};

export type Subscription_RootRepository_Collaborators_By_PkArgs = {
    github_user_id: Scalars['uuid'];
    repository_id: Scalars['uuid'];
};

export type Subscription_RootRepository_StargazersArgs = {
    distinct_on?: Maybe<Array<Repository_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Stargazers_Order_By>>;
    where?: Maybe<Repository_Stargazers_Bool_Exp>;
};

export type Subscription_RootRepository_Stargazers_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Stargazers_Order_By>>;
    where?: Maybe<Repository_Stargazers_Bool_Exp>;
};

export type Subscription_RootRepository_Stargazers_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootRepository_TopicsArgs = {
    distinct_on?: Maybe<Array<Repository_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Topics_Order_By>>;
    where?: Maybe<Repository_Topics_Bool_Exp>;
};

export type Subscription_RootRepository_Topics_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Topics_Order_By>>;
    where?: Maybe<Repository_Topics_Bool_Exp>;
};

export type Subscription_RootRepository_Topics_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootRepository_WatchersArgs = {
    distinct_on?: Maybe<Array<Repository_Watchers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Watchers_Order_By>>;
    where?: Maybe<Repository_Watchers_Bool_Exp>;
};

export type Subscription_RootRepository_Watchers_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Watchers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Watchers_Order_By>>;
    where?: Maybe<Repository_Watchers_Bool_Exp>;
};

export type Subscription_RootRepository_Watchers_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootReview_RequestsArgs = {
    distinct_on?: Maybe<Array<Review_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Requests_Order_By>>;
    where?: Maybe<Review_Requests_Bool_Exp>;
};

export type Subscription_RootReview_Requests_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Requests_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Requests_Order_By>>;
    where?: Maybe<Review_Requests_Bool_Exp>;
};

export type Subscription_RootReview_Requests_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootReview_Thread_CommentsArgs = {
    distinct_on?: Maybe<Array<Review_Thread_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Thread_Comments_Order_By>>;
    where?: Maybe<Review_Thread_Comments_Bool_Exp>;
};

export type Subscription_RootReview_Thread_Comments_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Thread_Comments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Thread_Comments_Order_By>>;
    where?: Maybe<Review_Thread_Comments_Bool_Exp>;
};

export type Subscription_RootReview_Thread_Comments_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootReview_ThreadsArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Subscription_RootReview_Threads_AggregateArgs = {
    distinct_on?: Maybe<Array<Review_Threads_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Review_Threads_Order_By>>;
    where?: Maybe<Review_Threads_Bool_Exp>;
};

export type Subscription_RootReview_Threads_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootTopic_StargazersArgs = {
    distinct_on?: Maybe<Array<Topic_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topic_Stargazers_Order_By>>;
    where?: Maybe<Topic_Stargazers_Bool_Exp>;
};

export type Subscription_RootTopic_Stargazers_AggregateArgs = {
    distinct_on?: Maybe<Array<Topic_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topic_Stargazers_Order_By>>;
    where?: Maybe<Topic_Stargazers_Bool_Exp>;
};

export type Subscription_RootTopic_Stargazers_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootTopicsArgs = {
    distinct_on?: Maybe<Array<Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topics_Order_By>>;
    where?: Maybe<Topics_Bool_Exp>;
};

export type Subscription_RootTopics_AggregateArgs = {
    distinct_on?: Maybe<Array<Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topics_Order_By>>;
    where?: Maybe<Topics_Bool_Exp>;
};

export type Subscription_RootTopics_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Subscription_RootUsersArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
    id: Scalars['uuid'];
};

export type Timestamptz_Comparison_Exp = {
    _eq?: Maybe<Scalars['timestamptz']>;
    _gt?: Maybe<Scalars['timestamptz']>;
    _gte?: Maybe<Scalars['timestamptz']>;
    _in?: Maybe<Array<Scalars['timestamptz']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['timestamptz']>;
    _lte?: Maybe<Scalars['timestamptz']>;
    _neq?: Maybe<Scalars['timestamptz']>;
    _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Timetz_Comparison_Exp = {
    _eq?: Maybe<Scalars['timetz']>;
    _gt?: Maybe<Scalars['timetz']>;
    _gte?: Maybe<Scalars['timetz']>;
    _in?: Maybe<Array<Scalars['timetz']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['timetz']>;
    _lte?: Maybe<Scalars['timetz']>;
    _neq?: Maybe<Scalars['timetz']>;
    _nin?: Maybe<Array<Scalars['timetz']>>;
};

export type Topic_Stargazers = {
    __typename?: 'topic_stargazers';
    github_user: Github_User;
    id: Scalars['uuid'];
    topic: Topics;
    topic_id: Scalars['uuid'];
    user_id: Scalars['uuid'];
};

export type Topic_Stargazers_Aggregate = {
    __typename?: 'topic_stargazers_aggregate';
    aggregate?: Maybe<Topic_Stargazers_Aggregate_Fields>;
    nodes: Array<Topic_Stargazers>;
};

export type Topic_Stargazers_Aggregate_Fields = {
    __typename?: 'topic_stargazers_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
};

export type Topic_Stargazers_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Topic_Stargazers_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Topic_Stargazers_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
};

export type Topic_Stargazers_Arr_Rel_Insert_Input = {
    data: Array<Topic_Stargazers_Insert_Input>;
    on_conflict?: Maybe<Topic_Stargazers_On_Conflict>;
};

export type Topic_Stargazers_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Topic_Stargazers_Bool_Exp>>>;
    _not?: Maybe<Topic_Stargazers_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Topic_Stargazers_Bool_Exp>>>;
    github_user?: Maybe<Github_User_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    topic?: Maybe<Topics_Bool_Exp>;
    topic_id?: Maybe<Uuid_Comparison_Exp>;
    user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Topic_Stargazers_Constraint {
    TopicStargazersPkey = 'topic_stargazers_pkey'
}

export type Topic_Stargazers_Insert_Input = {
    github_user?: Maybe<Github_User_Obj_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    topic?: Maybe<Topics_Obj_Rel_Insert_Input>;
    topic_id?: Maybe<Scalars['uuid']>;
    user_id?: Maybe<Scalars['uuid']>;
};

export type Topic_Stargazers_Mutation_Response = {
    __typename?: 'topic_stargazers_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Topic_Stargazers>;
};

export type Topic_Stargazers_Obj_Rel_Insert_Input = {
    data: Topic_Stargazers_Insert_Input;
    on_conflict?: Maybe<Topic_Stargazers_On_Conflict>;
};

export type Topic_Stargazers_On_Conflict = {
    constraint: Topic_Stargazers_Constraint;
    update_columns: Array<Topic_Stargazers_Update_Column>;
    where?: Maybe<Topic_Stargazers_Bool_Exp>;
};

export type Topic_Stargazers_Order_By = {
    github_user?: Maybe<Github_User_Order_By>;
    id?: Maybe<Order_By>;
    topic?: Maybe<Topics_Order_By>;
    topic_id?: Maybe<Order_By>;
    user_id?: Maybe<Order_By>;
};

export enum Topic_Stargazers_Select_Column {
    Id = 'id',
    TopicId = 'topic_id',
    UserId = 'user_id'
}

export type Topic_Stargazers_Set_Input = {
    id?: Maybe<Scalars['uuid']>;
    topic_id?: Maybe<Scalars['uuid']>;
    user_id?: Maybe<Scalars['uuid']>;
};

export enum Topic_Stargazers_Update_Column {
    Id = 'id',
    TopicId = 'topic_id',
    UserId = 'user_id'
}

export type Topics = {
    __typename?: 'topics';
    created_at: Scalars['timestamptz'];
    id: Scalars['uuid'];
    name: Scalars['String'];
    relatedTopicsByTopicReferenceId: Array<Related_Topics>;
    relatedTopicsByTopicReferenceId_aggregate: Related_Topics_Aggregate;
    related_topics: Array<Related_Topics>;
    related_topics_aggregate: Related_Topics_Aggregate;
    repository_topics: Array<Repository_Topics>;
    repository_topics_aggregate: Repository_Topics_Aggregate;
    topic_stargazers: Array<Topic_Stargazers>;
    topic_stargazers_aggregate: Topic_Stargazers_Aggregate;
    updated_at: Scalars['timestamptz'];
};

export type TopicsRelatedTopicsByTopicReferenceIdArgs = {
    distinct_on?: Maybe<Array<Related_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Related_Topics_Order_By>>;
    where?: Maybe<Related_Topics_Bool_Exp>;
};

export type TopicsRelatedTopicsByTopicReferenceId_AggregateArgs = {
    distinct_on?: Maybe<Array<Related_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Related_Topics_Order_By>>;
    where?: Maybe<Related_Topics_Bool_Exp>;
};

export type TopicsRelated_TopicsArgs = {
    distinct_on?: Maybe<Array<Related_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Related_Topics_Order_By>>;
    where?: Maybe<Related_Topics_Bool_Exp>;
};

export type TopicsRelated_Topics_AggregateArgs = {
    distinct_on?: Maybe<Array<Related_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Related_Topics_Order_By>>;
    where?: Maybe<Related_Topics_Bool_Exp>;
};

export type TopicsRepository_TopicsArgs = {
    distinct_on?: Maybe<Array<Repository_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Topics_Order_By>>;
    where?: Maybe<Repository_Topics_Bool_Exp>;
};

export type TopicsRepository_Topics_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Topics_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Topics_Order_By>>;
    where?: Maybe<Repository_Topics_Bool_Exp>;
};

export type TopicsTopic_StargazersArgs = {
    distinct_on?: Maybe<Array<Topic_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topic_Stargazers_Order_By>>;
    where?: Maybe<Topic_Stargazers_Bool_Exp>;
};

export type TopicsTopic_Stargazers_AggregateArgs = {
    distinct_on?: Maybe<Array<Topic_Stargazers_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Topic_Stargazers_Order_By>>;
    where?: Maybe<Topic_Stargazers_Bool_Exp>;
};

export type Topics_Aggregate = {
    __typename?: 'topics_aggregate';
    aggregate?: Maybe<Topics_Aggregate_Fields>;
    nodes: Array<Topics>;
};

export type Topics_Aggregate_Fields = {
    __typename?: 'topics_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Topics_Max_Fields>;
    min?: Maybe<Topics_Min_Fields>;
};

export type Topics_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Topics_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Topics_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Topics_Max_Order_By>;
    min?: Maybe<Topics_Min_Order_By>;
};

export type Topics_Arr_Rel_Insert_Input = {
    data: Array<Topics_Insert_Input>;
    on_conflict?: Maybe<Topics_On_Conflict>;
};

export type Topics_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Topics_Bool_Exp>>>;
    _not?: Maybe<Topics_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Topics_Bool_Exp>>>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    relatedTopicsByTopicReferenceId?: Maybe<Related_Topics_Bool_Exp>;
    related_topics?: Maybe<Related_Topics_Bool_Exp>;
    repository_topics?: Maybe<Repository_Topics_Bool_Exp>;
    topic_stargazers?: Maybe<Topic_Stargazers_Bool_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Topics_Constraint {
    TopicsPkey = 'topics_pkey'
}

export type Topics_Insert_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    relatedTopicsByTopicReferenceId?: Maybe<
        Related_Topics_Arr_Rel_Insert_Input
    >;
    related_topics?: Maybe<Related_Topics_Arr_Rel_Insert_Input>;
    repository_topics?: Maybe<Repository_Topics_Arr_Rel_Insert_Input>;
    topic_stargazers?: Maybe<Topic_Stargazers_Arr_Rel_Insert_Input>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Topics_Max_Fields = {
    __typename?: 'topics_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Topics_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Topics_Min_Fields = {
    __typename?: 'topics_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Topics_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Topics_Mutation_Response = {
    __typename?: 'topics_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Topics>;
};

export type Topics_Obj_Rel_Insert_Input = {
    data: Topics_Insert_Input;
    on_conflict?: Maybe<Topics_On_Conflict>;
};

export type Topics_On_Conflict = {
    constraint: Topics_Constraint;
    update_columns: Array<Topics_Update_Column>;
    where?: Maybe<Topics_Bool_Exp>;
};

export type Topics_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    relatedTopicsByTopicReferenceId_aggregate?: Maybe<
        Related_Topics_Aggregate_Order_By
    >;
    related_topics_aggregate?: Maybe<Related_Topics_Aggregate_Order_By>;
    repository_topics_aggregate?: Maybe<Repository_Topics_Aggregate_Order_By>;
    topic_stargazers_aggregate?: Maybe<Topic_Stargazers_Aggregate_Order_By>;
    updated_at?: Maybe<Order_By>;
};

export enum Topics_Select_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    Name = 'name',
    UpdatedAt = 'updated_at'
}

export type Topics_Set_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Topics_Update_Column {
    CreatedAt = 'created_at',
    Id = 'id',
    Name = 'name',
    UpdatedAt = 'updated_at'
}

export type Users = {
    __typename?: 'users';
    api_keys: Array<Repository_Api_Keys>;
    api_keys_aggregate: Repository_Api_Keys_Aggregate;
    created_at: Scalars['timestamptz'];
    email: Scalars['String'];
    games: Array<Games>;
    games_aggregate: Games_Aggregate;
    git_login: Scalars['String'];
    githubUserFollowingsByFollowingUserId: Array<Github_User_Following>;
    githubUserFollowingsByFollowingUserId_aggregate: Github_User_Following_Aggregate;
    github_user_followings: Array<Github_User_Following>;
    github_user_followings_aggregate: Github_User_Following_Aggregate;
    id: Scalars['uuid'];
    name: Scalars['String'];
    password: Scalars['String'];
    repositories: Array<Repositories>;
    repositories_aggregate: Repositories_Aggregate;
    role: Scalars['String'];
    updated_at: Scalars['timestamptz'];
};

export type UsersApi_KeysArgs = {
    distinct_on?: Maybe<Array<Repository_Api_Keys_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Api_Keys_Order_By>>;
    where?: Maybe<Repository_Api_Keys_Bool_Exp>;
};

export type UsersApi_Keys_AggregateArgs = {
    distinct_on?: Maybe<Array<Repository_Api_Keys_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repository_Api_Keys_Order_By>>;
    where?: Maybe<Repository_Api_Keys_Bool_Exp>;
};

export type UsersGamesArgs = {
    distinct_on?: Maybe<Array<Games_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Games_Order_By>>;
    where?: Maybe<Games_Bool_Exp>;
};

export type UsersGames_AggregateArgs = {
    distinct_on?: Maybe<Array<Games_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Games_Order_By>>;
    where?: Maybe<Games_Bool_Exp>;
};

export type UsersGithubUserFollowingsByFollowingUserIdArgs = {
    distinct_on?: Maybe<Array<Github_User_Following_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Following_Order_By>>;
    where?: Maybe<Github_User_Following_Bool_Exp>;
};

export type UsersGithubUserFollowingsByFollowingUserId_AggregateArgs = {
    distinct_on?: Maybe<Array<Github_User_Following_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Following_Order_By>>;
    where?: Maybe<Github_User_Following_Bool_Exp>;
};

export type UsersGithub_User_FollowingsArgs = {
    distinct_on?: Maybe<Array<Github_User_Following_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Following_Order_By>>;
    where?: Maybe<Github_User_Following_Bool_Exp>;
};

export type UsersGithub_User_Followings_AggregateArgs = {
    distinct_on?: Maybe<Array<Github_User_Following_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Github_User_Following_Order_By>>;
    where?: Maybe<Github_User_Following_Bool_Exp>;
};

export type UsersRepositoriesArgs = {
    distinct_on?: Maybe<Array<Repositories_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repositories_Order_By>>;
    where?: Maybe<Repositories_Bool_Exp>;
};

export type UsersRepositories_AggregateArgs = {
    distinct_on?: Maybe<Array<Repositories_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Repositories_Order_By>>;
    where?: Maybe<Repositories_Bool_Exp>;
};

export type Users_Aggregate = {
    __typename?: 'users_aggregate';
    aggregate?: Maybe<Users_Aggregate_Fields>;
    nodes: Array<Users>;
};

export type Users_Aggregate_Fields = {
    __typename?: 'users_aggregate_fields';
    count?: Maybe<Scalars['Int']>;
    max?: Maybe<Users_Max_Fields>;
    min?: Maybe<Users_Min_Fields>;
};

export type Users_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Users_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

export type Users_Aggregate_Order_By = {
    count?: Maybe<Order_By>;
    max?: Maybe<Users_Max_Order_By>;
    min?: Maybe<Users_Min_Order_By>;
};

export type Users_Arr_Rel_Insert_Input = {
    data: Array<Users_Insert_Input>;
    on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_Bool_Exp = {
    _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
    _not?: Maybe<Users_Bool_Exp>;
    _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
    api_keys?: Maybe<Repository_Api_Keys_Bool_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    email?: Maybe<String_Comparison_Exp>;
    games?: Maybe<Games_Bool_Exp>;
    git_login?: Maybe<String_Comparison_Exp>;
    githubUserFollowingsByFollowingUserId?: Maybe<
        Github_User_Following_Bool_Exp
    >;
    github_user_followings?: Maybe<Github_User_Following_Bool_Exp>;
    id?: Maybe<Uuid_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    password?: Maybe<String_Comparison_Exp>;
    repositories?: Maybe<Repositories_Bool_Exp>;
    role?: Maybe<String_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Users_Constraint {
    UsersEmailKey = 'users_email_key',
    UsersGitLoginKey = 'users_git_login_key',
    UsersPkey = 'users_pkey'
}

export type Users_Insert_Input = {
    api_keys?: Maybe<Repository_Api_Keys_Arr_Rel_Insert_Input>;
    created_at?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    games?: Maybe<Games_Arr_Rel_Insert_Input>;
    git_login?: Maybe<Scalars['String']>;
    githubUserFollowingsByFollowingUserId?: Maybe<
        Github_User_Following_Arr_Rel_Insert_Input
    >;
    github_user_followings?: Maybe<Github_User_Following_Arr_Rel_Insert_Input>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    repositories?: Maybe<Repositories_Arr_Rel_Insert_Input>;
    role?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Max_Fields = {
    __typename?: 'users_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    git_login?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    role?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    git_login?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    password?: Maybe<Order_By>;
    role?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Users_Min_Fields = {
    __typename?: 'users_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    git_login?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    role?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    git_login?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    password?: Maybe<Order_By>;
    role?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export type Users_Mutation_Response = {
    __typename?: 'users_mutation_response';
    affected_rows: Scalars['Int'];
    returning: Array<Users>;
};

export type Users_Obj_Rel_Insert_Input = {
    data: Users_Insert_Input;
    on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_On_Conflict = {
    constraint: Users_Constraint;
    update_columns: Array<Users_Update_Column>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Users_Order_By = {
    api_keys_aggregate?: Maybe<Repository_Api_Keys_Aggregate_Order_By>;
    created_at?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    games_aggregate?: Maybe<Games_Aggregate_Order_By>;
    git_login?: Maybe<Order_By>;
    githubUserFollowingsByFollowingUserId_aggregate?: Maybe<
        Github_User_Following_Aggregate_Order_By
    >;
    github_user_followings_aggregate?: Maybe<
        Github_User_Following_Aggregate_Order_By
    >;
    id?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    password?: Maybe<Order_By>;
    repositories_aggregate?: Maybe<Repositories_Aggregate_Order_By>;
    role?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

export enum Users_Select_Column {
    CreatedAt = 'created_at',
    Email = 'email',
    GitLogin = 'git_login',
    Id = 'id',
    Name = 'name',
    Password = 'password',
    Role = 'role',
    UpdatedAt = 'updated_at'
}

export type Users_Set_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    git_login?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['uuid']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    role?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Users_Update_Column {
    CreatedAt = 'created_at',
    Email = 'email',
    GitLogin = 'git_login',
    Id = 'id',
    Name = 'name',
    Password = 'password',
    Role = 'role',
    UpdatedAt = 'updated_at'
}

export type Uuid_Comparison_Exp = {
    _eq?: Maybe<Scalars['uuid']>;
    _gt?: Maybe<Scalars['uuid']>;
    _gte?: Maybe<Scalars['uuid']>;
    _in?: Maybe<Array<Scalars['uuid']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['uuid']>;
    _lte?: Maybe<Scalars['uuid']>;
    _neq?: Maybe<Scalars['uuid']>;
    _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CreateUserMutationVariables = {
    email: Scalars['String'];
    gitLogin: Scalars['String'];
    name: Scalars['String'];
    role: Scalars['String'];
    password: Scalars['String'];
};

export type CreateUserMutation = { __typename?: 'mutation_root' } & {
    insert_users: Maybe<
        { __typename?: 'users_mutation_response' } & Pick<
            Users_Mutation_Response,
            'affected_rows'
        > & {
                returning: Array<
                    { __typename?: 'users' } & Pick<
                        Users,
                        'id' | 'email' | 'created_at'
                    >
                >;
            }
    >;
};

export type DeleteUserByIdMutationVariables = {
    id: Scalars['uuid'];
};

export type DeleteUserByIdMutation = { __typename?: 'mutation_root' } & {
    delete_users: Maybe<
        { __typename?: 'users_mutation_response' } & Pick<
            Users_Mutation_Response,
            'affected_rows'
        > & {
                returning: Array<
                    { __typename?: 'users' } & Pick<
                        Users,
                        | 'email'
                        | 'created_at'
                        | 'git_login'
                        | 'updated_at'
                        | 'role'
                        | 'name'
                        | 'id'
                    >
                >;
            }
    >;
};

export type DeleteUserByEmailMutationVariables = {
    email: Scalars['String'];
};

export type DeleteUserByEmailMutation = { __typename?: 'mutation_root' } & {
    delete_users: Maybe<
        { __typename?: 'users_mutation_response' } & Pick<
            Users_Mutation_Response,
            'affected_rows'
        > & {
                returning: Array<
                    { __typename?: 'users' } & Pick<
                        Users,
                        | 'email'
                        | 'created_at'
                        | 'git_login'
                        | 'updated_at'
                        | 'role'
                        | 'name'
                        | 'id'
                    >
                >;
            }
    >;
};

export type CreateApiKeyMutationVariables = {
    key: Scalars['String'];
    name: Scalars['String'];
    provider: Scalars['String'];
    userId: Scalars['uuid'];
};

export type CreateApiKeyMutation = { __typename: 'mutation_root' } & {
    insert_repository_api_keys: Maybe<
        { __typename?: 'repository_api_keys_mutation_response' } & Pick<
            Repository_Api_Keys_Mutation_Response,
            'affected_rows'
        > & {
                returning: Array<
                    { __typename?: 'repository_api_keys' } & Pick<
                        Repository_Api_Keys,
                        | 'created_at'
                        | 'id'
                        | 'key'
                        | 'name'
                        | 'provider'
                        | 'user_id'
                    >
                >;
            }
    >;
};

export type DeleteApiKeyByIdMutationVariables = {
    id: Scalars['uuid'];
};

export type DeleteApiKeyByIdMutation = { __typename?: 'mutation_root' } & {
    delete_repository_api_keys: Maybe<
        { __typename?: 'repository_api_keys_mutation_response' } & Pick<
            Repository_Api_Keys_Mutation_Response,
            'affected_rows'
        > & {
                returning: Array<
                    { __typename?: 'repository_api_keys' } & Pick<
                        Repository_Api_Keys,
                        'created_at' | 'name' | 'id'
                    >
                >;
            }
    >;
};

export type DeleteApiKeyByKeyMutationVariables = {
    key: Scalars['String'];
};

export type DeleteApiKeyByKeyMutation = { __typename?: 'mutation_root' } & {
    delete_repository_api_keys: Maybe<
        { __typename?: 'repository_api_keys_mutation_response' } & Pick<
            Repository_Api_Keys_Mutation_Response,
            'affected_rows'
        > & {
                returning: Array<
                    { __typename?: 'repository_api_keys' } & Pick<
                        Repository_Api_Keys,
                        'created_at' | 'name' | 'id'
                    >
                >;
            }
    >;
};

export type AllUsersQueryVariables = {};

export type AllUsersQuery = { __typename: 'query_root' } & {
    users: Array<
        { __typename?: 'users' } & Pick<
            Users,
            | 'updated_at'
            | 'role'
            | 'password'
            | 'name'
            | 'id'
            | 'git_login'
            | 'email'
            | 'created_at'
        >
    >;
};

export type UserByEmailQueryVariables = {
    email: Scalars['String'];
};

export type UserByEmailQuery = { __typename?: 'query_root' } & {
    users: Array<
        { __typename?: 'users' } & Pick<
            Users,
            | 'created_at'
            | 'email'
            | 'git_login'
            | 'id'
            | 'name'
            | 'password'
            | 'role'
            | 'updated_at'
        > & {
                games: Array<
                    { __typename?: 'games' } & Pick<
                        Games,
                        'id' | 'title' | 'type'
                    >
                >;
                api_keys: Array<
                    { __typename?: 'repository_api_keys' } & Pick<
                        Repository_Api_Keys,
                        'id' | 'name'
                    >
                >;
            }
    >;
};

export type UserByIdQueryVariables = {
    id: Scalars['uuid'];
};

export type UserByIdQuery = { __typename?: 'query_root' } & {
    users: Array<
        { __typename?: 'users' } & Pick<
            Users,
            | 'created_at'
            | 'email'
            | 'git_login'
            | 'id'
            | 'name'
            | 'password'
            | 'role'
            | 'updated_at'
        > & {
                games: Array<
                    { __typename?: 'games' } & Pick<
                        Games,
                        'id' | 'title' | 'type'
                    >
                >;
                api_keys: Array<
                    { __typename?: 'repository_api_keys' } & Pick<
                        Repository_Api_Keys,
                        'id' | 'name'
                    >
                >;
            }
    >;
};

export type UserRepositoryApiKeysQueryVariables = {
    userId: Scalars['uuid'];
};

export type UserRepositoryApiKeysQuery = { __typename?: 'query_root' } & {
    repository_api_keys: Array<
        { __typename?: 'repository_api_keys' } & Pick<
            Repository_Api_Keys,
            'created_at' | 'id' | 'name' | 'provider' | 'user_id'
        >
    >;
};

export const CreateUserDocument = gql`
    mutation CreateUser(
        $email: String!
        $gitLogin: String!
        $name: String!
        $role: String!
        $password: String!
    ) {
        insert_users(
            objects: {
                email: $email
                git_login: $gitLogin
                name: $name
                role: $role
                password: $password
            }
        ) {
            affected_rows
            returning {
                id
                email
                created_at
            }
        }
    }
`;
export const DeleteUserByIdDocument = gql`
    mutation DeleteUserById($id: uuid!) {
        delete_users(where: { id: { _eq: $id } }) {
            affected_rows
            returning {
                email
                created_at
                git_login
                updated_at
                role
                name
                id
            }
        }
    }
`;
export const DeleteUserByEmailDocument = gql`
    mutation DeleteUserByEmail($email: String!) {
        delete_users(where: { email: { _eq: $email } }) {
            affected_rows
            returning {
                email
                created_at
                git_login
                updated_at
                role
                name
                id
            }
        }
    }
`;
export const CreateApiKeyDocument = gql`
    mutation CreateApiKey(
        $key: String!
        $name: String!
        $provider: String!
        $userId: uuid!
    ) {
        __typename
        insert_repository_api_keys(
            objects: {
                key: $key
                name: $name
                provider: $provider
                user_id: $userId
            }
        ) {
            affected_rows
            returning {
                created_at
                id
                key
                name
                provider
                user_id
            }
        }
    }
`;
export const DeleteApiKeyByIdDocument = gql`
    mutation DeleteApiKeyById($id: uuid!) {
        delete_repository_api_keys(where: { id: { _eq: $id } }) {
            affected_rows
            returning {
                created_at
                name
                id
            }
        }
    }
`;
export const DeleteApiKeyByKeyDocument = gql`
    mutation DeleteApiKeyByKey($key: String!) {
        delete_repository_api_keys(where: { key: { _eq: $key } }) {
            affected_rows
            returning {
                created_at
                name
                id
            }
        }
    }
`;
export const AllUsersDocument = gql`
    query AllUsers {
        __typename
        users {
            updated_at
            role
            password
            name
            id
            git_login
            email
            created_at
        }
    }
`;
export const UserByEmailDocument = gql`
    query UserByEmail($email: String!) {
        users(distinct_on: email, limit: 1, where: { email: { _eq: $email } }) {
            created_at
            email
            games {
                id
                title
                type
            }
            git_login
            api_keys {
                id
                name
            }
            id
            name
            password
            role
            updated_at
        }
    }
`;
export const UserByIdDocument = gql`
    query UserById($id: uuid!) {
        users(distinct_on: email, limit: 1, where: { id: { _eq: $id } }) {
            created_at
            email
            games {
                id
                title
                type
            }
            git_login
            api_keys {
                id
                name
            }
            id
            name
            password
            role
            updated_at
        }
    }
`;
export const UserRepositoryApiKeysDocument = gql`
    query UserRepositoryApiKeys($userId: uuid!) {
        repository_api_keys(where: { user_id: { _eq: $userId } }) {
            created_at
            id
            name
            provider
            user_id
        }
    }
`;
export function getSdk(client: GraphQLClient) {
    return {
        CreateUser(
            variables: CreateUserMutationVariables
        ): Promise<CreateUserMutation> {
            return client.request<CreateUserMutation>(
                print(CreateUserDocument),
                variables
            );
        },
        DeleteUserById(
            variables: DeleteUserByIdMutationVariables
        ): Promise<DeleteUserByIdMutation> {
            return client.request<DeleteUserByIdMutation>(
                print(DeleteUserByIdDocument),
                variables
            );
        },
        DeleteUserByEmail(
            variables: DeleteUserByEmailMutationVariables
        ): Promise<DeleteUserByEmailMutation> {
            return client.request<DeleteUserByEmailMutation>(
                print(DeleteUserByEmailDocument),
                variables
            );
        },
        CreateApiKey(
            variables: CreateApiKeyMutationVariables
        ): Promise<CreateApiKeyMutation> {
            return client.request<CreateApiKeyMutation>(
                print(CreateApiKeyDocument),
                variables
            );
        },
        DeleteApiKeyById(
            variables: DeleteApiKeyByIdMutationVariables
        ): Promise<DeleteApiKeyByIdMutation> {
            return client.request<DeleteApiKeyByIdMutation>(
                print(DeleteApiKeyByIdDocument),
                variables
            );
        },
        DeleteApiKeyByKey(
            variables: DeleteApiKeyByKeyMutationVariables
        ): Promise<DeleteApiKeyByKeyMutation> {
            return client.request<DeleteApiKeyByKeyMutation>(
                print(DeleteApiKeyByKeyDocument),
                variables
            );
        },
        AllUsers(variables?: AllUsersQueryVariables): Promise<AllUsersQuery> {
            return client.request<AllUsersQuery>(
                print(AllUsersDocument),
                variables
            );
        },
        UserByEmail(
            variables: UserByEmailQueryVariables
        ): Promise<UserByEmailQuery> {
            return client.request<UserByEmailQuery>(
                print(UserByEmailDocument),
                variables
            );
        },
        UserById(variables: UserByIdQueryVariables): Promise<UserByIdQuery> {
            return client.request<UserByIdQuery>(
                print(UserByIdDocument),
                variables
            );
        },
        UserRepositoryApiKeys(
            variables: UserRepositoryApiKeysQueryVariables
        ): Promise<UserRepositoryApiKeysQuery> {
            return client.request<UserRepositoryApiKeysQuery>(
                print(UserRepositoryApiKeysDocument),
                variables
            );
        }
    };
}
