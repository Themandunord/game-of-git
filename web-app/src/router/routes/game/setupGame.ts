import { IRoute } from '../IRoute.interface';

export const SETUP_GAME: IRoute = {
	path: 'setup-game/:repository',
	name: 'setup-game',
	displayName: 'Setup Game',
	component: () =>
		import(/* webpackChunkName: "setup-game" */ '@/views/game/setup/SetupGame.vue'),
	meta: {
		requiresAuth: true,
		requiresGitHubAuthToken: true,
		hideFromNav: true
	},
	props: {
		repository: {
			type: String
		}
	}
};
