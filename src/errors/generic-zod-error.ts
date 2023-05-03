import { AppError } from '../error';

export class GenericZodError extends AppError {
	constructor() {
		super('Invalid data.');

		this.statusCode = 400;
	}
}