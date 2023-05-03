import { describe, expect, it } from 'vitest';
import { app as http } from '../../../app';
import { GenericZodError } from '../../../errors/generic-zod-error';

describe('create user controller test', () => {
	const headers = { 'Content-Type': 'application/json' };

	it('should be able to create a new user', async () => {
		const data = {
			email: 'gdart.png@gmail.com',
			name: 'Gabriel',
			password: '123123'
		};
		const res = await http.inject().post('/users/').headers(headers).body(data);


		expect(res.statusCode).toBe(201);
	});



	it('should not be able to create a user with missing data', async () => {

		const data = {
			email: 'gdart.png@gmail.com',
			name: 'Gabriel',
			password: '123123'
		} as any;

		delete data[Object.keys(data)[Math.floor(Math.random()) * Object.keys(data).length]];

		const res = await http.inject().post('/users/').headers(headers).body(data);

		expect(res.statusCode).toBe(400);

	});
});