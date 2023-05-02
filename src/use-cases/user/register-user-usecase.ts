import { InMemoryUserRepository } from '../../repositories/user/inmemory-repository';



export class RegisterUserUseCase {
	constructor(private userRepository: InMemoryUserRepository) { }
	async execute(data: UserInterface) {
		this.userRepository.create(data);
	}
}

// export class RegisterUserUseCase {
//     private userRepository: InMemoryUserRepository | undefined
//     constructor() {}
//     init(userRepository: InMemoryUserRepository) {
//         this.userRepository = userRepository
//     }
// }
// OU
// export class RegisterUserUseCase {
//     private userRepository: InMemoryUserRepository | undefined
//     constructor(userRepository: InMemoryUserRepository) {
//         this.userRepository = userRepository
//     }
// }
// OU
// export class RegisterUserUseCase {
//     constructor(private userRepository: any) {}
// }
// Ambos os blocos tem a mesma função. A diferença, é que quando pedimos como argumento do constructor a dependência seguido do tipo de modificador de acesso (private, public, static, protected, readonly...), ele inicializa a classe criando um atributo com o valor recebido, enquanto no código de cima tivemos que atribuir esse valor chamando um outro método. 