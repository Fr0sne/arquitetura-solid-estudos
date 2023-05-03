import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { registerUserFactory } from '../../../use-cases/user/factories/register-user-factory';
import { GenericZodError } from '../../../errors/generic-zod-error';

export async function createUserController(request: FastifyRequest, reply: FastifyReply) {

	const data = request.body;

	const userSchema = z.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string().min(6)
	});
	const params = userSchema.safeParse(data);

	if (!params.success) {
		throw new GenericZodError();
	}

	const registerUseCase = registerUserFactory();

	const user = registerUseCase.execute(params.data);

	reply.status(201).send(user);
}