import { RouteConfig } from 'vue-router/types/router';

export interface IRoute extends RouteConfig {
	displayName: string;
	hideFromNav?: boolean;
}
