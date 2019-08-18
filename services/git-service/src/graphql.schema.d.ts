/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum AppKeyOrderByInput {
	id_ASC = 'id_ASC',
	id_DESC = 'id_DESC',
	key_ASC = 'key_ASC',
	key_DESC = 'key_DESC',
	name_ASC = 'name_ASC',
	name_DESC = 'name_DESC'
}

export enum GameOrderByInput {
	id_ASC = 'id_ASC',
	id_DESC = 'id_DESC',
	createdAt_ASC = 'createdAt_ASC',
	createdAt_DESC = 'createdAt_DESC',
	updatedAt_ASC = 'updatedAt_ASC',
	updatedAt_DESC = 'updatedAt_DESC',
	title_ASC = 'title_ASC',
	title_DESC = 'title_DESC',
	type_ASC = 'type_ASC',
	type_DESC = 'type_DESC'
}

export enum GitHubWebhookEventOrderByInput {
	id_ASC = 'id_ASC',
	id_DESC = 'id_DESC',
	createdAt_ASC = 'createdAt_ASC',
	createdAt_DESC = 'createdAt_DESC',
	eventType_ASC = 'eventType_ASC',
	eventType_DESC = 'eventType_DESC',
	action_ASC = 'action_ASC',
	action_DESC = 'action_DESC',
	sender_ASC = 'sender_ASC',
	sender_DESC = 'sender_DESC'
}

export enum MutationType {
	CREATED = 'CREATED',
	UPDATED = 'UPDATED',
	DELETED = 'DELETED'
}

export enum PrismaDatabase {
	default = 'default'
}

export enum RepositoryOrderByInput {
	id_ASC = 'id_ASC',
	id_DESC = 'id_DESC',
	idExternal_ASC = 'idExternal_ASC',
	idExternal_DESC = 'idExternal_DESC',
	createdAtExternal_ASC = 'createdAtExternal_ASC',
	createdAtExternal_DESC = 'createdAtExternal_DESC',
	updatedAtExternal_ASC = 'updatedAtExternal_ASC',
	updatedAtExternal_DESC = 'updatedAtExternal_DESC',
	name_ASC = 'name_ASC',
	name_DESC = 'name_DESC',
	description_ASC = 'description_ASC',
	description_DESC = 'description_DESC',
	homepageUrl_ASC = 'homepageUrl_ASC',
	homepageUrl_DESC = 'homepageUrl_DESC',
	url_ASC = 'url_ASC',
	url_DESC = 'url_DESC',
	owner_ASC = 'owner_ASC',
	owner_DESC = 'owner_DESC',
	isTracked_ASC = 'isTracked_ASC',
	isTracked_DESC = 'isTracked_DESC',
	isFork_ASC = 'isFork_ASC',
	isFork_DESC = 'isFork_DESC',
	isLocked_ASC = 'isLocked_ASC',
	isLocked_DESC = 'isLocked_DESC',
	isPrivate_ASC = 'isPrivate_ASC',
	isPrivate_DESC = 'isPrivate_DESC',
	isArchived_ASC = 'isArchived_ASC',
	isArchived_DESC = 'isArchived_DESC',
	isDisabled_ASC = 'isDisabled_ASC',
	isDisabled_DESC = 'isDisabled_DESC',
	sshUrl_ASC = 'sshUrl_ASC',
	sshUrl_DESC = 'sshUrl_DESC',
	stargazers_ASC = 'stargazers_ASC',
	stargazers_DESC = 'stargazers_DESC',
	collaborators_ASC = 'collaborators_ASC',
	collaborators_DESC = 'collaborators_DESC',
	watchers_ASC = 'watchers_ASC',
	watchers_DESC = 'watchers_DESC',
	issues_ASC = 'issues_ASC',
	issues_DESC = 'issues_DESC',
	pullRequests_ASC = 'pullRequests_ASC',
	pullRequests_DESC = 'pullRequests_DESC'
}

export enum Role {
	USER = 'USER',
	ADMIN = 'ADMIN'
}

export enum UserOrderByInput {
	id_ASC = 'id_ASC',
	id_DESC = 'id_DESC',
	email_ASC = 'email_ASC',
	email_DESC = 'email_DESC',
	hash_ASC = 'hash_ASC',
	hash_DESC = 'hash_DESC',
	createdAt_ASC = 'createdAt_ASC',
	createdAt_DESC = 'createdAt_DESC',
	updatedAt_ASC = 'updatedAt_ASC',
	updatedAt_DESC = 'updatedAt_DESC',
	name_ASC = 'name_ASC',
	name_DESC = 'name_DESC',
	role_ASC = 'role_ASC',
	role_DESC = 'role_DESC',
	gitLogin_ASC = 'gitLogin_ASC',
	gitLogin_DESC = 'gitLogin_DESC'
}

export class AppKeyCreateInput {
	id?: string;
	key: string;
	name?: string;
	user: UserCreateOneWithoutKeysInput;
	repositories?: RepositoryCreateManyWithoutAppKeyInput;
}

export class AppKeyCreateManyWithoutUserInput {
	create?: AppKeyCreateWithoutUserInput[];
	connect?: AppKeyWhereUniqueInput[];
}

export class AppKeyCreateOneWithoutRepositoriesInput {
	create?: AppKeyCreateWithoutRepositoriesInput;
	connect?: AppKeyWhereUniqueInput;
}

export class AppKeyCreateWithoutRepositoriesInput {
	id?: string;
	key: string;
	name?: string;
	user: UserCreateOneWithoutKeysInput;
}

export class AppKeyCreateWithoutUserInput {
	id?: string;
	key: string;
	name?: string;
	repositories?: RepositoryCreateManyWithoutAppKeyInput;
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

export class AppKeyUpdateInput {
	key?: string;
	name?: string;
	user?: UserUpdateOneRequiredWithoutKeysInput;
	repositories?: RepositoryUpdateManyWithoutAppKeyInput;
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

export class AppKeyUpdateOneRequiredWithoutRepositoriesInput {
	create?: AppKeyCreateWithoutRepositoriesInput;
	connect?: AppKeyWhereUniqueInput;
	update?: AppKeyUpdateWithoutRepositoriesDataInput;
	upsert?: AppKeyUpsertWithoutRepositoriesInput;
}

export class AppKeyUpdateWithoutRepositoriesDataInput {
	key?: string;
	name?: string;
	user?: UserUpdateOneRequiredWithoutKeysInput;
}

export class AppKeyUpdateWithoutUserDataInput {
	key?: string;
	name?: string;
	repositories?: RepositoryUpdateManyWithoutAppKeyInput;
}

export class AppKeyUpdateWithWhereUniqueWithoutUserInput {
	where: AppKeyWhereUniqueInput;
	data: AppKeyUpdateWithoutUserDataInput;
}

export class AppKeyUpsertWithoutRepositoriesInput {
	update: AppKeyUpdateWithoutRepositoriesDataInput;
	create: AppKeyCreateWithoutRepositoriesInput;
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
	repositories_every?: RepositoryWhereInput;
	repositories_some?: RepositoryWhereInput;
	repositories_none?: RepositoryWhereInput;
}

export class AppKeyWhereUniqueInput {
	id?: string;
	key?: string;
}

export class GameCreateInput {
	id?: string;
	title: string;
	type: string;
	repository: RepositoryCreateOneWithoutGameInput;
	owner: UserCreateOneWithoutGamesOwnedInput;
}

export class GameCreateManyWithoutOwnerInput {
	create?: GameCreateWithoutOwnerInput[];
	connect?: GameWhereUniqueInput[];
}

export class GameCreateOneWithoutRepositoryInput {
	create?: GameCreateWithoutRepositoryInput;
	connect?: GameWhereUniqueInput;
}

export class GameCreateWithoutOwnerInput {
	id?: string;
	title: string;
	type: string;
	repository: RepositoryCreateOneWithoutGameInput;
}

export class GameCreateWithoutRepositoryInput {
	id?: string;
	title: string;
	type: string;
	owner: UserCreateOneWithoutGamesOwnedInput;
}

export class GameScalarWhereInput {
	AND?: GameScalarWhereInput[];
	OR?: GameScalarWhereInput[];
	NOT?: GameScalarWhereInput[];
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
	title?: string;
	title_not?: string;
	title_in?: string[];
	title_not_in?: string[];
	title_lt?: string;
	title_lte?: string;
	title_gt?: string;
	title_gte?: string;
	title_contains?: string;
	title_not_contains?: string;
	title_starts_with?: string;
	title_not_starts_with?: string;
	title_ends_with?: string;
	title_not_ends_with?: string;
	type?: string;
	type_not?: string;
	type_in?: string[];
	type_not_in?: string[];
	type_lt?: string;
	type_lte?: string;
	type_gt?: string;
	type_gte?: string;
	type_contains?: string;
	type_not_contains?: string;
	type_starts_with?: string;
	type_not_starts_with?: string;
	type_ends_with?: string;
	type_not_ends_with?: string;
}

export class GameSubscriptionWhereInput {
	AND?: GameSubscriptionWhereInput[];
	OR?: GameSubscriptionWhereInput[];
	NOT?: GameSubscriptionWhereInput[];
	mutation_in?: MutationType[];
	updatedFields_contains?: string;
	updatedFields_contains_every?: string[];
	updatedFields_contains_some?: string[];
	node?: GameWhereInput;
}

export class GameUpdateInput {
	title?: string;
	type?: string;
	repository?: RepositoryUpdateOneRequiredWithoutGameInput;
	owner?: UserUpdateOneRequiredWithoutGamesOwnedInput;
}

export class GameUpdateManyDataInput {
	title?: string;
	type?: string;
}

export class GameUpdateManyMutationInput {
	title?: string;
	type?: string;
}

export class GameUpdateManyWithoutOwnerInput {
	create?: GameCreateWithoutOwnerInput[];
	connect?: GameWhereUniqueInput[];
	set?: GameWhereUniqueInput[];
	disconnect?: GameWhereUniqueInput[];
	delete?: GameWhereUniqueInput[];
	update?: GameUpdateWithWhereUniqueWithoutOwnerInput[];
	updateMany?: GameUpdateManyWithWhereNestedInput[];
	deleteMany?: GameScalarWhereInput[];
	upsert?: GameUpsertWithWhereUniqueWithoutOwnerInput[];
}

export class GameUpdateManyWithWhereNestedInput {
	where: GameScalarWhereInput;
	data: GameUpdateManyDataInput;
}

export class GameUpdateOneWithoutRepositoryInput {
	create?: GameCreateWithoutRepositoryInput;
	connect?: GameWhereUniqueInput;
	disconnect?: boolean;
	delete?: boolean;
	update?: GameUpdateWithoutRepositoryDataInput;
	upsert?: GameUpsertWithoutRepositoryInput;
}

export class GameUpdateWithoutOwnerDataInput {
	title?: string;
	type?: string;
	repository?: RepositoryUpdateOneRequiredWithoutGameInput;
}

export class GameUpdateWithoutRepositoryDataInput {
	title?: string;
	type?: string;
	owner?: UserUpdateOneRequiredWithoutGamesOwnedInput;
}

export class GameUpdateWithWhereUniqueWithoutOwnerInput {
	where: GameWhereUniqueInput;
	data: GameUpdateWithoutOwnerDataInput;
}

export class GameUpsertWithoutRepositoryInput {
	update: GameUpdateWithoutRepositoryDataInput;
	create: GameCreateWithoutRepositoryInput;
}

export class GameUpsertWithWhereUniqueWithoutOwnerInput {
	where: GameWhereUniqueInput;
	update: GameUpdateWithoutOwnerDataInput;
	create: GameCreateWithoutOwnerInput;
}

export class GameWhereInput {
	AND?: GameWhereInput[];
	OR?: GameWhereInput[];
	NOT?: GameWhereInput[];
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
	title?: string;
	title_not?: string;
	title_in?: string[];
	title_not_in?: string[];
	title_lt?: string;
	title_lte?: string;
	title_gt?: string;
	title_gte?: string;
	title_contains?: string;
	title_not_contains?: string;
	title_starts_with?: string;
	title_not_starts_with?: string;
	title_ends_with?: string;
	title_not_ends_with?: string;
	type?: string;
	type_not?: string;
	type_in?: string[];
	type_not_in?: string[];
	type_lt?: string;
	type_lte?: string;
	type_gt?: string;
	type_gte?: string;
	type_contains?: string;
	type_not_contains?: string;
	type_starts_with?: string;
	type_not_starts_with?: string;
	type_ends_with?: string;
	type_not_ends_with?: string;
	repository?: RepositoryWhereInput;
	owner?: UserWhereInput;
}

export class GameWhereUniqueInput {
	id?: string;
}

export class GitHubWebhookEventCreateInput {
	id?: string;
	eventType: string;
	action?: string;
	sender: string;
	repository: RepositoryCreateOneWithoutWebhookEventsInput;
}

export class GitHubWebhookEventCreateManyWithoutRepositoryInput {
	create?: GitHubWebhookEventCreateWithoutRepositoryInput[];
	connect?: GitHubWebhookEventWhereUniqueInput[];
}

export class GitHubWebhookEventCreateWithoutRepositoryInput {
	id?: string;
	eventType: string;
	action?: string;
	sender: string;
}

export class GitHubWebhookEventScalarWhereInput {
	AND?: GitHubWebhookEventScalarWhereInput[];
	OR?: GitHubWebhookEventScalarWhereInput[];
	NOT?: GitHubWebhookEventScalarWhereInput[];
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
	createdAt?: DateTime;
	createdAt_not?: DateTime;
	createdAt_in?: DateTime[];
	createdAt_not_in?: DateTime[];
	createdAt_lt?: DateTime;
	createdAt_lte?: DateTime;
	createdAt_gt?: DateTime;
	createdAt_gte?: DateTime;
	eventType?: string;
	eventType_not?: string;
	eventType_in?: string[];
	eventType_not_in?: string[];
	eventType_lt?: string;
	eventType_lte?: string;
	eventType_gt?: string;
	eventType_gte?: string;
	eventType_contains?: string;
	eventType_not_contains?: string;
	eventType_starts_with?: string;
	eventType_not_starts_with?: string;
	eventType_ends_with?: string;
	eventType_not_ends_with?: string;
	action?: string;
	action_not?: string;
	action_in?: string[];
	action_not_in?: string[];
	action_lt?: string;
	action_lte?: string;
	action_gt?: string;
	action_gte?: string;
	action_contains?: string;
	action_not_contains?: string;
	action_starts_with?: string;
	action_not_starts_with?: string;
	action_ends_with?: string;
	action_not_ends_with?: string;
	sender?: string;
	sender_not?: string;
	sender_in?: string[];
	sender_not_in?: string[];
	sender_lt?: string;
	sender_lte?: string;
	sender_gt?: string;
	sender_gte?: string;
	sender_contains?: string;
	sender_not_contains?: string;
	sender_starts_with?: string;
	sender_not_starts_with?: string;
	sender_ends_with?: string;
	sender_not_ends_with?: string;
}

export class GitHubWebhookEventSubscriptionWhereInput {
	AND?: GitHubWebhookEventSubscriptionWhereInput[];
	OR?: GitHubWebhookEventSubscriptionWhereInput[];
	NOT?: GitHubWebhookEventSubscriptionWhereInput[];
	mutation_in?: MutationType[];
	updatedFields_contains?: string;
	updatedFields_contains_every?: string[];
	updatedFields_contains_some?: string[];
	node?: GitHubWebhookEventWhereInput;
}

export class GitHubWebhookEventUpdateInput {
	eventType?: string;
	action?: string;
	sender?: string;
	repository?: RepositoryUpdateOneRequiredWithoutWebhookEventsInput;
}

export class GitHubWebhookEventUpdateManyDataInput {
	eventType?: string;
	action?: string;
	sender?: string;
}

export class GitHubWebhookEventUpdateManyMutationInput {
	eventType?: string;
	action?: string;
	sender?: string;
}

export class GitHubWebhookEventUpdateManyWithoutRepositoryInput {
	create?: GitHubWebhookEventCreateWithoutRepositoryInput[];
	connect?: GitHubWebhookEventWhereUniqueInput[];
	set?: GitHubWebhookEventWhereUniqueInput[];
	disconnect?: GitHubWebhookEventWhereUniqueInput[];
	delete?: GitHubWebhookEventWhereUniqueInput[];
	update?: GitHubWebhookEventUpdateWithWhereUniqueWithoutRepositoryInput[];
	updateMany?: GitHubWebhookEventUpdateManyWithWhereNestedInput[];
	deleteMany?: GitHubWebhookEventScalarWhereInput[];
	upsert?: GitHubWebhookEventUpsertWithWhereUniqueWithoutRepositoryInput[];
}

export class GitHubWebhookEventUpdateManyWithWhereNestedInput {
	where: GitHubWebhookEventScalarWhereInput;
	data: GitHubWebhookEventUpdateManyDataInput;
}

export class GitHubWebhookEventUpdateWithoutRepositoryDataInput {
	eventType?: string;
	action?: string;
	sender?: string;
}

export class GitHubWebhookEventUpdateWithWhereUniqueWithoutRepositoryInput {
	where: GitHubWebhookEventWhereUniqueInput;
	data: GitHubWebhookEventUpdateWithoutRepositoryDataInput;
}

export class GitHubWebhookEventUpsertWithWhereUniqueWithoutRepositoryInput {
	where: GitHubWebhookEventWhereUniqueInput;
	update: GitHubWebhookEventUpdateWithoutRepositoryDataInput;
	create: GitHubWebhookEventCreateWithoutRepositoryInput;
}

export class GitHubWebhookEventWhereInput {
	AND?: GitHubWebhookEventWhereInput[];
	OR?: GitHubWebhookEventWhereInput[];
	NOT?: GitHubWebhookEventWhereInput[];
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
	createdAt?: DateTime;
	createdAt_not?: DateTime;
	createdAt_in?: DateTime[];
	createdAt_not_in?: DateTime[];
	createdAt_lt?: DateTime;
	createdAt_lte?: DateTime;
	createdAt_gt?: DateTime;
	createdAt_gte?: DateTime;
	eventType?: string;
	eventType_not?: string;
	eventType_in?: string[];
	eventType_not_in?: string[];
	eventType_lt?: string;
	eventType_lte?: string;
	eventType_gt?: string;
	eventType_gte?: string;
	eventType_contains?: string;
	eventType_not_contains?: string;
	eventType_starts_with?: string;
	eventType_not_starts_with?: string;
	eventType_ends_with?: string;
	eventType_not_ends_with?: string;
	action?: string;
	action_not?: string;
	action_in?: string[];
	action_not_in?: string[];
	action_lt?: string;
	action_lte?: string;
	action_gt?: string;
	action_gte?: string;
	action_contains?: string;
	action_not_contains?: string;
	action_starts_with?: string;
	action_not_starts_with?: string;
	action_ends_with?: string;
	action_not_ends_with?: string;
	sender?: string;
	sender_not?: string;
	sender_in?: string[];
	sender_not_in?: string[];
	sender_lt?: string;
	sender_lte?: string;
	sender_gt?: string;
	sender_gte?: string;
	sender_contains?: string;
	sender_not_contains?: string;
	sender_starts_with?: string;
	sender_not_starts_with?: string;
	sender_ends_with?: string;
	sender_not_ends_with?: string;
	repository?: RepositoryWhereInput;
}

export class GitHubWebhookEventWhereUniqueInput {
	id?: string;
}

export class RepositoryCreateInput {
	id?: string;
	idExternal: string;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: string;
	description?: string;
	homepageUrl?: string;
	url: string;
	owner: string;
	isTracked: boolean;
	isFork: boolean;
	isLocked: boolean;
	isPrivate: boolean;
	isArchived: boolean;
	isDisabled: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	addedBy: UserCreateOneWithoutAddedRepositoriesInput;
	appKey: AppKeyCreateOneWithoutRepositoriesInput;
	webhookEvents?: GitHubWebhookEventCreateManyWithoutRepositoryInput;
	game?: GameCreateOneWithoutRepositoryInput;
}

export class RepositoryCreateManyWithoutAddedByInput {
	create?: RepositoryCreateWithoutAddedByInput[];
	connect?: RepositoryWhereUniqueInput[];
}

export class RepositoryCreateManyWithoutAppKeyInput {
	create?: RepositoryCreateWithoutAppKeyInput[];
	connect?: RepositoryWhereUniqueInput[];
}

export class RepositoryCreateOneWithoutGameInput {
	create?: RepositoryCreateWithoutGameInput;
	connect?: RepositoryWhereUniqueInput;
}

export class RepositoryCreateOneWithoutWebhookEventsInput {
	create?: RepositoryCreateWithoutWebhookEventsInput;
	connect?: RepositoryWhereUniqueInput;
}

export class RepositoryCreateWithoutAddedByInput {
	id?: string;
	idExternal: string;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: string;
	description?: string;
	homepageUrl?: string;
	url: string;
	owner: string;
	isTracked: boolean;
	isFork: boolean;
	isLocked: boolean;
	isPrivate: boolean;
	isArchived: boolean;
	isDisabled: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	appKey: AppKeyCreateOneWithoutRepositoriesInput;
	webhookEvents?: GitHubWebhookEventCreateManyWithoutRepositoryInput;
	game?: GameCreateOneWithoutRepositoryInput;
}

export class RepositoryCreateWithoutAppKeyInput {
	id?: string;
	idExternal: string;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: string;
	description?: string;
	homepageUrl?: string;
	url: string;
	owner: string;
	isTracked: boolean;
	isFork: boolean;
	isLocked: boolean;
	isPrivate: boolean;
	isArchived: boolean;
	isDisabled: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	addedBy: UserCreateOneWithoutAddedRepositoriesInput;
	webhookEvents?: GitHubWebhookEventCreateManyWithoutRepositoryInput;
	game?: GameCreateOneWithoutRepositoryInput;
}

export class RepositoryCreateWithoutGameInput {
	id?: string;
	idExternal: string;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: string;
	description?: string;
	homepageUrl?: string;
	url: string;
	owner: string;
	isTracked: boolean;
	isFork: boolean;
	isLocked: boolean;
	isPrivate: boolean;
	isArchived: boolean;
	isDisabled: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	addedBy: UserCreateOneWithoutAddedRepositoriesInput;
	appKey: AppKeyCreateOneWithoutRepositoriesInput;
	webhookEvents?: GitHubWebhookEventCreateManyWithoutRepositoryInput;
}

export class RepositoryCreateWithoutWebhookEventsInput {
	id?: string;
	idExternal: string;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	name: string;
	description?: string;
	homepageUrl?: string;
	url: string;
	owner: string;
	isTracked: boolean;
	isFork: boolean;
	isLocked: boolean;
	isPrivate: boolean;
	isArchived: boolean;
	isDisabled: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	addedBy: UserCreateOneWithoutAddedRepositoriesInput;
	appKey: AppKeyCreateOneWithoutRepositoriesInput;
	game?: GameCreateOneWithoutRepositoryInput;
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
	description?: string;
	description_not?: string;
	description_in?: string[];
	description_not_in?: string[];
	description_lt?: string;
	description_lte?: string;
	description_gt?: string;
	description_gte?: string;
	description_contains?: string;
	description_not_contains?: string;
	description_starts_with?: string;
	description_not_starts_with?: string;
	description_ends_with?: string;
	description_not_ends_with?: string;
	homepageUrl?: string;
	homepageUrl_not?: string;
	homepageUrl_in?: string[];
	homepageUrl_not_in?: string[];
	homepageUrl_lt?: string;
	homepageUrl_lte?: string;
	homepageUrl_gt?: string;
	homepageUrl_gte?: string;
	homepageUrl_contains?: string;
	homepageUrl_not_contains?: string;
	homepageUrl_starts_with?: string;
	homepageUrl_not_starts_with?: string;
	homepageUrl_ends_with?: string;
	homepageUrl_not_ends_with?: string;
	url?: string;
	url_not?: string;
	url_in?: string[];
	url_not_in?: string[];
	url_lt?: string;
	url_lte?: string;
	url_gt?: string;
	url_gte?: string;
	url_contains?: string;
	url_not_contains?: string;
	url_starts_with?: string;
	url_not_starts_with?: string;
	url_ends_with?: string;
	url_not_ends_with?: string;
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
	isFork?: boolean;
	isFork_not?: boolean;
	isLocked?: boolean;
	isLocked_not?: boolean;
	isPrivate?: boolean;
	isPrivate_not?: boolean;
	isArchived?: boolean;
	isArchived_not?: boolean;
	isDisabled?: boolean;
	isDisabled_not?: boolean;
	sshUrl?: string;
	sshUrl_not?: string;
	sshUrl_in?: string[];
	sshUrl_not_in?: string[];
	sshUrl_lt?: string;
	sshUrl_lte?: string;
	sshUrl_gt?: string;
	sshUrl_gte?: string;
	sshUrl_contains?: string;
	sshUrl_not_contains?: string;
	sshUrl_starts_with?: string;
	sshUrl_not_starts_with?: string;
	sshUrl_ends_with?: string;
	sshUrl_not_ends_with?: string;
	stargazers?: number;
	stargazers_not?: number;
	stargazers_in?: number[];
	stargazers_not_in?: number[];
	stargazers_lt?: number;
	stargazers_lte?: number;
	stargazers_gt?: number;
	stargazers_gte?: number;
	collaborators?: number;
	collaborators_not?: number;
	collaborators_in?: number[];
	collaborators_not_in?: number[];
	collaborators_lt?: number;
	collaborators_lte?: number;
	collaborators_gt?: number;
	collaborators_gte?: number;
	watchers?: number;
	watchers_not?: number;
	watchers_in?: number[];
	watchers_not_in?: number[];
	watchers_lt?: number;
	watchers_lte?: number;
	watchers_gt?: number;
	watchers_gte?: number;
	issues?: number;
	issues_not?: number;
	issues_in?: number[];
	issues_not_in?: number[];
	issues_lt?: number;
	issues_lte?: number;
	issues_gt?: number;
	issues_gte?: number;
	pullRequests?: number;
	pullRequests_not?: number;
	pullRequests_in?: number[];
	pullRequests_not_in?: number[];
	pullRequests_lt?: number;
	pullRequests_lte?: number;
	pullRequests_gt?: number;
	pullRequests_gte?: number;
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
	description?: string;
	homepageUrl?: string;
	url?: string;
	owner?: string;
	isTracked?: boolean;
	isFork?: boolean;
	isLocked?: boolean;
	isPrivate?: boolean;
	isArchived?: boolean;
	isDisabled?: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	addedBy?: UserUpdateOneRequiredWithoutAddedRepositoriesInput;
	appKey?: AppKeyUpdateOneRequiredWithoutRepositoriesInput;
	webhookEvents?: GitHubWebhookEventUpdateManyWithoutRepositoryInput;
	game?: GameUpdateOneWithoutRepositoryInput;
}

export class RepositoryUpdateManyDataInput {
	idExternal?: string;
	createdAtExternal?: DateTime;
	updatedAtExternal?: DateTime;
	name?: string;
	description?: string;
	homepageUrl?: string;
	url?: string;
	owner?: string;
	isTracked?: boolean;
	isFork?: boolean;
	isLocked?: boolean;
	isPrivate?: boolean;
	isArchived?: boolean;
	isDisabled?: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
}

export class RepositoryUpdateManyMutationInput {
	idExternal?: string;
	createdAtExternal?: DateTime;
	updatedAtExternal?: DateTime;
	name?: string;
	description?: string;
	homepageUrl?: string;
	url?: string;
	owner?: string;
	isTracked?: boolean;
	isFork?: boolean;
	isLocked?: boolean;
	isPrivate?: boolean;
	isArchived?: boolean;
	isDisabled?: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
}

export class RepositoryUpdateManyWithoutAddedByInput {
	create?: RepositoryCreateWithoutAddedByInput[];
	connect?: RepositoryWhereUniqueInput[];
	set?: RepositoryWhereUniqueInput[];
	disconnect?: RepositoryWhereUniqueInput[];
	delete?: RepositoryWhereUniqueInput[];
	update?: RepositoryUpdateWithWhereUniqueWithoutAddedByInput[];
	updateMany?: RepositoryUpdateManyWithWhereNestedInput[];
	deleteMany?: RepositoryScalarWhereInput[];
	upsert?: RepositoryUpsertWithWhereUniqueWithoutAddedByInput[];
}

export class RepositoryUpdateManyWithoutAppKeyInput {
	create?: RepositoryCreateWithoutAppKeyInput[];
	connect?: RepositoryWhereUniqueInput[];
	set?: RepositoryWhereUniqueInput[];
	disconnect?: RepositoryWhereUniqueInput[];
	delete?: RepositoryWhereUniqueInput[];
	update?: RepositoryUpdateWithWhereUniqueWithoutAppKeyInput[];
	updateMany?: RepositoryUpdateManyWithWhereNestedInput[];
	deleteMany?: RepositoryScalarWhereInput[];
	upsert?: RepositoryUpsertWithWhereUniqueWithoutAppKeyInput[];
}

export class RepositoryUpdateManyWithWhereNestedInput {
	where: RepositoryScalarWhereInput;
	data: RepositoryUpdateManyDataInput;
}

export class RepositoryUpdateOneRequiredWithoutGameInput {
	create?: RepositoryCreateWithoutGameInput;
	connect?: RepositoryWhereUniqueInput;
	update?: RepositoryUpdateWithoutGameDataInput;
	upsert?: RepositoryUpsertWithoutGameInput;
}

export class RepositoryUpdateOneRequiredWithoutWebhookEventsInput {
	create?: RepositoryCreateWithoutWebhookEventsInput;
	connect?: RepositoryWhereUniqueInput;
	update?: RepositoryUpdateWithoutWebhookEventsDataInput;
	upsert?: RepositoryUpsertWithoutWebhookEventsInput;
}

export class RepositoryUpdateWithoutAddedByDataInput {
	idExternal?: string;
	createdAtExternal?: DateTime;
	updatedAtExternal?: DateTime;
	name?: string;
	description?: string;
	homepageUrl?: string;
	url?: string;
	owner?: string;
	isTracked?: boolean;
	isFork?: boolean;
	isLocked?: boolean;
	isPrivate?: boolean;
	isArchived?: boolean;
	isDisabled?: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	appKey?: AppKeyUpdateOneRequiredWithoutRepositoriesInput;
	webhookEvents?: GitHubWebhookEventUpdateManyWithoutRepositoryInput;
	game?: GameUpdateOneWithoutRepositoryInput;
}

export class RepositoryUpdateWithoutAppKeyDataInput {
	idExternal?: string;
	createdAtExternal?: DateTime;
	updatedAtExternal?: DateTime;
	name?: string;
	description?: string;
	homepageUrl?: string;
	url?: string;
	owner?: string;
	isTracked?: boolean;
	isFork?: boolean;
	isLocked?: boolean;
	isPrivate?: boolean;
	isArchived?: boolean;
	isDisabled?: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	addedBy?: UserUpdateOneRequiredWithoutAddedRepositoriesInput;
	webhookEvents?: GitHubWebhookEventUpdateManyWithoutRepositoryInput;
	game?: GameUpdateOneWithoutRepositoryInput;
}

export class RepositoryUpdateWithoutGameDataInput {
	idExternal?: string;
	createdAtExternal?: DateTime;
	updatedAtExternal?: DateTime;
	name?: string;
	description?: string;
	homepageUrl?: string;
	url?: string;
	owner?: string;
	isTracked?: boolean;
	isFork?: boolean;
	isLocked?: boolean;
	isPrivate?: boolean;
	isArchived?: boolean;
	isDisabled?: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	addedBy?: UserUpdateOneRequiredWithoutAddedRepositoriesInput;
	appKey?: AppKeyUpdateOneRequiredWithoutRepositoriesInput;
	webhookEvents?: GitHubWebhookEventUpdateManyWithoutRepositoryInput;
}

export class RepositoryUpdateWithoutWebhookEventsDataInput {
	idExternal?: string;
	createdAtExternal?: DateTime;
	updatedAtExternal?: DateTime;
	name?: string;
	description?: string;
	homepageUrl?: string;
	url?: string;
	owner?: string;
	isTracked?: boolean;
	isFork?: boolean;
	isLocked?: boolean;
	isPrivate?: boolean;
	isArchived?: boolean;
	isDisabled?: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	addedBy?: UserUpdateOneRequiredWithoutAddedRepositoriesInput;
	appKey?: AppKeyUpdateOneRequiredWithoutRepositoriesInput;
	game?: GameUpdateOneWithoutRepositoryInput;
}

export class RepositoryUpdateWithWhereUniqueWithoutAddedByInput {
	where: RepositoryWhereUniqueInput;
	data: RepositoryUpdateWithoutAddedByDataInput;
}

export class RepositoryUpdateWithWhereUniqueWithoutAppKeyInput {
	where: RepositoryWhereUniqueInput;
	data: RepositoryUpdateWithoutAppKeyDataInput;
}

export class RepositoryUpsertWithoutGameInput {
	update: RepositoryUpdateWithoutGameDataInput;
	create: RepositoryCreateWithoutGameInput;
}

export class RepositoryUpsertWithoutWebhookEventsInput {
	update: RepositoryUpdateWithoutWebhookEventsDataInput;
	create: RepositoryCreateWithoutWebhookEventsInput;
}

export class RepositoryUpsertWithWhereUniqueWithoutAddedByInput {
	where: RepositoryWhereUniqueInput;
	update: RepositoryUpdateWithoutAddedByDataInput;
	create: RepositoryCreateWithoutAddedByInput;
}

export class RepositoryUpsertWithWhereUniqueWithoutAppKeyInput {
	where: RepositoryWhereUniqueInput;
	update: RepositoryUpdateWithoutAppKeyDataInput;
	create: RepositoryCreateWithoutAppKeyInput;
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
	description?: string;
	description_not?: string;
	description_in?: string[];
	description_not_in?: string[];
	description_lt?: string;
	description_lte?: string;
	description_gt?: string;
	description_gte?: string;
	description_contains?: string;
	description_not_contains?: string;
	description_starts_with?: string;
	description_not_starts_with?: string;
	description_ends_with?: string;
	description_not_ends_with?: string;
	homepageUrl?: string;
	homepageUrl_not?: string;
	homepageUrl_in?: string[];
	homepageUrl_not_in?: string[];
	homepageUrl_lt?: string;
	homepageUrl_lte?: string;
	homepageUrl_gt?: string;
	homepageUrl_gte?: string;
	homepageUrl_contains?: string;
	homepageUrl_not_contains?: string;
	homepageUrl_starts_with?: string;
	homepageUrl_not_starts_with?: string;
	homepageUrl_ends_with?: string;
	homepageUrl_not_ends_with?: string;
	url?: string;
	url_not?: string;
	url_in?: string[];
	url_not_in?: string[];
	url_lt?: string;
	url_lte?: string;
	url_gt?: string;
	url_gte?: string;
	url_contains?: string;
	url_not_contains?: string;
	url_starts_with?: string;
	url_not_starts_with?: string;
	url_ends_with?: string;
	url_not_ends_with?: string;
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
	isFork?: boolean;
	isFork_not?: boolean;
	isLocked?: boolean;
	isLocked_not?: boolean;
	isPrivate?: boolean;
	isPrivate_not?: boolean;
	isArchived?: boolean;
	isArchived_not?: boolean;
	isDisabled?: boolean;
	isDisabled_not?: boolean;
	sshUrl?: string;
	sshUrl_not?: string;
	sshUrl_in?: string[];
	sshUrl_not_in?: string[];
	sshUrl_lt?: string;
	sshUrl_lte?: string;
	sshUrl_gt?: string;
	sshUrl_gte?: string;
	sshUrl_contains?: string;
	sshUrl_not_contains?: string;
	sshUrl_starts_with?: string;
	sshUrl_not_starts_with?: string;
	sshUrl_ends_with?: string;
	sshUrl_not_ends_with?: string;
	stargazers?: number;
	stargazers_not?: number;
	stargazers_in?: number[];
	stargazers_not_in?: number[];
	stargazers_lt?: number;
	stargazers_lte?: number;
	stargazers_gt?: number;
	stargazers_gte?: number;
	collaborators?: number;
	collaborators_not?: number;
	collaborators_in?: number[];
	collaborators_not_in?: number[];
	collaborators_lt?: number;
	collaborators_lte?: number;
	collaborators_gt?: number;
	collaborators_gte?: number;
	watchers?: number;
	watchers_not?: number;
	watchers_in?: number[];
	watchers_not_in?: number[];
	watchers_lt?: number;
	watchers_lte?: number;
	watchers_gt?: number;
	watchers_gte?: number;
	issues?: number;
	issues_not?: number;
	issues_in?: number[];
	issues_not_in?: number[];
	issues_lt?: number;
	issues_lte?: number;
	issues_gt?: number;
	issues_gte?: number;
	pullRequests?: number;
	pullRequests_not?: number;
	pullRequests_in?: number[];
	pullRequests_not_in?: number[];
	pullRequests_lt?: number;
	pullRequests_lte?: number;
	pullRequests_gt?: number;
	pullRequests_gte?: number;
	addedBy?: UserWhereInput;
	appKey?: AppKeyWhereInput;
	webhookEvents_every?: GitHubWebhookEventWhereInput;
	webhookEvents_some?: GitHubWebhookEventWhereInput;
	webhookEvents_none?: GitHubWebhookEventWhereInput;
	game?: GameWhereInput;
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
	addedRepositories?: RepositoryCreateManyWithoutAddedByInput;
	gamesOwned?: GameCreateManyWithoutOwnerInput;
}

export class UserCreateOneWithoutAddedRepositoriesInput {
	create?: UserCreateWithoutAddedRepositoriesInput;
	connect?: UserWhereUniqueInput;
}

export class UserCreateOneWithoutGamesOwnedInput {
	create?: UserCreateWithoutGamesOwnedInput;
	connect?: UserWhereUniqueInput;
}

export class UserCreateOneWithoutKeysInput {
	create?: UserCreateWithoutKeysInput;
	connect?: UserWhereUniqueInput;
}

export class UserCreateWithoutAddedRepositoriesInput {
	id?: string;
	email: string;
	hash: string;
	name?: string;
	role?: Role;
	gitLogin: string;
	keys?: AppKeyCreateManyWithoutUserInput;
	gamesOwned?: GameCreateManyWithoutOwnerInput;
}

export class UserCreateWithoutGamesOwnedInput {
	id?: string;
	email: string;
	hash: string;
	name?: string;
	role?: Role;
	gitLogin: string;
	keys?: AppKeyCreateManyWithoutUserInput;
	addedRepositories?: RepositoryCreateManyWithoutAddedByInput;
}

export class UserCreateWithoutKeysInput {
	id?: string;
	email: string;
	hash: string;
	name?: string;
	role?: Role;
	gitLogin: string;
	addedRepositories?: RepositoryCreateManyWithoutAddedByInput;
	gamesOwned?: GameCreateManyWithoutOwnerInput;
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
	addedRepositories?: RepositoryUpdateManyWithoutAddedByInput;
	gamesOwned?: GameUpdateManyWithoutOwnerInput;
}

export class UserUpdateManyMutationInput {
	email?: string;
	hash?: string;
	name?: string;
	role?: Role;
	gitLogin?: string;
}

export class UserUpdateOneRequiredWithoutAddedRepositoriesInput {
	create?: UserCreateWithoutAddedRepositoriesInput;
	connect?: UserWhereUniqueInput;
	update?: UserUpdateWithoutAddedRepositoriesDataInput;
	upsert?: UserUpsertWithoutAddedRepositoriesInput;
}

export class UserUpdateOneRequiredWithoutGamesOwnedInput {
	create?: UserCreateWithoutGamesOwnedInput;
	connect?: UserWhereUniqueInput;
	update?: UserUpdateWithoutGamesOwnedDataInput;
	upsert?: UserUpsertWithoutGamesOwnedInput;
}

export class UserUpdateOneRequiredWithoutKeysInput {
	create?: UserCreateWithoutKeysInput;
	connect?: UserWhereUniqueInput;
	update?: UserUpdateWithoutKeysDataInput;
	upsert?: UserUpsertWithoutKeysInput;
}

export class UserUpdateWithoutAddedRepositoriesDataInput {
	email?: string;
	hash?: string;
	name?: string;
	role?: Role;
	gitLogin?: string;
	keys?: AppKeyUpdateManyWithoutUserInput;
	gamesOwned?: GameUpdateManyWithoutOwnerInput;
}

export class UserUpdateWithoutGamesOwnedDataInput {
	email?: string;
	hash?: string;
	name?: string;
	role?: Role;
	gitLogin?: string;
	keys?: AppKeyUpdateManyWithoutUserInput;
	addedRepositories?: RepositoryUpdateManyWithoutAddedByInput;
}

export class UserUpdateWithoutKeysDataInput {
	email?: string;
	hash?: string;
	name?: string;
	role?: Role;
	gitLogin?: string;
	addedRepositories?: RepositoryUpdateManyWithoutAddedByInput;
	gamesOwned?: GameUpdateManyWithoutOwnerInput;
}

export class UserUpsertWithoutAddedRepositoriesInput {
	update: UserUpdateWithoutAddedRepositoriesDataInput;
	create: UserCreateWithoutAddedRepositoriesInput;
}

export class UserUpsertWithoutGamesOwnedInput {
	update: UserUpdateWithoutGamesOwnedDataInput;
	create: UserCreateWithoutGamesOwnedInput;
}

export class UserUpsertWithoutKeysInput {
	update: UserUpdateWithoutKeysDataInput;
	create: UserCreateWithoutKeysInput;
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
	addedRepositories_every?: RepositoryWhereInput;
	addedRepositories_some?: RepositoryWhereInput;
	addedRepositories_none?: RepositoryWhereInput;
	gamesOwned_every?: GameWhereInput;
	gamesOwned_some?: GameWhereInput;
	gamesOwned_none?: GameWhereInput;
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

export class AggregateGame {
	count: number;
}

export class AggregateGitHubWebhookEvent {
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
	repositories?: Repository[];
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

export class Game implements Node {
	id: string;
	createdAt: DateTime;
	updatedAt: DateTime;
	repository: Repository;
	title: string;
	owner: User;
	type: string;
}

export class GameConnection {
	pageInfo: PageInfo;
	edges: GameEdge[];
	aggregate: AggregateGame;
}

export class GameEdge {
	node: Game;
	cursor: string;
}

export class GamePreviousValues {
	id: string;
	createdAt: DateTime;
	updatedAt: DateTime;
	title: string;
	type: string;
}

export class GameSubscriptionPayload {
	mutation: MutationType;
	node?: Game;
	updatedFields?: string[];
	previousValues?: GamePreviousValues;
}

export class GitHubWebhookEvent implements Node {
	id: string;
	createdAt: DateTime;
	repository: Repository;
	eventType: string;
	action?: string;
	sender: string;
}

export class GitHubWebhookEventConnection {
	pageInfo: PageInfo;
	edges: GitHubWebhookEventEdge[];
	aggregate: AggregateGitHubWebhookEvent;
}

export class GitHubWebhookEventEdge {
	node: GitHubWebhookEvent;
	cursor: string;
}

export class GitHubWebhookEventPreviousValues {
	id: string;
	createdAt: DateTime;
	eventType: string;
	action?: string;
	sender: string;
}

export class GitHubWebhookEventSubscriptionPayload {
	mutation: MutationType;
	node?: GitHubWebhookEvent;
	updatedFields?: string[];
	previousValues?: GitHubWebhookEventPreviousValues;
}

export abstract class IMutation {
	abstract createUser(data: UserCreateInput): User | Promise<User>;
	abstract createAppKey(data: AppKeyCreateInput): AppKey | Promise<AppKey>;
	abstract createRepository(data: RepositoryCreateInput): Repository | Promise<Repository>;
	abstract createGitHubWebhookEvent(
		data: GitHubWebhookEventCreateInput
	): GitHubWebhookEvent | Promise<GitHubWebhookEvent>;
	abstract createGame(data: GameCreateInput): Game | Promise<Game>;
	abstract updateUser(data: UserUpdateInput, where: UserWhereUniqueInput): User | Promise<User>;
	abstract updateAppKey(
		data: AppKeyUpdateInput,
		where: AppKeyWhereUniqueInput
	): AppKey | Promise<AppKey>;
	abstract updateRepository(
		data: RepositoryUpdateInput,
		where: RepositoryWhereUniqueInput
	): Repository | Promise<Repository>;
	abstract updateGitHubWebhookEvent(
		data: GitHubWebhookEventUpdateInput,
		where: GitHubWebhookEventWhereUniqueInput
	): GitHubWebhookEvent | Promise<GitHubWebhookEvent>;
	abstract updateGame(data: GameUpdateInput, where: GameWhereUniqueInput): Game | Promise<Game>;
	abstract deleteUser(where: UserWhereUniqueInput): User | Promise<User>;
	abstract deleteAppKey(where: AppKeyWhereUniqueInput): AppKey | Promise<AppKey>;
	abstract deleteRepository(where: RepositoryWhereUniqueInput): Repository | Promise<Repository>;
	abstract deleteGitHubWebhookEvent(
		where: GitHubWebhookEventWhereUniqueInput
	): GitHubWebhookEvent | Promise<GitHubWebhookEvent>;
	abstract deleteGame(where: GameWhereUniqueInput): Game | Promise<Game>;
	abstract upsertUser(
		where: UserWhereUniqueInput,
		create: UserCreateInput,
		update: UserUpdateInput
	): User | Promise<User>;
	abstract upsertAppKey(
		where: AppKeyWhereUniqueInput,
		create: AppKeyCreateInput,
		update: AppKeyUpdateInput
	): AppKey | Promise<AppKey>;
	abstract upsertRepository(
		where: RepositoryWhereUniqueInput,
		create: RepositoryCreateInput,
		update: RepositoryUpdateInput
	): Repository | Promise<Repository>;
	abstract upsertGitHubWebhookEvent(
		where: GitHubWebhookEventWhereUniqueInput,
		create: GitHubWebhookEventCreateInput,
		update: GitHubWebhookEventUpdateInput
	): GitHubWebhookEvent | Promise<GitHubWebhookEvent>;
	abstract upsertGame(
		where: GameWhereUniqueInput,
		create: GameCreateInput,
		update: GameUpdateInput
	): Game | Promise<Game>;
	abstract updateManyUsers(
		data: UserUpdateManyMutationInput,
		where?: UserWhereInput
	): BatchPayload | Promise<BatchPayload>;
	abstract updateManyAppKeys(
		data: AppKeyUpdateManyMutationInput,
		where?: AppKeyWhereInput
	): BatchPayload | Promise<BatchPayload>;
	abstract updateManyRepositories(
		data: RepositoryUpdateManyMutationInput,
		where?: RepositoryWhereInput
	): BatchPayload | Promise<BatchPayload>;
	abstract updateManyGitHubWebhookEvents(
		data: GitHubWebhookEventUpdateManyMutationInput,
		where?: GitHubWebhookEventWhereInput
	): BatchPayload | Promise<BatchPayload>;
	abstract updateManyGames(
		data: GameUpdateManyMutationInput,
		where?: GameWhereInput
	): BatchPayload | Promise<BatchPayload>;
	abstract deleteManyUsers(where?: UserWhereInput): BatchPayload | Promise<BatchPayload>;
	abstract deleteManyAppKeys(where?: AppKeyWhereInput): BatchPayload | Promise<BatchPayload>;
	abstract deleteManyRepositories(
		where?: RepositoryWhereInput
	): BatchPayload | Promise<BatchPayload>;
	abstract deleteManyGitHubWebhookEvents(
		where?: GitHubWebhookEventWhereInput
	): BatchPayload | Promise<BatchPayload>;
	abstract deleteManyGames(where?: GameWhereInput): BatchPayload | Promise<BatchPayload>;
	abstract executeRaw(database?: PrismaDatabase, query: string): Json | Promise<Json>;
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
		last?: number
	): User[] | Promise<User[]>;
	abstract appKeys(
		where?: AppKeyWhereInput,
		orderBy?: AppKeyOrderByInput,
		skip?: number,
		after?: string,
		before?: string,
		first?: number,
		last?: number
	): AppKey[] | Promise<AppKey[]>;
	abstract repositories(
		where?: RepositoryWhereInput,
		orderBy?: RepositoryOrderByInput,
		skip?: number,
		after?: string,
		before?: string,
		first?: number,
		last?: number
	): Repository[] | Promise<Repository[]>;
	abstract gitHubWebhookEvents(
		where?: GitHubWebhookEventWhereInput,
		orderBy?: GitHubWebhookEventOrderByInput,
		skip?: number,
		after?: string,
		before?: string,
		first?: number,
		last?: number
	): GitHubWebhookEvent[] | Promise<GitHubWebhookEvent[]>;
	abstract games(
		where?: GameWhereInput,
		orderBy?: GameOrderByInput,
		skip?: number,
		after?: string,
		before?: string,
		first?: number,
		last?: number
	): Game[] | Promise<Game[]>;
	abstract user(where: UserWhereUniqueInput): User | Promise<User>;
	abstract appKey(where: AppKeyWhereUniqueInput): AppKey | Promise<AppKey>;
	abstract repository(where: RepositoryWhereUniqueInput): Repository | Promise<Repository>;
	abstract gitHubWebhookEvent(
		where: GitHubWebhookEventWhereUniqueInput
	): GitHubWebhookEvent | Promise<GitHubWebhookEvent>;
	abstract game(where: GameWhereUniqueInput): Game | Promise<Game>;
	abstract usersConnection(
		where?: UserWhereInput,
		orderBy?: UserOrderByInput,
		skip?: number,
		after?: string,
		before?: string,
		first?: number,
		last?: number
	): UserConnection | Promise<UserConnection>;
	abstract appKeysConnection(
		where?: AppKeyWhereInput,
		orderBy?: AppKeyOrderByInput,
		skip?: number,
		after?: string,
		before?: string,
		first?: number,
		last?: number
	): AppKeyConnection | Promise<AppKeyConnection>;
	abstract repositoriesConnection(
		where?: RepositoryWhereInput,
		orderBy?: RepositoryOrderByInput,
		skip?: number,
		after?: string,
		before?: string,
		first?: number,
		last?: number
	): RepositoryConnection | Promise<RepositoryConnection>;
	abstract gitHubWebhookEventsConnection(
		where?: GitHubWebhookEventWhereInput,
		orderBy?: GitHubWebhookEventOrderByInput,
		skip?: number,
		after?: string,
		before?: string,
		first?: number,
		last?: number
	): GitHubWebhookEventConnection | Promise<GitHubWebhookEventConnection>;
	abstract gamesConnection(
		where?: GameWhereInput,
		orderBy?: GameOrderByInput,
		skip?: number,
		after?: string,
		before?: string,
		first?: number,
		last?: number
	): GameConnection | Promise<GameConnection>;
	abstract node(id: string): Node | Promise<Node>;
}

export class Repository implements Node {
	id: string;
	idExternal: string;
	createdAtExternal: DateTime;
	updatedAtExternal: DateTime;
	addedBy: User;
	name: string;
	description: string;
	homepageUrl?: string;
	url: string;
	owner: string;
	isTracked: boolean;
	appKey: AppKey;
	isFork: boolean;
	isLocked: boolean;
	isPrivate: boolean;
	isArchived: boolean;
	isDisabled: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
	webhookEvents?: GitHubWebhookEvent[];
	game?: Game;
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
	description: string;
	homepageUrl?: string;
	url: string;
	owner: string;
	isTracked: boolean;
	isFork: boolean;
	isLocked: boolean;
	isPrivate: boolean;
	isArchived: boolean;
	isDisabled: boolean;
	sshUrl?: string;
	stargazers?: number;
	collaborators?: number;
	watchers?: number;
	issues?: number;
	pullRequests?: number;
}

export class RepositorySubscriptionPayload {
	mutation: MutationType;
	node?: Repository;
	updatedFields?: string[];
	previousValues?: RepositoryPreviousValues;
}

export abstract class ISubscription {
	abstract user(
		where?: UserSubscriptionWhereInput
	): UserSubscriptionPayload | Promise<UserSubscriptionPayload>;
	abstract appKey(
		where?: AppKeySubscriptionWhereInput
	): AppKeySubscriptionPayload | Promise<AppKeySubscriptionPayload>;
	abstract repository(
		where?: RepositorySubscriptionWhereInput
	): RepositorySubscriptionPayload | Promise<RepositorySubscriptionPayload>;
	abstract gitHubWebhookEvent(
		where?: GitHubWebhookEventSubscriptionWhereInput
	): GitHubWebhookEventSubscriptionPayload | Promise<GitHubWebhookEventSubscriptionPayload>;
	abstract game(
		where?: GameSubscriptionWhereInput
	): GameSubscriptionPayload | Promise<GameSubscriptionPayload>;
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
	addedRepositories?: Repository[];
	gitLogin: string;
	gamesOwned?: Game[];
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
