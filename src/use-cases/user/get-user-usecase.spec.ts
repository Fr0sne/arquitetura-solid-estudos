import { expect, it, vitest, describe, beforeEach } from 'vitest';
import { InMemoryUserRepository, users } from '../../repositories/user/inmemory-repository';
import { RegisterUserUseCase } from './register-user-usecase';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { GetUserUseCase } from './get-user-usecase';
import { ResourceNotFoundError } from '../../errors/resource-not-found-error';

beforeEach(() => {
	users.splice(0, users.length);
});

describe('get user usecase', () => {
	it('should be able to get user', () => {
		const userRepository = new InMemoryUserRepository();
		const registerUserUseCase = new RegisterUserUseCase(userRepository);
		const data = {
			email: 'gdart.png@gmail.com',
			name: 'Gabriel',
			password: '123123'
		};
		const user = registerUserUseCase.execute(data);

		const sut = new GetUserUseCase(userRepository);

		expect(sut.execute(user)).toMatchObject({ ...data, id: user.id });

	});

	it('should not be able to get a non existent user', () => {
		const userRepository = new InMemoryUserRepository();
		const sut = new GetUserUseCase(userRepository); // System Under Test

		expect(() => sut.execute({ id: 'non-existent-id' })).toThrowError(ResourceNotFoundError);

	});
});