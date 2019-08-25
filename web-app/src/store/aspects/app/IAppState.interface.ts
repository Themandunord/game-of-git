export type Connecting = 'connecting';
export type Reconnecting = 'reconnecting';
export type Connected = 'connected';
export type Disconnected = 'disconnected';
export type ConnectionState = Connecting | Reconnecting | Connected | Disconnected;

export const CONNECTING: Connecting = 'connecting';
export const RECONNECTING: Reconnecting = 'reconnecting';
export const CONNECTED: Connected = 'connected';
export const DISCONNECTED: Disconnected = 'disconnected';

export const CONNECTION_STATES = [CONNECTING, RECONNECTING, CONNECTING, DISCONNECTED];

export interface IConnectionState {
	reconnectAttempt: number | null;
	state: ConnectionState;
}

export interface IAppState {
	navExpanded: boolean;
	connection: IConnectionState;
}
