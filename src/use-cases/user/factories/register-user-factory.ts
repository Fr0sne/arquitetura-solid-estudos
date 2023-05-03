import { InMemoryUserRepository } from '../../../repositories/user/inmemory-repository';
import { RegisterUserUseCase } from '../register-user-usecase';

export function registerUserFactory() {
	const userRepository = new InMemoryUserRepository();

	const registerUseCase = new RegisterUserUseCase(userRepository);

	return registerUseCase;
}