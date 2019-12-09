/**
 * Extensible context in the RouteManager for defining contextual parameters around route customizations
 */
export interface IRouteManagerContext {
	hasJwt?: boolean;
	hasGitHubAuthToken?: boolean;
}
