import { AppError } from '../error';

export class ResourceNotFoundError extends AppError {
	constructor() {
		super('Resource not found.');

		this.statusCode = 404;
	}
}