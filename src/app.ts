import { fastify } from 'fastify';
import { routes } from './routes';
import { GenericZodError } from './errors/generic-zod-error';
import { ZodError } from 'zod';
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { UserAlreadyExistsError } from './use-cases/user/errors/user-already-exists-error';

const app = fastify({
});


app.setErrorHandler((error, request, reply) => {
	if (error instanceof GenericZodError) {
		reply.status(400).send({ message: error.message });
	}

	if (error instanceof ResourceNotFoundError) {
		reply.status(404).send({ message: error.message });
	}

	if (error instanceof UserAlreadyExistsError) {
		reply.status(409).send({ message: error.message });
	}

	reply.status(500).send({ message: error.message });
});


app.get('/', (request, reply) => {
	// return reply.send({ message: 'Teste' });
});

app.register(routes);



app.listen({ port: 3333 }, () => console.log('Server running at 3333'));
