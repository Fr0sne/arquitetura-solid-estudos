import { FastifyReply, FastifyRequest } from 'fastify';
import { RegisterUserUseCase } from '../../use-cases/user/register-user-usecase';
import { InMemoryUserRepository } from '../../repositories/user/in-memory/user-repository';

export function register(request: FastifyRequest, reply: FastifyReply){
	const data = request.body as User;
	const userRepository = new InMemoryUserRepository();
	const registerUseCase = new RegisterUserUseCase(userRepository);

	registerUseCase.execute(data);
}