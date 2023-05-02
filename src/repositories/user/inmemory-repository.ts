import { randomUUID } from 'crypto';



export class InMemoryUserRepository implements UserRepository {
	users: Array<UserInterface> = [];

	create(data: CreateUserInterface) {
		const user = {
			id: randomUUID(),
			...data
		};

		this.users.push(user);

		return user;
	}

	findById(id: string) {
		const user = this.users.find(user => user.id === id);

		return user;
	}

	findByEmail(email: string) {
		const user = this.users.find(user => user.email === email);

		return user;
	}

}