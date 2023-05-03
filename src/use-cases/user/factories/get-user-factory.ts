import { InMemoryUserRepository } from '../../../repositories/user/inmemory-repository';
import { GetUserUseCase } from '../get-user-usecase';

export function getUserFactory() {
	const userRepository = new InMemoryUserRepository();

	const registerUseCase = new GetUserUseCase(userRepository);

	return registerUseCase;
}