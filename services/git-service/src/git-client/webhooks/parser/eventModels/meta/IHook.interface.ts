export interface IHook {
	type: 'repository' | string;
	id: number;
	name: 'web';
	active: boolean;
	events: string[];
	config: {
		contentType: 'json' | string;
		insecureSsl: string;
		url: string;
	};
	updatedAt: string;
	createdAt: string;
}
