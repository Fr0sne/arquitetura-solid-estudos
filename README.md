# Dependências

fastify - Microframwork responsável pela entrega recebimento de dados web.

tsup - Compilador do projeto

tsx - Executor typescript do projeto para dev

eslint - Organizador para manter um padrão de código

.eslintignore - Ignora pastas selecionadas ao formatar o código do projeto.


# Tips para estruturar com SOLID

- Comece sempre pelo módulo de mais baixo nível (database module -> repository -> usecase -> controller -> ...)
- Criar Interfaces de contrato para garantir que nossas classes vão seguir obrigatoriamente algumas implementações, ex.:

```js
export class InMemoryUserRepository implements UserRepository {
  // Aqui garantimos que nossa classe seguirá implementações da interface UserRepository.
  // Isso facilita a manutenção do código em caso de futuras implementações, sem que precisemos
  // mexer em códigos de mais alto nível.
}
```
