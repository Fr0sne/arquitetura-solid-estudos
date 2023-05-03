import { describe, expect, it } from 'vitest';
import { app as http } from '../../../app';

describe('create user controller test', () => {
	const headers = { 'Content-Type': 'application/json' };

	it('should be able to find existent user', async () => {
		const data = {
			email: 'gdart.png@gmail.com',
			name: 'Gabriel',
			password: '123123'
		};
		const user = (await http.inject().post('/users/').headers(headers).body(data)).json();

		const res = await http.inject().get(`/users/${user.id}`).headers(headers);

		expect(user).toMatchObject({
			...data,
			id: expect.any(String)
		});

		expect(res.statusCode).toBe(200);
	});



	it('should not be able to find user that not exists', async () => {
		const res = await http.inject().get('/users/user-id-that-not-exists').headers(headers);

		expect(res.statusCode).toBe(404);
	});
});