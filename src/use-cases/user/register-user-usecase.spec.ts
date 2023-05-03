import { expect, it, vitest, describe, beforeEach } from 'vitest';
import { InMemoryUserRepository, users } from '../../repositories/user/inmemory-repository';
import { RegisterUserUseCase } from './register-user-usecase';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { GenericZodError } from '../../errors/generic-zod-error';

beforeEach(() => {
	users.splice(0, users.length);
});

describe('register user usecase test', () => {
	it('should create user', () => {
		const userRepository = new InMemoryUserRepository();
		const sut = new RegisterUserUseCase(userRepository);
		const data = {
			email: 'gdart.png@gmail.com',
			name: 'Gabriel',
			password: '123123'
		};
		const user = sut.execute(data);

		expect(user).toMatchObject({ ...data, id: expect.any(String) });

	});

	it('should not be able to create a user with same email', () => {
		const userRepository = new InMemoryUserRepository();
		const sut = new RegisterUserUseCase(userRepository);
		const data = {
			email: 'gdart.png@gmail.com',
			name: 'Gabriel',
			password: '123123'
		};

		sut.execute(data);

		return expect(() => sut.execute(data)).toThrowError(UserAlreadyExistsError);

	});


});