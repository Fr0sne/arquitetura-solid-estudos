import { FastifyReply, FastifyRequest } from 'fastify';
import { getUserFactory } from '../../../use-cases/user/factories/get-user-factory';

export function findUserController(request: FastifyRequest, reply: FastifyReply) {

	const getUserUseCase = getUserFactory();

	const user = getUserUseCase.execute(request.params as { id: string });

	return reply.send(user);
}