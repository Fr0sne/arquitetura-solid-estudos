import fastify, { FastifyInstance } from 'fastify';
import { usersRoutes } from './routes/user/user-routes';

export async function routes(app: FastifyInstance) {
	app.register(usersRoutes, {
		prefix: 'users'
	});
}