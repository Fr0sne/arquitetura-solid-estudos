# Dependências

fastify - Microframwork responsável pela entrega recebimento de dados web.

tsup - Compilador do projeto

tsx - Executor typescript do projeto para dev

eslint - Organizador para manter um padrão de código

.eslintignore - Ignora pastas selecionadas ao formatar o código do projeto.

zod - Valida os dados de entrada do usuário na nossa aplicação.

fastify-error-handler: é um plugin para o Fastify que adiciona a funcionalidade de lidar com erros de forma centralizada no aplicativo.

# Tips para estruturar com SOLID

- Validação de Entrada de Dados podem ficar no controller (comparação de senha, validação Zod etc.)

- Comece sempre pelo módulo de mais baixo nível (database module -> repository -> usecase -> controller -> ...)

- Criar Interfaces de contrato para garantir que nossas classes vão seguir obrigatoriamente algumas implementações, ex.:

```js
export class InMemoryUserRepository implements UserRepository {
  // Aqui garantimos que nossa classe seguirá implementações da interface UserRepository.
  // Isso facilita a manutenção do código em caso de futuras implementações, sem que precisemos
  // mexer em códigos de mais alto nível.
}
```

- Usar factories: Factories são funções que auxiliam a construção de uma instância usando a inversão de dependência. Algumas
vezes vamos usar várias dependências em um único módulo, então criar uma função que organiza esses usos para gente facilita e
deixa o código mais limpo.

```js
export function myFactory(){
	const myRepo = new MyRepository();
	const myUseCase = new MyUseCase(myRepo);
	return myUseCase
}

function myController(req, rep){
	const myUseCase = myFactory();
	myUseCase.execute({...})
}
```
- Mesmo que dois módulos (useCases) usem as exatas mesmas dependências, ainda sim considera-se boa prática separar as factories para melhor flexibilidade do código.

# Fastify

## Criar rotas:
```js
// newRoute.ts
export async function newRoute(app: FastifyInstance){
	app.get('/', (req, rep) => {
		return rep.send('new route')
	})
}

// index.ts
const app = fastify();
app.register(userRoute, { prefix: 'api'})

```
## Criar rotas aninhadas:
```js
// newRoute.ts
export async function newRoute(app: FastifyInstance){
	app.get('/', (req, rep) => {
		rep.send('New route!')
	})
}

// generalRoutes.ts
export async function GeneralRoutes(app: FastifyInstance){
	app.register(newRoute, { prefix: 'new-route'})
}

// index.ts
const app = fastify();
app.register(userRoute, { prefix: 'api'})

```
## Testes

- Para facilitar os testes, podemos ler a variável ambiente NODE_ENV, e criar uma condição que define se a aplicação será colocada em listening ou não. Ex.:
```js
if (process.env.NODE_ENV !== 'test') {
	app.listen({ port: 3333 }, () => console.log('Server running at 3333'));
}
```

- Teste de integração 