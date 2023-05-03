import { FastifyInstance } from 'fastify';
import { createUserController } from '../../http/controllers/user/create-user-controller';
import { findUserController } from '../../http/controllers/user/get-user-controller';

export async function usersRoutes(app: FastifyInstance) {

	app.post('/', createUserController);

	app.get('/:id', findUserController);

}