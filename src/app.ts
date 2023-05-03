import { fastify } from 'fastify';
import { routes } from './routes';
import { AppError } from './error';
import 'dotenv/config';

export const app = fastify({
});


app.setErrorHandler((error, request, reply) => {
	if (error instanceof AppError) {
		reply.status(error.statusCode || 500).send({ message: error.message });
	}

	reply.status(500).send({ message: error.message });
});

app.register(routes);

if (process.env.NODE_ENV !== 'test') {
	app.listen({ port: 80 }, () => console.log('Server running at 3333'));
}
