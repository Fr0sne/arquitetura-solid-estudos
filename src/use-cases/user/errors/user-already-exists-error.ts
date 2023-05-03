import { AppError } from '../../../error';

export class UserAlreadyExistsError extends AppError {
	constructor() {
		super('User already exists');

		this.statusCode = 409;
	}
}