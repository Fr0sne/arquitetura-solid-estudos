import { ResourceNotFoundError } from '../../errors/resource-not-found-error';

export class GetUserUseCase {
	constructor(private userRepository: UserRepository) { }
	execute({ id }: { id: string }) {
		const user = this.userRepository.findById(id);

		if (!user) {
			throw new ResourceNotFoundError();
		}

		return user;
	}
}