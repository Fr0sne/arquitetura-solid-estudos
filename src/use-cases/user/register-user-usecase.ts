import { InMemoryUserRepository } from '../../repositories/user/inmemory-repository';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';



export class RegisterUserUseCase {
	constructor(private userRepository: InMemoryUserRepository) { }
	execute({ email, name, password }: CreateUserInterface) {

		if (this.userRepository.findByEmail(email)) {
			throw new UserAlreadyExistsError();
		}

		return this.userRepository.create({ email, name, password });
	}
}
