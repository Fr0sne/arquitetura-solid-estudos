import { randomUUID } from 'crypto';


export const users: Array<UserInterface> = [];
export class InMemoryUserRepository implements UserRepository {
	users: Array<UserInterface> = [];
	create(data: CreateUserInterface) {
		const user = {
			id: randomUUID(),
			...data
		};

		users.push(user);

		return user;
	}

	findById(id: string) {
		const user = users.find(user => {
			return user.id === id;
		});

		return user;
	}

	findByEmail(email: string) {
		const user = users.find(user => user.email === email);

		return user;
	}

}