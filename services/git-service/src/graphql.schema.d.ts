
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum AppKeyOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    key_ASC = "key_ASC",
    key_DESC = "key_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC"
}

export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum PrismaDatabase {
    default = "default"
}

export enum RepositoryOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    idExternal_ASC = "idExternal_ASC",
    idExternal_DESC = "idExternal_DESC",
    createdAtExternal_ASC = "createdAtExternal_ASC",
    createdAtExternal_DESC = "createdAtExternal_DESC",
    updatedAtExternal_ASC = "updatedAtExternal_ASC",
    updatedAtExternal_DESC = "updatedAtExternal_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    owner_ASC = "owner_ASC",
    owner_DESC = "owner_DESC",
    isTracked_ASC = "isTracked_ASC",
    isTracked_DESC = "isTracked_DESC"
}

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export enum UserOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    email_ASC = "email_ASC",
    email_DESC = "email_DESC",
    hash_ASC = "hash_ASC",
    hash_DESC = "hash_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC",
    name_ASC = "name_ASC",
    name_DESC = "name_DESC",
    role_ASC = "role_ASC",
    role_DESC = "role_DESC",
    gitLogin_ASC = "gitLogin_ASC",
    gitLogin_DESC = "gitLogin_DESC"
}

export class AppKeyCreateInput {
    id?: string;
    key: string;
    name?: string;
    user: UserCreateOneWithoutKeysInput;
}

export class AppKeyCreateManyWithoutUserInput {
    create?: AppKeyCreateWithoutUserInput[];
    connect?: AppKeyWhereUniqueInput[];
}

export class AppKeyCreateOneInput {
    create?: AppKeyCreateInput;
    connect?: AppKeyWhereUniqueInput;
}

export class AppKeyCreateWithoutUserInput {
    id?: string;
    key: string;
    name?: string;
}

export class AppKeyScalarWhereInput {
    AND?: AppKeyScalarWhereInput[];
    OR?: AppKeyScalarWhereInput[];
    NOT?: AppKeyScalarWhereInput[];
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
    key?: string;
    key_not?: string;
    key_in?: string[];
    key_not_in?: string[];
    key_lt?: string;
    key_lte?: string;
    key_gt?: string;
    key_gte?: string;
    key_contains?: string;
    key_not_contains?: string;
    key_starts_with?: string;
    key_not_starts_with?: string;
    key_ends_with?: string;
    key_not_ends_with?: string;
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

export class AppKeySubscriptionWhereInput {
    AND?: AppKeySubscriptionWhereInput[];
    OR?: AppKeySubscriptionWhereInput[];
    NOT?: AppKeySubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: AppKeyWhereInput;
}

export class AppKeyUpdateDataInput {
    key?: string;
    name?: string;
    user?: UserUpdateOneRequiredWithoutKeysInput;
}

export class AppKeyUpdateInput {
    key?: string;
    name?: string;
    user?: UserUpdateOneRequiredWithoutKeysInput;
}

export class AppKeyUpdateManyDataInput {
    key?: string;
    name?: string;
}

export class AppKeyUpdateManyMutationInput {
    key?: string;
    name?: string;
}

export class AppKeyUpdateManyWithoutUserInput {
    create?: AppKeyCreateWithoutUserInput[];
    connect?: AppKeyWhereUniqueInput[];
    set?: AppKeyWhereUniqueInput[];
    disconnect?: AppKeyWhereUniqueInput[];
    delete?: AppKeyWhereUniqueInput[];
    update?: AppKeyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: AppKeyUpdateManyWithWhereNestedInput[];
    deleteMany?: AppKeyScalarWhereInput[];
    upsert?: AppKeyUpsertWithWhereUniqueWithoutUserInput[];
}

export class AppKeyUpdateManyWithWhereNestedInput {
    where: AppKeyScalarWhereInput;
    data: AppKeyUpdateManyDataInput;
}

export class AppKeyUpdateOneRequiredInput {
    create?: AppKeyCreateInput;
    connect?: AppKeyWhereUniqueInput;
    update?: AppKeyUpdateDataInput;
    upsert?: AppKeyUpsertNestedInput;
}

export class AppKeyUpdateWithoutUserDataInput {
    key?: string;
    name?: string;
}

export class AppKeyUpdateWithWhereUniqueWithoutUserInput {
    where: AppKeyWhereUniqueInput;
    data: AppKeyUpdateWithoutUserDataInput;
}

export class AppKeyUpsertNestedInput {
    update: AppKeyUpdateDataInput;
    create: AppKeyCreateInput;
}

export class AppKeyUpsertWithWhereUniqueWithoutUserInput {
    where: AppKeyWhereUniqueInput;
    update: AppKeyUpdateWithoutUserDataInput;
    create: AppKeyCreateWithoutUserInput;
}

export class AppKeyWhereInput {
    AND?: AppKeyWhereInput[];
    OR?: AppKeyWhereInput[];
    NOT?: AppKeyWhereInput[];
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
    key?: string;
    key_not?: string;
    key_in?: string[];
    key_not_in?: string[];
    key_lt?: string;
    key_lte?: string;
    key_gt?: string;
    key_gte?: string;
    key_contains?: string;
    key_not_contains?: string;
    key_starts_with?: string;
    key_not_starts_with?: string;
    key_ends_with?: string;
    key_not_ends_with?: string;
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
    user?: UserWhereInput;
}

export class AppKeyWhereUniqueInput {
    id?: string;
    key?: string;
}

export class RepositoryCreateInput {
    id?: string;
    idExternal: string;
    createdAtExternal: DateTime;
    updatedAtExternal: DateTime;
    name: string;
    owner: string;
    isTracked: boolean;
    user: UserCreateOneWithoutRepositoriesInput;
    appKey: AppKeyCreateOneInput;
}

export class RepositoryCreateManyWithoutUserInput {
    create?: RepositoryCreateWithoutUserInput[];
    connect?: RepositoryWhereUniqueInput[];
}

export class RepositoryCreateWithoutUserInput {
    id?: string;
    idExternal: string;
    createdAtExternal: DateTime;
    updatedAtExternal: DateTime;
    name: string;
    owner: string;
    isTracked: boolean;
    appKey: AppKeyCreateOneInput;
}

export class RepositoryScalarWhereInput {
    AND?: RepositoryScalarWhereInput[];
    OR?: RepositoryScalarWhereInput[];
    NOT?: RepositoryScalarWhereInput[];
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
    idExternal?: string;
    idExternal_not?: string;
    idExternal_in?: string[];
    idExternal_not_in?: string[];
    idExternal_lt?: string;
    idExternal_lte?: string;
    idExternal_gt?: string;
    idExternal_gte?: string;
    idExternal_contains?: string;
    idExternal_not_contains?: string;
    idExternal_starts_with?: string;
    idExternal_not_starts_with?: string;
    idExternal_ends_with?: string;
    idExternal_not_ends_with?: string;
    createdAtExternal?: DateTime;
    createdAtExternal_not?: DateTime;
    createdAtExternal_in?: DateTime[];
    createdAtExternal_not_in?: DateTime[];
    createdAtExternal_lt?: DateTime;
    createdAtExternal_lte?: DateTime;
    createdAtExternal_gt?: DateTime;
    createdAtExternal_gte?: DateTime;
    updatedAtExternal?: DateTime;
    updatedAtExternal_not?: DateTime;
    updatedAtExternal_in?: DateTime[];
    updatedAtExternal_not_in?: DateTime[];
    updatedAtExternal_lt?: DateTime;
    updatedAtExternal_lte?: DateTime;
    updatedAtExternal_gt?: DateTime;
    updatedAtExternal_gte?: DateTime;
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
    owner?: string;
    owner_not?: string;
    owner_in?: string[];
    owner_not_in?: string[];
    owner_lt?: string;
    owner_lte?: string;
    owner_gt?: string;
    owner_gte?: string;
    owner_contains?: string;
    owner_not_contains?: string;
    owner_starts_with?: string;
    owner_not_starts_with?: string;
    owner_ends_with?: string;
    owner_not_ends_with?: string;
    isTracked?: boolean;
    isTracked_not?: boolean;
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
    idExternal?: string;
    createdAtExternal?: DateTime;
    updatedAtExternal?: DateTime;
    name?: string;
    owner?: string;
    isTracked?: boolean;
    user?: UserUpdateOneRequiredWithoutRepositoriesInput;
    appKey?: AppKeyUpdateOneRequiredInput;
}

export class RepositoryUpdateManyDataInput {
    idExternal?: string;
    createdAtExternal?: DateTime;
    updatedAtExternal?: DateTime;
    name?: string;
    owner?: string;
    isTracked?: boolean;
}

export class RepositoryUpdateManyMutationInput {
    idExternal?: string;
    createdAtExternal?: DateTime;
    updatedAtExternal?: DateTime;
    name?: string;
    owner?: string;
    isTracked?: boolean;
}

export class RepositoryUpdateManyWithoutUserInput {
    create?: RepositoryCreateWithoutUserInput[];
    connect?: RepositoryWhereUniqueInput[];
    set?: RepositoryWhereUniqueInput[];
    disconnect?: RepositoryWhereUniqueInput[];
    delete?: RepositoryWhereUniqueInput[];
    update?: RepositoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: RepositoryUpdateManyWithWhereNestedInput[];
    deleteMany?: RepositoryScalarWhereInput[];
    upsert?: RepositoryUpsertWithWhereUniqueWithoutUserInput[];
}

export class RepositoryUpdateManyWithWhereNestedInput {
    where: RepositoryScalarWhereInput;
    data: RepositoryUpdateManyDataInput;
}

export class RepositoryUpdateWithoutUserDataInput {
    idExternal?: string;
    createdAtExternal?: DateTime;
    updatedAtExternal?: DateTime;
    name?: string;
    owner?: string;
    isTracked?: boolean;
    appKey?: AppKeyUpdateOneRequiredInput;
}

export class RepositoryUpdateWithWhereUniqueWithoutUserInput {
    where: RepositoryWhereUniqueInput;
    data: RepositoryUpdateWithoutUserDataInput;
}

export class RepositoryUpsertWithWhereUniqueWithoutUserInput {
    where: RepositoryWhereUniqueInput;
    update: RepositoryUpdateWithoutUserDataInput;
    create: RepositoryCreateWithoutUserInput;
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
    idExternal?: string;
    idExternal_not?: string;
    idExternal_in?: string[];
    idExternal_not_in?: string[];
    idExternal_lt?: string;
    idExternal_lte?: string;
    idExternal_gt?: string;
    idExternal_gte?: string;
    idExternal_contains?: string;
    idExternal_not_contains?: string;
    idExternal_starts_with?: string;
    idExternal_not_starts_with?: string;
    idExternal_ends_with?: string;
    idExternal_not_ends_with?: string;
    createdAtExternal?: DateTime;
    createdAtExternal_not?: DateTime;
    createdAtExternal_in?: DateTime[];
    createdAtExternal_not_in?: DateTime[];
    createdAtExternal_lt?: DateTime;
    createdAtExternal_lte?: DateTime;
    createdAtExternal_gt?: DateTime;
    createdAtExternal_gte?: DateTime;
    updatedAtExternal?: DateTime;
    updatedAtExternal_not?: DateTime;
    updatedAtExternal_in?: DateTime[];
    updatedAtExternal_not_in?: DateTime[];
    updatedAtExternal_lt?: DateTime;
    updatedAtExternal_lte?: DateTime;
    updatedAtExternal_gt?: DateTime;
    updatedAtExternal_gte?: DateTime;
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
    owner?: string;
    owner_not?: string;
    owner_in?: string[];
    owner_not_in?: string[];
    owner_lt?: string;
    owner_lte?: string;
    owner_gt?: string;
    owner_gte?: string;
    owner_contains?: string;
    owner_not_contains?: string;
    owner_starts_with?: string;
    owner_not_starts_with?: string;
    owner_ends_with?: string;
    owner_not_ends_with?: string;
    isTracked?: boolean;
    isTracked_not?: boolean;
    user?: UserWhereInput;
    appKey?: AppKeyWhereInput;
}

export class RepositoryWhereUniqueInput {
    id?: string;
    idExternal?: string;
    name?: string;
}

export class UserCreateInput {
    id?: string;
    email: string;
    hash: string;
    name?: string;
    role?: Role;
    gitLogin: string;
    keys?: AppKeyCreateManyWithoutUserInput;
    repositories?: RepositoryCreateManyWithoutUserInput;
}

export class UserCreateOneWithoutKeysInput {
    create?: UserCreateWithoutKeysInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateOneWithoutRepositoriesInput {
    create?: UserCreateWithoutRepositoriesInput;
    connect?: UserWhereUniqueInput;
}

export class UserCreateWithoutKeysInput {
    id?: string;
    email: string;
    hash: string;
    name?: string;
    role?: Role;
    gitLogin: string;
    repositories?: RepositoryCreateManyWithoutUserInput;
}

export class UserCreateWithoutRepositoriesInput {
    id?: string;
    email: string;
    hash: string;
    name?: string;
    role?: Role;
    gitLogin: string;
    keys?: AppKeyCreateManyWithoutUserInput;
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
    hash?: string;
    name?: string;
    role?: Role;
    gitLogin?: string;
    keys?: AppKeyUpdateManyWithoutUserInput;
    repositories?: RepositoryUpdateManyWithoutUserInput;
}

export class UserUpdateManyMutationInput {
    email?: string;
    hash?: string;
    name?: string;
    role?: Role;
    gitLogin?: string;
}

export class UserUpdateOneRequiredWithoutKeysInput {
    create?: UserCreateWithoutKeysInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutKeysDataInput;
    upsert?: UserUpsertWithoutKeysInput;
}

export class UserUpdateOneRequiredWithoutRepositoriesInput {
    create?: UserCreateWithoutRepositoriesInput;
    connect?: UserWhereUniqueInput;
    update?: UserUpdateWithoutRepositoriesDataInput;
    upsert?: UserUpsertWithoutRepositoriesInput;
}

export class UserUpdateWithoutKeysDataInput {
    email?: string;
    hash?: string;
    name?: string;
    role?: Role;
    gitLogin?: string;
    repositories?: RepositoryUpdateManyWithoutUserInput;
}

export class UserUpdateWithoutRepositoriesDataInput {
    email?: string;
    hash?: string;
    name?: string;
    role?: Role;
    gitLogin?: string;
    keys?: AppKeyUpdateManyWithoutUserInput;
}

export class UserUpsertWithoutKeysInput {
    update: UserUpdateWithoutKeysDataInput;
    create: UserCreateWithoutKeysInput;
}

export class UserUpsertWithoutRepositoriesInput {
    update: UserUpdateWithoutRepositoriesDataInput;
    create: UserCreateWithoutRepositoriesInput;
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
    hash?: string;
    hash_not?: string;
    hash_in?: string[];
    hash_not_in?: string[];
    hash_lt?: string;
    hash_lte?: string;
    hash_gt?: string;
    hash_gte?: string;
    hash_contains?: string;
    hash_not_contains?: string;
    hash_starts_with?: string;
    hash_not_starts_with?: string;
    hash_ends_with?: string;
    hash_not_ends_with?: string;
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
    gitLogin?: string;
    gitLogin_not?: string;
    gitLogin_in?: string[];
    gitLogin_not_in?: string[];
    gitLogin_lt?: string;
    gitLogin_lte?: string;
    gitLogin_gt?: string;
    gitLogin_gte?: string;
    gitLogin_contains?: string;
    gitLogin_not_contains?: string;
    gitLogin_starts_with?: string;
    gitLogin_not_starts_with?: string;
    gitLogin_ends_with?: string;
    gitLogin_not_ends_with?: string;
    keys_every?: AppKeyWhereInput;
    keys_some?: AppKeyWhereInput;
    keys_none?: AppKeyWhereInput;
    repositories_every?: RepositoryWhereInput;
    repositories_some?: RepositoryWhereInput;
    repositories_none?: RepositoryWhereInput;
}

export class UserWhereUniqueInput {
    id?: string;
    email?: string;
}

export interface Node {
    id: string;
}

export class AggregateAppKey {
    count: number;
}

export class AggregateRepository {
    count: number;
}

export class AggregateUser {
    count: number;
}

export class AppKey implements Node {
    id: string;
    user: User;
    key: string;
    name?: string;
}

export class AppKeyConnection {
    pageInfo: PageInfo;
    edges: AppKeyEdge[];
    aggregate: AggregateAppKey;
}

export class AppKeyEdge {
    node: AppKey;
    cursor: string;
}

export class AppKeyPreviousValues {
    id: string;
    key: string;
    name?: string;
}

export class AppKeySubscriptionPayload {
    mutation: MutationType;
    node?: AppKey;
    updatedFields?: string[];
    previousValues?: AppKeyPreviousValues;
}

export class BatchPayload {
    count: Long;
}

export abstract class IMutation {
    abstract createUser(data: UserCreateInput): User | Promise<User>;
    abstract createRepository(data: RepositoryCreateInput): Repository | Promise<Repository>;
    abstract createAppKey(data: AppKeyCreateInput): AppKey | Promise<AppKey>;
    abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
    abstract updateRepository(data: RepositoryUpdateInput, where: RepositoryWhereUniqueInput): Repository | Promise<Repository>;
    abstract updateAppKey(data: AppKeyUpdateInput, where: AppKeyWhereUniqueInput): AppKey | Promise<AppKey>;
    abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
    abstract deleteRepository(where: RepositoryWhereUniqueInput): Repository | Promise<Repository>;
    abstract deleteAppKey(where: AppKeyWhereUniqueInput): AppKey | Promise<AppKey>;
    abstract upsertUser(where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput): User | Promise<User>;
    abstract upsertRepository(where: RepositoryWhereUniqueInput, create: RepositoryCreateInput, update: RepositoryUpdateInput): Repository | Promise<Repository>;
    abstract upsertAppKey(where: AppKeyWhereUniqueInput, create: AppKeyCreateInput, update: AppKeyUpdateInput): AppKey | Promise<AppKey>;
    abstract updateManyUsers(data: UserUpdateManyMutationInput, where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyRepositories(data: RepositoryUpdateManyMutationInput, where?: RepositoryWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract updateManyAppKeys(data: AppKeyUpdateManyMutationInput, where?: AppKeyWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyRepositories(where?: RepositoryWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyAppKeys(where?: AppKeyWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract executeRaw(database?: PrismaDatabase, query: string): Json | Promise<Json>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract users(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): User[] | Promise<User[]>;
    abstract repositories(where?: RepositoryWhereInput, orderBy?: RepositoryOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Repository[] | Promise<Repository[]>;
    abstract appKeys(where?: AppKeyWhereInput, orderBy?: AppKeyOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AppKey[] | Promise<AppKey[]>;
    abstract user(where: UserWhereUniqueInput): User | Promise<User>;
    abstract repository(where: RepositoryWhereUniqueInput): Repository | Promise<Repository>;
    abstract appKey(where: AppKeyWhereUniqueInput): AppKey | Promise<AppKey>;
    abstract usersConnection(where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): UserConnection | Promise<UserConnection>;
    abstract repositoriesConnection(where?: RepositoryWhereInput, orderBy?: RepositoryOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): RepositoryConnection | Promise<RepositoryConnection>;
    abstract appKeysConnection(where?: AppKeyWhereInput, orderBy?: AppKeyOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): AppKeyConnection | Promise<AppKeyConnection>;
    abstract node(id: string): Node | Promise<Node>;
}

export class Repository implements Node {
    id: string;
    idExternal: string;
    createdAtExternal: DateTime;
    updatedAtExternal: DateTime;
    name: string;
    owner: string;
    user: User;
    isTracked: boolean;
    appKey: AppKey;
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
    idExternal: string;
    createdAtExternal: DateTime;
    updatedAtExternal: DateTime;
    name: string;
    owner: string;
    isTracked: boolean;
}

export class RepositorySubscriptionPayload {
    mutation: MutationType;
    node?: Repository;
    updatedFields?: string[];
    previousValues?: RepositoryPreviousValues;
}

export abstract class ISubscription {
    abstract user(where?: UserSubscriptionWhereInput): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
    abstract repository(where?: RepositorySubscriptionWhereInput): RepositorySubscriptionPayload | Promise<RepositorySubscriptionPayload>;
    abstract appKey(where?: AppKeySubscriptionWhereInput): AppKeySubscriptionPayload | Promise<AppKeySubscriptionPayload>;
}

export class User implements Node {
    id: string;
    email: string;
    hash: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    name?: string;
    role?: Role;
    keys?: AppKey[];
    repositories?: Repository[];
    gitLogin: string;
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
    hash: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    name?: string;
    role?: Role;
    gitLogin: string;
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
