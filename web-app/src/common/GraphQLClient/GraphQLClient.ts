import { Vue } from 'vue-property-decorator';
import { isString, isArray } from 'util';

export abstract class ErrorHandlerVueComponent extends Vue {
	protected apolloErrors: GQLError[] | string = [];

	/**
	 * List the keys in the class that require
	 */
	protected abstract apolloValidationKeys: string[] = [];

	public setApolloErrors(errors: GQLError[] | string) {
		console.log('setting errors: ', errors);
		this.apolloErrors = errors;
	}

	get errors() {
		return this.apolloErrors;
	}

	/**
	 * If there is a root error then the errors key will be a string and is a more critical error, this iwll thus be given the `critical` key.
	 */
	get errorMessages() {
		if (isString(this.errors)) {
			return {
				critical: this.errors
			};
		}

		return this.apolloValidationKeys.reduce(
			(prevObj, val) => ({
				...prevObj,
				[val]: GraphQLClient.errorMessage(this.errors, val)
			}),
			{}
		);
	}
}

interface GQLError {
	children: any[];
	constraints: any;
	property: string;
	target: any;
	value: any;
}

interface WeirdErrorPayload {
	extenstions: {
		code: string;
		exception: any; //todo
	};
	locations: any[]; //todo
	message: {
		error: string;
		message: GQLError[];
	};
	path: string[];
}

export class GraphQLClient {
	// todo: better typings around the component
	public static errorHandler(component: ErrorHandlerVueComponent, errors: WeirdErrorPayload[]) {
		console.log('GraphQLClient errorHandler', component, errors);
		const apolloErrors = errors[0].message.message;
		component.setApolloErrors(apolloErrors);
	}

	public static errorMessage(errors: GQLError[] | string, key: string) {
		if (isArray(errors)) {
			const err = errors
				? errors.find((val, index) => {
						return val.property === key;
				  })
				: undefined;
			return err ? err.constraints[Object.keys(err.constraints)[0]] : undefined;
		} else if (isString(errors)) {
			return errors;
		}
	}
}
