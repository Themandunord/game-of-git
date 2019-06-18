/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum MutationType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
}

export enum PrismaDatabase {
  default = 'default',
}

export enum RepositoryOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum UserOrderByInput {
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  role_ASC = 'role_ASC',
  role_DESC = 'role_DESC',
}

export class RepositoryCreateInput {
  id?: string;
  name: string;
}

export class RepositorySubscriptionWhereInput {
  AND?: RepositorySubscriptionWhereInput[];
  OR?: RepositorySubscriptionWhereInput[];
  NOT?: RepositorySubscriptionWhereInput[];
  mutation_in?: MutationType[];
  updatedFields_contains?: string;
  updatedFields_contains_every?: string[];
  updatedFields_contains_some?: string[];
  node?: RepositoryWhereInput;
}

export class RepositoryUpdateInput {
  name?: string;
}

export class RepositoryUpdateManyMutationInput {
  name?: string;
}

export class RepositoryWhereInput {
  AND?: RepositoryWhereInput[];
  OR?: RepositoryWhereInput[];
  NOT?: RepositoryWhereInput[];
  id?: string;
  id_not?: string;
  id_in?: string[];
  id_not_in?: string[];
  id_lt?: string;
  id_lte?: string;
  id_gt?: string;
  id_gte?: string;
  id_contains?: string;
  id_not_contains?: string;
  id_starts_with?: string;
  id_not_starts_with?: string;
  id_ends_with?: string;
  id_not_ends_with?: string;
  name?: string;
  name_not?: string;
  name_in?: string[];
  name_not_in?: string[];
  name_lt?: string;
  name_lte?: string;
  name_gt?: string;
  name_gte?: string;
  name_contains?: string;
  name_not_contains?: string;
  name_starts_with?: string;
  name_not_starts_with?: string;
  name_ends_with?: string;
  name_not_ends_with?: string;
}

export class RepositoryWhereUniqueInput {
  id?: string;
  name?: string;
}

export class UserCreateInput {
  id?: string;
  email: string;
  name?: string;
  role?: Role;
}

export class UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[];
  OR?: UserSubscriptionWhereInput[];
  NOT?: UserSubscriptionWhereInput[];
  mutation_in?: MutationType[];
  updatedFields_contains?: string;
  updatedFields_contains_every?: string[];
  updatedFields_contains_some?: string[];
  node?: UserWhereInput;
}

export class UserUpdateInput {
  email?: string;
  name?: string;
  role?: Role;
}

export class UserUpdateManyMutationInput {
  email?: string;
  name?: string;
  role?: Role;
}

export class UserWhereInput {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: string;
  id_not?: string;
  id_in?: string[];
  id_not_in?: string[];
  id_lt?: string;
  id_lte?: string;
  id_gt?: string;
  id_gte?: string;
  id_contains?: string;
  id_not_contains?: string;
  id_starts_with?: string;
  id_not_starts_with?: string;
  id_ends_with?: string;
  id_not_ends_with?: string;
  email?: string;
  email_not?: string;
  email_in?: string[];
  email_not_in?: string[];
  email_lt?: string;
  email_lte?: string;
  email_gt?: string;
  email_gte?: string;
  email_contains?: string;
  email_not_contains?: string;
  email_starts_with?: string;
  email_not_starts_with?: string;
  email_ends_with?: string;
  email_not_ends_with?: string;
  createdAt?: DateTime;
  createdAt_not?: DateTime;
  createdAt_in?: DateTime[];
  createdAt_not_in?: DateTime[];
  createdAt_lt?: DateTime;
  createdAt_lte?: DateTime;
  createdAt_gt?: DateTime;
  createdAt_gte?: DateTime;
  updatedAt?: DateTime;
  updatedAt_not?: DateTime;
  updatedAt_in?: DateTime[];
  updatedAt_not_in?: DateTime[];
  updatedAt_lt?: DateTime;
  updatedAt_lte?: DateTime;
  updatedAt_gt?: DateTime;
  updatedAt_gte?: DateTime;
  name?: string;
  name_not?: string;
  name_in?: string[];
  name_not_in?: string[];
  name_lt?: string;
  name_lte?: string;
  name_gt?: string;
  name_gte?: string;
  name_contains?: string;
  name_not_contains?: string;
  name_starts_with?: string;
  name_not_starts_with?: string;
  name_ends_with?: string;
  name_not_ends_with?: string;
  role?: Role;
  role_not?: Role;
  role_in?: Role[];
  role_not_in?: Role[];
}

export class UserWhereUniqueInput {
  id?: string;
  email?: string;
}

export interface Node {
  id: string;
}

export class AggregateRepository {
  count: number;
}

export class AggregateUser {
  count: number;
}

export class BatchPayload {
  count: Long;
}

export abstract class IMutation {
  abstract createUser(data: UserCreateInput): User | Promise<User>;
  abstract createRepository(
    data: RepositoryCreateInput,
  ): Repository | Promise<Repository>;
  abstract updateUser(
    data: UserUpdateInput,
    where: UserWhereUniqueInput,
  ): User | Promise<User>;
  abstract updateRepository(
    data: RepositoryUpdateInput,
    where: RepositoryWhereUniqueInput,
  ): Repository | Promise<Repository>;
  abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
  abstract deleteRepository(
    where: RepositoryWhereUniqueInput,
  ): Repository | Promise<Repository>;
  abstract upsertUser(
    where: UserWhereUniqueInput,
    create: UserCreateInput,
    update: UserUpdateInput,
  ): User | Promise<User>;
  abstract upsertRepository(
    where: RepositoryWhereUniqueInput,
    create: RepositoryCreateInput,
    update: RepositoryUpdateInput,
  ): Repository | Promise<Repository>;
  abstract updateManyUsers(
    data: UserUpdateManyMutationInput,
    where?: UserWhereInput,
  ): BatchPayload | Promise<BatchPayload>;
  abstract updateManyRepositories(
    data: RepositoryUpdateManyMutationInput,
    where?: RepositoryWhereInput,
  ): BatchPayload | Promise<BatchPayload>;
  abstract deleteManyUsers(
    where?: UserWhereInput,
  ): BatchPayload | Promise<BatchPayload>;
  abstract deleteManyRepositories(
    where?: RepositoryWhereInput,
  ): BatchPayload | Promise<BatchPayload>;
  abstract executeRaw(
    query: string,
    database?: PrismaDatabase,
  ): Json | Promise<Json>;
}

export class PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
}

export abstract class IQuery {
  abstract users(
    where?: UserWhereInput,
    orderBy?: UserOrderByInput,
    skip?: number,
    after?: string,
    before?: string,
    first?: number,
    last?: number,
  ): User[] | Promise<User[]>;
  abstract repositories(
    where?: RepositoryWhereInput,
    orderBy?: RepositoryOrderByInput,
    skip?: number,
    after?: string,
    before?: string,
    first?: number,
    last?: number,
  ): Repository[] | Promise<Repository[]>;
  abstract user(where: UserWhereUniqueInput): User | Promise<User>;
  abstract repository(
    where: RepositoryWhereUniqueInput,
  ): Repository | Promise<Repository>;
  abstract usersConnection(
    where?: UserWhereInput,
    orderBy?: UserOrderByInput,
    skip?: number,
    after?: string,
    before?: string,
    first?: number,
    last?: number,
  ): UserConnection | Promise<UserConnection>;
  abstract repositoriesConnection(
    where?: RepositoryWhereInput,
    orderBy?: RepositoryOrderByInput,
    skip?: number,
    after?: string,
    before?: string,
    first?: number,
    last?: number,
  ): RepositoryConnection | Promise<RepositoryConnection>;
  abstract node(id: string): Node | Promise<Node>;
}

export class Repository implements Node {
  id: string;
  name: string;
}

export class RepositoryConnection {
  pageInfo: PageInfo;
  edges: RepositoryEdge[];
  aggregate: AggregateRepository;
}

export class RepositoryEdge {
  node: Repository;
  cursor: string;
}

export class RepositoryPreviousValues {
  id: string;
  name: string;
}

export class RepositorySubscriptionPayload {
  mutation: MutationType;
  node?: Repository;
  updatedFields?: string[];
  previousValues?: RepositoryPreviousValues;
}

export abstract class ISubscription {
  abstract user(
    where?: UserSubscriptionWhereInput,
  ): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
  abstract repository(
    where?: RepositorySubscriptionWhereInput,
  ): RepositorySubscriptionPayload | Promise<RepositorySubscriptionPayload>;
}

export class User implements Node {
  id: string;
  email: string;
  hash: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  name?: string;
  role?: Role;
}

export class UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
  aggregate: AggregateUser;
}

export class UserEdge {
  node: User;
  cursor: string;
}

export class UserPreviousValues {
  id: string;
  email: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  name?: string;
  role?: Role;
}

export class UserSubscriptionPayload {
  mutation: MutationType;
  node?: User;
  updatedFields?: string[];
  previousValues?: UserPreviousValues;
}

export type DateTime = any;
export type Json = any;
export type Long = any;
